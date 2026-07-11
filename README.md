# College & Medical Program Explorer

Find information about the listed colleges and compare them.

## About

**College & Medical Program Explorer** is a free, interactive web tool designed to help students and families research selective US colleges, universities, combined BS/MD programs, and major scholarship opportunities in one place.

### Features

- **Explorer**: Search and browse 30+ colleges and programs by name, filter by type (universities, combined programs, scholarships), and sort by acceptance rate or name
- **Comparison**: Select up to 5 schools and view a side-by-side table comparing academic metrics, admissions stats, costs, and financial aid
- **Rich Data**: Each entry includes acceptance rates, application deadlines, scholarship details, tuition & fees, research opportunities, and links to official sources

### What's Included

- **Universities**: Brown, Duke, Johns Hopkins, UNC Chapel Hill, Emory, UC system, and more
- **Combined BS/MD Programs**: Brown PLME, Case Western PPSP, Rochester REMS, Pitt GAP, and others
- **Scholarship Programs**: ECU Brinkley Lane, UNCC Levine, and merit/need-based awards
- **Medical Programs**: Early assurance tracks and direct-entry medical pathways

### How to Use

1. Visit [**College Explorer**](https://konduri-hub.github.io/college/) (GitHub Pages)
2. **Explorer page**: Use the search bar, type filter, and sort options to explore schools
3. **Compare page**: Search for schools, click to select up to 5, and view a detailed comparison table

### Data Accuracy

Figures are compiled from public admissions websites, financial aid offices, and recent Common Data Set (CDS) filings as of July 2026. Application deadlines, acceptance rates, and financial aid packages **change yearly**—always verify current-cycle information directly on each school's official admissions site before making decisions.

### Technology

- **Frontend**: Vanilla JavaScript, HTML, CSS (no build process required)
- **Hosting**: GitHub Pages
- **Data**: Static JSON embedded in `data.js`

### Getting Started (Local Development)

To run locally:

```bash
# Python 3
python -m http.server 8000

# or Node.js
npx http-server
```

Then open `http://localhost:8000` in your browser.

### Files

- `index.html` – Explorer page UI
- `compare.html` – Comparison page UI
- `script.js` – Search, filter, sort logic for Explorer
- `compare.js` – Selection and table rendering for Comparison
- `data.js` – College dataset (30+ entries with detailed metrics)
- `style.css` – Responsive design for both pages

### Contributing

To add or update college data, edit `data.js` and follow the existing object schema. Include sources as URLs for verification.

### Disclaimer

This tool is a reference resource. All figures are best-effort estimates. Students should independently verify data with official school websites and consult with school counselors and admissions offices.

---

*Built as a student resource. Last updated: July 2026.*
