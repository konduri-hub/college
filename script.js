function typeClass(type) {
  return type.toLowerCase().replace(/[^a-z]+/g, "-").replace(/(^-|-$)/g, "");
}

function renderList(list, val) {
  if (!list || !list.length) return "";
  return "<ul>" + list.map((item) => `<li>${item}</li>`).join("") + "</ul>";
}

function cardHTML(entry) {
  const medSection = entry.specialMedicalProgram
    ? `<div class="field">
        <div class="field-label">Special Medical Program</div>
        <div class="field-value"><strong>${entry.specialMedicalProgram.name}</strong> — ${entry.specialMedicalProgram.description}</div>
       </div>`
    : `<div class="field">
        <div class="field-label">Special Medical Program</div>
        <div class="field-value">None beyond standard pre-med advising</div>
       </div>`;

  const sources = entry.sources && entry.sources.length
    ? `<div class="source-links">Sources: ${entry.sources.map((s, i) => `<a href="${s}" target="_blank" rel="noopener">[${i + 1}]</a>`).join("")}</div>`
    : "";

  const topFactor = entry.topFactor
    ? `<div class="top-factor">
        <span class="top-factor-label">What matters most</span>
        <span class="top-factor-value">${entry.topFactor.factor}</span>
       </div>`
    : "";

  return `
  <article class="card" data-name="${entry.name.toLowerCase()}" data-type="${entry.type}">
    <div class="card-top">
      <h2>${entry.name}</h2>
      <span class="tag ${typeClass(entry.type)}">${entry.type}</span>
    </div>
    ${topFactor}
    <div class="field">
      <div class="field-label">Acceptance Rate</div>
      <div class="field-value acceptance-rate">${entry.acceptanceRate}</div>
    </div>
    <div class="field">
      <div class="field-label">Deadlines</div>
      <div class="field-value">${entry.deadlines}</div>
    </div>
    <div class="field">
      <div class="field-label">Scholarships</div>
      ${renderList(entry.scholarships)}
    </div>
    ${medSection}
    ${entry.topFactor ? `<div class="field"><div class="field-label">Why</div><div class="field-value">${entry.topFactor.note}</div></div>` : ""}
    ${sources ? `<details><summary>Sources</summary>${sources}</details>` : ""}
  </article>`;
}

function acceptanceSortValue(str) {
  const match = String(str).match(/(\d+(\.\d+)?)/);
  return match ? parseFloat(match[1]) : 999;
}

function render() {
  const query = document.getElementById("search").value.trim().toLowerCase();
  const type = document.getElementById("typeFilter").value;
  const sortBy = document.getElementById("sortBy").value;

  let filtered = COLLEGES.filter((c) => {
    const matchesQuery = c.name.toLowerCase().includes(query);
    const matchesType = type === "all" || c.type === type;
    return matchesQuery && matchesType;
  });

  filtered = filtered.slice().sort((a, b) => {
    if (sortBy === "acceptance") {
      return acceptanceSortValue(a.acceptanceRate) - acceptanceSortValue(b.acceptanceRate);
    }
    return a.name.localeCompare(b.name);
  });

  const grid = document.getElementById("cardGrid");
  const emptyState = document.getElementById("emptyState");

  if (!filtered.length) {
    grid.innerHTML = "";
    emptyState.hidden = false;
  } else {
    emptyState.hidden = true;
    grid.innerHTML = filtered.map(cardHTML).join("");
  }
}

document.getElementById("search").addEventListener("input", render);
document.getElementById("typeFilter").addEventListener("change", render);
document.getElementById("sortBy").addEventListener("change", render);

document.getElementById("lastUpdated").textContent = DATA_LAST_UPDATED;

render();
