// npc.js — Net Price Calculator logic with localStorage persistence
// Updated: prefer published average net price directly when available (option 1)
(function () {
  const STORAGE_KEY = "npc_computed_v1";

  // Helpers
  function parseMoney(str) {
    // Extract the first numeric token like "92,042" or "92042.50" from strings such as "$92,042 (2025-26)"
    if (typeof str === "number") return str;
    if (!str && str !== 0) return NaN;
    const s = String(str);
    const m = s.match(/(\d{1,3}(?:[,\d]*)(?:\.\d+)?)/);
    if (!m) return NaN;
    return parseFloat(m[1].replace(/,/g, ""));
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

    // Option 1: When a published average net price exists, use it directly (most transparent)
    if (isFinite(publishedNet)) {
      // Use published net price as the estimate, optionally subtract outside scholarships
      const net = Math.max(0, Math.round(publishedNet - (outsideScholarships || 0)));
      const baselineGrant = sticker - publishedNet; // informational
      return {
        method: "published-net-direct",
        sticker,
        publishedNet,
        baselineGrant,
        adjustedGrant: baselineGrant,
        outsideScholarships,
        net,
        notes
      };
    }

    // Fallback: heuristic when published net price is not available
    let baselineGrant = Math.round(sticker * 0.20);

    const low = 50000, high = 200000;
    let scale = 1;
    if (income <= low) scale = 1;
    else if (income >= high) scale = 0.2;
    else scale = 1 - ((income - low) / (high - low)) * (1 - 0.2);

    const adjustedGrant = Math.max(0, Math.round(baselineGrant * scale));

    let net = Math.max(0, Math.round(sticker - adjustedGrant - outsideScholarships));

    return {
      method: "heuristic",
      sticker,
      publishedNet: NaN,
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
    const toDelete = [];
    Object.keys(stored).forEach((name) => {
      const entry = COLLEGES.find((c) => c.name === name);
      if (entry) {
        const num = parseMoney(stored[name].computedNetPrice);
        // sanitize obviously-bad stored values (e.g., numbers > $1,000,000)
        if (!isFinite(num) || num > 1000000) {
          toDelete.push(name);
        } else {
          entry.computedNetPrice = stored[name].computedNetPrice;
          entry._computedNetPriceMeta = stored[name].meta;
        }
      } else {
        // unknown college in storage — remove
        toDelete.push(name);
      }
    });
    if (toDelete.length) {
      toDelete.forEach((k) => delete stored[k]);
      saveStored(stored);
    }
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

    const lines = [];
    lines.push(`College: ${college.name}`);
    lines.push(`Sticker (estimated): ${fmtMoney(res.sticker)}`);
    if (isFinite(res.publishedNet)) {
      lines.push(`Published average net price: ${fmtMoney(res.publishedNet)} (used directly as the estimate)`);
    } else {
      lines.push("No published net-price available in data.");
    }
    lines.push(`Inferred baseline institutional grant: ${fmtMoney(res.baselineGrant)}`);
    if (res.method === "published-net-direct") {
      lines.push(`Adjusted institutional grant (informational): ${fmtMoney(res.adjustedGrant)}`);
    } else {
      lines.push(`Adjusted institutional grant (by income): ${fmtMoney(res.adjustedGrant)}`);
    }
    lines.push(`Outside scholarships you entered: ${fmtMoney(res.outsideScholarships)}`);
    lines.push(`Estimated annual net price: ${fmtMoney(res.net)}`);
    if (res.notes) lines.push(`Notes: ${res.notes}`);

    resultSummary.innerHTML = lines.join("\n");
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
      method: lastResult.method || "simple-estimate",
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
