// npc.js — Net Price Calculator logic with localStorage persistence
(function () {
  const STORAGE_KEY = "npc_computed_v1";

  // Helpers
  function parseMoney(str) {
    if (!str && str !== 0) return NaN;
    if (typeof str === "number") return str;
    const s = String(str).replace(/[^0-9.\-]/g, "");
    return s === "" ? NaN : parseFloat(s);
  }

  function fmtMoney(n) {
    if (isNaN(n)) return "—";
    return "$" + n.toLocaleString(undefined, { maximumFractionDigits: 0 });
  }

  function getStickerCost(college, residency) {
    const cmp = college.compare || {};
    let val = parseMoney(cmp.totalYearlyCost);
    if (!isFinite(val)) {
      const tuition = parseMoney(cmp.tuition);
      const room = parseMoney(cmp.roomBoard);
      if (isFinite(tuition) && isFinite(room)) val = tuition + room;
      else if (isFinite(tuition)) val = tuition;
    }
    return val || NaN;
  }

  function parsePublishedNetPrice(college) {
    const raw = college.compare?.netPrice;
    if (!raw) return NaN;
    const m = String(raw).match(/(\d{1,3}(?:[,\d]*)(?:\.\d+)?)/);
    return m ? parseMoney(m[0]) : NaN;
  }

  function computeEstimate(college, income, familySize, outsideScholarships, residency, notes) {
    const sticker = getStickerCost(college, residency);
    if (!isFinite(sticker)) return { error: "Sticker price not available for this college." };

    const publishedNet = parsePublishedNetPrice(college);
    let baselineGrant = 0;
    if (isFinite(publishedNet) && publishedNet < sticker) {
      baselineGrant = sticker - publishedNet;
    } else {
      baselineGrant = Math.round(sticker * 0.20);
    }

    const low = 50000, high = 200000;
    let scale = 1;
    if (income <= low) scale = 1;
    else if (income >= high) scale = 0.2;
    else scale = 1 - ((income - low) / (high - low)) * (1 - 0.2);

    const adjustedGrant = Math.max(0, Math.round(baselineGrant * scale));

    let net = Math.max(0, Math.round(sticker - adjustedGrant - outsideScholarships));

    return {
      sticker,
      publishedNet,
      baselineGrant,
      adjustedGrant,
      outsideScholarships,
      net,
      notes
    };
  }

  // localStorage helpers
  function loadStored() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return {};
      return JSON.parse(raw);
    } catch (e) {
      console.warn("Failed to read storage", e);
      return {};
    }
  }

  function saveStored(obj) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
    } catch (e) {
      console.warn("Failed to save storage", e);
    }
  }

  // DOM wiring
  const collegeSelect = document.getElementById("collegeSelect");
  const incomeEl = document.getElementById("income");
  const familySizeEl = document.getElementById("familySize");
  const outsideScholarshipsEl = document.getElementById("outsideScholarships");
  const residencyEl = document.getElementById("residency");
  const notesEl = document.getElementById("notes");
  const calcBtn = document.getElementById("calcBtn");
  const applyBtn = document.getElementById("applyBtn");
  const resetBtn = document.getElementById("resetBtn");
  const resultSummary = document.getElementById("resultSummary");

  function populateColleges() {
    collegeSelect.innerHTML = COLLEGES.map((c, i) => `<option value="${i}">${c.name}</option>`).join("");
  }

  // apply persisted computed prices (so NPC page shows any previously-applied values immediately)
  function applyStoredToCollection() {
    const stored = loadStored();
    Object.keys(stored).forEach((name) => {
      const entry = COLLEGES.find((c) => c.name === name);
      if (entry) {
        entry.computedNetPrice = stored[name].computedNetPrice;
        entry._computedNetPriceMeta = stored[name].meta;
      }
    });
  }

  populateColleges();
  applyStoredToCollection();

  let lastResult = null;
  let lastCollegeIndex = 0;

  calcBtn.addEventListener("click", () => {
    const idx = parseInt(collegeSelect.value, 10);
    const college = COLLEGES[idx];
    lastCollegeIndex = idx;
    const income = Number(incomeEl.value) || 0;
    const familySize = Number(familySizeEl.value) || 1;
    const outsideScholarships = Number(outsideScholarshipsEl.value) || 0;
    const residency = residencyEl.value;
    const notes = notesEl.value;

    const res = computeEstimate(college, income, familySize, outsideScholarships, residency, notes);
    lastResult = res;

    if (res.error) {
      resultSummary.textContent = res.error;
      return;
    }

    resultSummary.innerHTML = [
      `College: ${college.name}`,
      `Sticker (estimated): ${fmtMoney(res.sticker)}`,
      res.publishedNet ? `Published average net price (if available): ${fmtMoney(res.publishedNet)}` : "No published net-price available in data.",
      `Inferred baseline institutional grant: ${fmtMoney(res.baselineGrant)}`,
      `Adjusted institutional grant (by income): ${fmtMoney(res.adjustedGrant)}`,
      `Outside scholarships you entered: ${fmtMoney(res.outsideScholarships)}`,
      `Estimated annual net price: ${fmtMoney(res.net)}`,
      res.notes ? `Notes: ${res.notes}` : ""
    ].filter(Boolean).join("\n");
  });

  applyBtn.addEventListener("click", () => {
    if (!lastResult) {
      alert("Calculate first before applying the result to the college card.");
      return;
    }
    const idx = lastCollegeIndex;
    const college = COLLEGES[idx];
    const value = lastResult.net;
    const formatted = fmtMoney(value);

    // update in-memory
    college.computedNetPrice = formatted;
    college._computedNetPriceMeta = {
      createdAt: new Date().toISOString(),
      method: "simple-estimate",
      breakdown: lastResult
    };

    // persist to localStorage
    const stored = loadStored();
    stored[college.name] = {
      computedNetPrice: formatted,
      meta: college._computedNetPriceMeta
    };
    saveStored(stored);

    alert(`Estimated net price ${formatted} applied to "${college.name}" and saved locally.`);
  });

  resetBtn.addEventListener("click", () => {
    incomeEl.value = "70000";
    familySizeEl.value = "4";
    outsideScholarshipsEl.value = "0";
    residencyEl.value = "default";
    notesEl.value = "";
    resultSummary.textContent = "No calculation yet.";
    lastResult = null;
  });
})();
