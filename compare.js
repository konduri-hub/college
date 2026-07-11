const MAX_COMPARE = 5;
let selected = [];

const SECTIONS = [
  {
    title: "Academic",
    rows: [
      { label: "Ranking", get: (c) => c.compare?.ranking },
      { label: "Graduation rate", get: (c) => c.compare?.gradRate },
      { label: "Student:faculty ratio", get: (c) => c.compare?.studentFacultyRatio },
      { label: "Popular majors", get: (c) => Array.isArray(c.compare?.popularMajors) ? c.compare.popularMajors.join(", ") : c.compare?.popularMajors },
      { label: "Research opportunities", get: (c) => c.compare?.researchOpportunities }
    ]
  },
  {
    title: "Admissions",
    rows: [
      { label: "Acceptance rate", get: (c) => c.acceptanceRate },
      { label: "Average GPA", get: (c) => c.compare?.avgGPA },
      { label: "SAT", get: (c) => c.compare?.sat },
      { label: "ACT", get: (c) => c.compare?.act },
      { label: "Application deadlines", get: (c) => c.deadlines }
    ]
  },
  {
    title: "Costs",
    rows: [
      { label: "Tuition", get: (c) => c.compare?.tuition },
      { label: "Room and board", get: (c) => c.compare?.roomBoard },
      { label: "Total yearly cost", get: (c) => c.compare?.totalYearlyCost },
      { label: "Scholarships", get: (c) => Array.isArray(c.scholarships) ? c.scholarships.join("; ") : c.scholarships },
      { label: "Financial aid", get: (c) => c.compare?.financialAid },
      { label: "Net price", get: (c) => c.compare?.netPrice }
    ]
  }
];

function findCollege(name) {
  return COLLEGES.find((c) => c.name === name);
}

function renderChips() {
  const wrap = document.getElementById("selectedChips");
  wrap.innerHTML = selected.map((name) => `
    <span class="chip">
      ${name}
      <button type="button" class="chip-remove" data-name="${name}" aria-label="Remove ${name}">&times;</button>
    </span>
  `).join("");

  wrap.querySelectorAll(".chip-remove").forEach((btn) => {
    btn.addEventListener("click", () => {
      selected = selected.filter((n) => n !== btn.dataset.name);
      renderChips();
      renderTable();
    });
  });
}

function renderTable() {
  const wrap = document.getElementById("compareTableWrap");

  if (!selected.length) {
    wrap.innerHTML = `<p class="empty-state">Search above and pick up to 5 schools to compare.</p>`;
    return;
  }

  const cols = selected.map(findCollege);

  let html = `<table class="compare-table"><thead><tr><th class="row-label-col"></th>`;
  html += cols.map((c) => `<th>${c.name}<br><span class="tag ${c.type.toLowerCase().replace(/[^a-z]+/g, "-").replace(/(^-|-$)/g, "")}">${c.type}</span></th>`).join("");
  html += `</tr></thead><tbody>`;

  SECTIONS.forEach((section) => {
    html += `<tr class="section-row"><td colspan="${cols.length + 1}">${section.title}</td></tr>`;
    section.rows.forEach((row) => {
      html += `<tr><td class="row-label-col">${row.label}</td>`;
      html += cols.map((c) => `<td>${row.get(c) || "—"}</td>`).join("");
      html += `</tr>`;
    });
  });

  html += `</tbody></table>`;
  wrap.innerHTML = html;
}

function renderPickerResults(query) {
  const resultsEl = document.getElementById("pickerResults");
  if (!query) {
    resultsEl.hidden = true;
    resultsEl.innerHTML = "";
    return;
  }

  const q = query.toLowerCase();
  const matches = COLLEGES.filter((c) => c.name.toLowerCase().includes(q) && !selected.includes(c.name)).slice(0, 8);

  if (!matches.length) {
    resultsEl.hidden = false;
    resultsEl.innerHTML = `<div class="picker-item picker-item-empty">No matches</div>`;
    return;
  }

  resultsEl.hidden = false;
  resultsEl.innerHTML = matches.map((c) => `<div class="picker-item" data-name="${c.name}">${c.name}</div>`).join("");

  resultsEl.querySelectorAll(".picker-item[data-name]").forEach((el) => {
    el.addEventListener("click", () => {
      if (selected.length >= MAX_COMPARE) return;
      selected.push(el.dataset.name);
      document.getElementById("pickerSearch").value = "";
      renderPickerResults("");
      renderChips();
      renderTable();
    });
  });
}

const searchInput = document.getElementById("pickerSearch");
searchInput.addEventListener("input", () => {
  if (selected.length >= MAX_COMPARE) {
    document.getElementById("pickerResults").hidden = true;
    return;
  }
  renderPickerResults(searchInput.value.trim());
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".picker")) {
    document.getElementById("pickerResults").hidden = true;
  }
});

document.getElementById("lastUpdated").textContent = DATA_LAST_UPDATED;

renderChips();
renderTable();
