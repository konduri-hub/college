const DATA_LAST_UPDATED = "July 2026 (compiled from public admissions/financial-aid sources — verify current-cycle figures on each school's official site)";

const COLLEGES = [
  {
    name: "Brown University",
    type: "University",
    compare: {
      ranking: "#13, US News 2025",
      gradRate: "~95% (6-year)",
      studentFacultyRatio: "6:1",
      popularMajors: ["Computer Science", "Economics", "Computational/Applied Mathematics", "International Relations", "Biology"],
      researchOpportunities: "Undergraduate Teaching and Research Awards (UTRA) fund faculty-mentored research/teaching projects (typically an 8-10 week summer commitment), open to all class years.",
      avgGPA: "Not officially published; est. ~3.8-3.9 unweighted (89% of enrollees in top 10% of HS class)",
      sat: "~1510-1560 (middle 50%)",
      act: "34-35 (middle 50%)",
      tuition: "$71,700 (2025-26)",
      roomBoard: "~$18,500",
      totalYearlyCost: "~$96,000-$97,300",
      financialAid: "\"Brown Promise\" meets 100% of demonstrated need, no loans; 48% of first-years receive need-based aid; avg grant $65,370",
      netPrice: "~$26,776 avg for aided students; ~$57,870 avg across all students"
    },
    topFactor: {
      factor: "Fully holistic — 8 factors tied at \"Very Important\"",
      note: "Rigor, GPA, test scores, essay, recommendations, extracurriculars, talent, and character all rank equally per Brown's CDS; essays/character are often cited as the real differentiator once academic thresholds are met."
    },
    acceptanceRate: "~5.35% overall (Class of 2030); ED ~14.6%, RD ~3.6%",
    deadlines: "Early Decision: Nov 1 &middot; Regular Decision: Jan 5",
    scholarships: [
      "No merit aid — 100% need-based only",
      "Meets 100% of demonstrated need for all admits",
      "Need-blind admission (incl. international) from Class of 2029",
      "No loans in aid packages — grants/scholarships only"
    ],
    specialMedicalProgram: {
      name: "Program in Liberal Medical Education (PLME)",
      description: "Brown's 8-year combined BA/BS + MD program — see the separate PLME card for admission details."
    },
    sources: [
      "https://admission.brown.edu/plme",
      "https://finaid.brown.edu/aid-types/grants-scholarships",
      "https://admission.brown.edu/first-year/regular-decision"
    ]
  },
  {
    name: "Brown PLME",
    type: "Combined BS/MD Program",
    compare: {
      ranking: "Same as Brown University (#13, US News 2025)",
      gradRate: "Same as Brown University (~95%)",
      studentFacultyRatio: "Same as Brown University (6:1)",
      popularMajors: ["No fixed pre-med major — any of Brown's ~80-100 concentrations under the Open Curriculum", "Neuroscience", "Biology", "Biomedical Engineering (common choices)"],
      researchOpportunities: "PLME Summer Research Assistantship (SRA) funds research with a Brown faculty mentor; specialized tracks include the Emerging Infectious Disease/HIV Scholars Program and international health exchanges.",
      avgGPA: "Not disclosed; program is far more selective than regular Brown admissions (est. top-of-class, ~3.9+ unweighted)",
      sat: "Avg ~1527 among matriculants; top admits often 1530-1580",
      act: "Avg ~35 among accepted students",
      tuition: "Same as Brown University ($71,700)",
      roomBoard: "Same as Brown University (~$18,500)",
      totalYearlyCost: "Same as Brown University (~$96,000-$97,300)",
      financialAid: "Same as Brown University (Brown Promise, 100% need met, no loans)",
      netPrice: "Same as Brown University (~$26,776 avg for aided students)"
    },
    topFactor: {
      factor: "STEM coursework rigor & grades",
      note: "PLME requires near-flawless grades (no below a B) in physics, chemistry, and advanced math, plus a recommendation specifically from a science/math teacher — the program's clearest distinguishing screen."
    },
    acceptanceRate: "~2.2% (e.g., 84 of 3,827 applicants in a recent cohort) — far more selective than Brown overall",
    deadlines: "Apply via Brown's ED (Nov 1) or RD (Jan 5) application indicating PLME interest; RD applicants submit a video introduction by Jan 7",
    scholarships: ["Same Brown need-based aid policy applies — no separate PLME merit funding"],
    specialMedicalProgram: {
      name: "Program in Liberal Medical Education (PLME)",
      description: "8-year continuum combining a Brown undergraduate degree with an MD from Warren Alpert Medical School. Conditional early acceptance to medical school straight out of high school, contingent on maintaining program requirements. The only combined BA/MD program in the Ivy League."
    },
    sources: [
      "https://admission.brown.edu/plme",
      "https://plme.med.brown.edu/",
      "https://plme.med.brown.edu/admission/deadlines"
    ]
  },
  {
    name: "Case Western Reserve University",
    type: "University",
    compare: {
      ranking: "#51, US News 2025",
      gradRate: "87% (6-year)",
      studentFacultyRatio: "9:1",
      popularMajors: ["Biology/Biological Sciences", "Nursing (RN)", "Biomedical Engineering", "Mechanical Engineering", "Computer Science"],
      researchOpportunities: "SOURCE (Support of Undergraduate Research & Creative Endeavors) lets students launch research as early as freshman year; 81% of undergrads participate in research/creative work with faculty.",
      avgGPA: "~3.78 average; 46.8% of admits in the 3.75-4.0 range",
      sat: "1440-1520 (middle 50%)",
      act: "32-34 (middle 50%); test-optional (~40% applied test-optional)",
      tuition: "$68,660 (2025-26)",
      roomBoard: "~$19,514",
      totalYearlyCost: "$88,570 (on-campus, incl. fees, books, personal expenses)",
      financialAid: "84% of students receive grants/scholarships; avg award ~$40,215; meets ~98% of demonstrated need on average",
      netPrice: "~$38,942-$48,355 average (varies by source/year)"
    },
    topFactor: {
      factor: "Academic rigor, class rank & GPA (tied with extracurriculars)",
      note: "CWRU's CDS marks these as the only \"Very Important\" factors; essays/recommendations are \"Important,\" test scores merely \"Considered.\""
    },
    acceptanceRate: "~35.3% (Class of 2029: 13,890 of 39,332 applicants)",
    deadlines: "Early Action / ED I: Nov 1 &middot; ED II: Jan 15 &middot; Regular Decision: Jan 15",
    scholarships: [
      "Automatic merit scholarships for all applicants, ~$10,000 up to full tuition",
      "National Merit Scholarships ($1,000–$2,000) for finalists naming CWRU first choice",
      "Arts Scholarships — full tuition for exceptional performing-arts talent",
      "Need-based aid meets 100% of demonstrated need"
    ],
    specialMedicalProgram: {
      name: "Pre-Professional Scholars Program (PPSP)",
      description: "CWRU's 8-year combined BS/MD program — see the separate PPSP card for admission details."
    },
    sources: [
      "https://case.edu/admission/tuition-aid/scholarships",
      "https://case.edu/admission/apply/dates-deadlines"
    ]
  },
  {
    name: "Case Western Reserve University PPSP",
    type: "Combined BS/MD Program",
    compare: {
      ranking: "Same as Case Western Reserve University (#51, US News 2025)",
      gradRate: "Same as CWRU (87%)",
      studentFacultyRatio: "Same as CWRU (9:1)",
      popularMajors: ["No required major (Medicine track) — commonly Biology or Biomedical/Bioengineering", "Dentistry-track scholars aren't required to complete a bachelor's before entering dental school"],
      researchOpportunities: "Same schoolwide access as CWRU (81% of undergrads do research via SOURCE), plus PPSP-specific clinical placements: Rainbow Babies & Children's Hospital, Cleveland Clinic reproductive medicine research, MetroHealth ER experience, and VA Medical Center work.",
      avgGPA: "Not disclosed; expected near-4.0 unweighted given ~1% acceptance rate for the Medicine track",
      sat: "No official range published; competitive/recommended minimum ~1490 (CWRU/PPSP is test-optional)",
      act: "Recommended minimum ~34 for competitive candidates",
      tuition: "Same as CWRU ($68,660)",
      roomBoard: "Same as CWRU (~$19,514)",
      totalYearlyCost: "Same as CWRU ($88,570)",
      financialAid: "Same as CWRU (84% receive aid, ~98% of need met)",
      netPrice: "Same as CWRU (~$38,942-$48,355)"
    },
    topFactor: {
      factor: "The interview",
      note: "After an initial screen requiring top-decile class rank and 95th-percentile+ test scores, CWRU's own PPSP page states final selection happens after the interview."
    },
    acceptanceRate: "Not officially published; widely reported as ~20 admitted from 3,500+ applicants (under 1%) — one of the most selective BS/MD tracks in the country",
    deadlines: "Apply ED I or RD to CWRU and indicate PPSP interest; PPSP-specific deadline Dec 1 (financial aid docs Dec 15, notification Jan 30)",
    scholarships: ["No PPSP-specific scholarship; standard CWRU merit/need-based aid applies to admitted scholars"],
    specialMedicalProgram: {
      name: "Pre-Professional Scholars Program (PPSP) in Medicine",
      description: "8-year combined program (4-year undergrad + CWRU School of Medicine). Conditional admission to med school is secured before starting undergrad; MCAT is not required to keep the guarantee as long as GPA, coursework, and conduct requirements are maintained."
    },
    sources: [
      "https://case.edu/admission/academics/pre-professional-programs",
      "https://case.edu/studentlife/careercenter/graduate-and-professional-school-planning/pre-professional-scholars-program"
    ]
  },
  {
    name: "Duke University",
    type: "University",
    compare: {
      ranking: "#7, US News 2025-26 (4-way tie)",
      gradRate: "~96-97% (6-year)",
      studentFacultyRatio: "6:1 (71.4% of classes have <20 students)",
      popularMajors: ["Computer Science", "Economics", "Biology", "Public Policy", "Psychology"],
      researchOpportunities: "Bass Connections offers year-long interdisciplinary research teams (faculty + grad + undergrad); more than half of undergrads engage in faculty research during their time at Duke.",
      avgGPA: "Not officially published; est. ~3.8-3.9 unweighted (25th-75th percentile)",
      sat: "1520-1570 (middle 50%)",
      act: "33-35 (middle 50%); test-optional",
      tuition: "$70,265 (2025-26)",
      roomBoard: "~$19,247",
      totalYearlyCost: "$92,042 (2025-26)",
      financialAid: "Meets 100% of demonstrated need on average (95% of recipients had full need met); avg need-based grant to first-years ~$70,439",
      netPrice: "~$23,422 avg for aided students"
    },
    topFactor: {
      factor: "Academic rigor & GPA (tied with recommendations, extracurriculars, talent, character)",
      note: "Duke's CDS ties 6 factors at \"Very Important\"; the essay is only \"Important\" and test scores merely \"Considered\" (test-optional for the 2026-27 cycle)."
    },
    acceptanceRate: "~4.73% overall (Class of 2030: 2,930 of 61,935); ED ~13.75%, RD ~3.73%",
    deadlines: "Early Decision: Nov 2 &middot; Regular Decision: Jan 4",
    scholarships: [
      "A.B. Duke Scholarship — full tuition/room/board/fees (~$315,000 over 4 years), auto-considered",
      "Benjamin N. Duke Scholarship — for NC/SC residents",
      "Robertson Scholars Leadership Program — full tuition/room/board across Duke and UNC-Chapel Hill, separate application (~mid-Nov)",
      "Karsh International Scholarship — for high-potential international students"
    ],
    specialMedicalProgram: {
      name: "None",
      description: "No combined BS/MD or early-assurance medical program for undergraduates — standard pre-med advising/coursework only. Duke's MD dual-degree offerings (e.g., MD/MEng) are for students already enrolled in medical school."
    },
    sources: [
      "https://ousf.duke.edu/merit-scholarships/merit-scholarships-incoming-first-year-students/",
      "https://admissions.duke.edu/checklist/",
      "https://www.shemmassianconsulting.com/blog/duke-medical-school"
    ]
  },
  {
    name: "East Carolina University",
    type: "University",
    compare: {
      ranking: "#192, US News 2026 (National Universities); #104 Top Public Schools",
      gradRate: "62% (6-year); 82% first-year retention",
      studentFacultyRatio: "17:1",
      popularMajors: ["Nursing", "Business Administration & Management", "Psychology", "Biology", "Communication"],
      researchOpportunities: "URCA (Undergraduate Research & Creative Activity) awards up to $2,000 for faculty-mentored projects; Course-based Undergraduate Research Experiences (CUREs) embed research into regular classes.",
      avgGPA: "~3.28 average HS GPA of admitted freshmen",
      sat: "~1080-1155 composite (estimate; avg EBRW 578, avg Math 562)",
      act: "19-25 (middle 50%), average 22",
      tuition: "In-state $7,361/yr; Out-of-state $23,638/yr",
      roomBoard: "~$16,142/yr",
      totalYearlyCost: "In-state ~$25,013; Out-of-state ~$41,290",
      financialAid: "63% of freshmen receive grant/scholarship aid (avg ~$7,761); ~51% receive federal loans (avg $5,180)",
      netPrice: "Overall avg $16,703; range $11,128-$22,787 by income bracket"
    },
    topFactor: {
      factor: "Academic GPA (tied with essay & recommendations)",
      note: "ECU's CDS rates GPA, essays, and recommendations \"Very Important\"; extracurriculars/talent/character are only \"Considered.\""
    },
    acceptanceRate: "~89.2% (2024 cycle: 23,524 of 26,369 applicants)",
    deadlines: "Early Action priority: Nov 1 (rolling admission) &middot; Honors College application: Dec 1",
    scholarships: [
      "Brinkley-Lane Scholars — ECU's top merit award (see separate ECU Brinkley Lane card)",
      "Standard Honors College and departmental merit scholarships also available"
    ],
    specialMedicalProgram: {
      name: "Early Assurance Program in Medicine",
      description: "Run jointly by ECU's Honors College and Brody School of Medicine. Open only to current ECU Honors College NC-resident students, selected during sophomore year (not incoming freshmen); requires 3.5 GPA, prerequisite coursework, and 500+ MCAT, yielding assured admission to a specific Brody MD cohort two years later. Only ~4 students selected per year — distinct from the Brinkley-Lane scholarship."
    },
    sources: [
      "https://medicine.ecu.edu/admissions/early-assurance-program/",
      "https://honors.ecu.edu/admissions/early-assurance/medicine/"
    ]
  },
  {
    name: "ECU Brinkley Lane",
    type: "Scholarship Program",
    compare: {
      ranking: "Same as East Carolina University (#192, US News 2026)",
      gradRate: "Institutional rate 62% (6-yr); Brinkley-Lane cohort not separately reported, functionally near 100% given full funding/support",
      studentFacultyRatio: "Same as East Carolina University (17:1)",
      popularMajors: ["Not separately published — discipline-based supplemental awards up to $12,000 suggest concentration in Business, Humanities, Nursing, and Social Sciences"],
      researchOpportunities: "Guaranteed research internship placement alongside faculty in the Engagement and Outreach Scholars Academy, plus a leadership internship and cohort trips — a structured, guaranteed placement rather than a competitive grant.",
      avgGPA: "Typical scholar profile ~3.8-4.0 unweighted in rigorous coursework — well above ECU's general ~3.28 average",
      sat: "Test-optional; competitive applicants typically report 1300-1450",
      act: "Competitive applicants typically 28-33",
      tuition: "Same as East Carolina University (in-state $7,361 / out-of-state $23,638) — covered by the scholarship",
      roomBoard: "Same as East Carolina University (~$16,142) — covered by the scholarship",
      totalYearlyCost: "Same as East Carolina University (~$25,013 in-state / ~$41,290 out-of-state) — fully covered",
      financialAid: "This IS the aid — full-ride award covering complete cost of attendance for 8 semesters, value exceeding $78,000 over 4 years, plus $5,000 study-abroad stipend and up to $3,000 enrichment scholarship",
      netPrice: "$0 (full cost of attendance covered) for all recipients regardless of income bracket"
    },
    topFactor: {
      factor: "Character & personal qualities",
      note: "Strong academics get applicants to finalist status, but the multi-round review and \"Selection Sunday\" interview are built to surface empathy, community-mindedness, and fit."
    },
    acceptanceRate: "Highly selective — ~900 applicants narrowed to 50 finalists, ~20 selected annually",
    deadlines: "Honors College application: Dec 1 &middot; Finalist notification: ~Jan 31 &middot; Selection interviews: mid-Feb &middot; Final award notification: ~early March",
    scholarships: [
      "Brinkley-Lane Scholars — fully funded 4-year award covering tuition, fees, room & board (in-state and out-of-state) plus a $5,000 study-abroad stipend and $3,000 enrichment fund"
    ],
    specialMedicalProgram: {
      name: "Not a medical program",
      description: "Brinkley-Lane is ECU's flagship four-year merit/leadership scholarship, open to any major — it is not a medical-admission guarantee. ECU's actual guaranteed-admission medical pathway is the separate Early Assurance Program in Medicine (see the East Carolina University card)."
    },
    sources: [
      "https://brinkleylane.ecu.edu/",
      "https://brinkleylane.ecu.edu/about-the-award/",
      "https://news.ecu.edu/2023/08/24/brinkley-lane-scholars-program-commences-with-donor-honors/"
    ]
  },
  {
    name: "Emory University",
    type: "University",
    compare: {
      ranking: "#24, US News 2026 (3rd consecutive year at this rank)",
      gradRate: "91% (6-year)",
      studentFacultyRatio: "8:1",
      popularMajors: ["Business/Management Science", "General Biological Sciences", "Neuroscience", "Nursing", "Psychology/Economics"],
      researchOpportunities: "SURE (Summer Undergraduate Research Experience) is a 10-week faculty-mentored program with housing award + stipend; the Undergraduate Research Programs office supports research across all disciplines and years.",
      avgGPA: "3.89-4.00 unweighted (17% had 4.00+, 58% had 3.75-3.99)",
      sat: "1480-1540 (middle 50%, median 1510)",
      act: "32-35 (middle 50%)",
      tuition: "$67,080 (2025-26); tuition-free from fall 2026 for families earning <$200,000",
      roomBoard: "~$21,244",
      totalYearlyCost: "$88,536 (2025-26 sticker price)",
      financialAid: "Need-blind for domestic applicants, meets 100% of demonstrated need; ~41-42% of first-years receive need-based aid, avg $65,000-67,000",
      netPrice: "~$26,680-27,986 overall avg; ~$24,142-27,392 for aid recipients"
    },
    topFactor: {
      factor: "Broadly holistic — 7 factors tied at \"Very Important\"",
      note: "Emory's CDS places rigor, GPA, essay, recommendations, test scores, extracurriculars, talent, and character all in the top tier — an unusually wide holistic net."
    },
    acceptanceRate: "~12.3% overall (Class of 2030: ~5,317 of 43,269); ED I ~29%",
    deadlines: "Early Decision I: Nov 1 &middot; Early Decision II / Regular Decision: Jan 1 (Scholars consideration requires full application by Nov 15)",
    scholarships: [
      "Emory Woodruff Scholars / Oxford College Woodruff Scholars — full-to-partial tuition merit scholarships with mentorship and early registration, no separate application (~175-200 Scholar Finalists/year from ~10,000 applicants)"
    ],
    specialMedicalProgram: {
      name: "None",
      description: "No combined BS/MD or guaranteed early-assurance medical program; standard pre-health advising only (Emory Pre-Health Mentoring Office)."
    },
    sources: [
      "https://apply.emory.edu/financial-aid/scholar-program.html",
      "https://apply.emory.edu/apply/first-year/plans-deadlines/index.html"
    ]
  },
  {
    name: "Johns Hopkins University",
    type: "University",
    compare: {
      ranking: "#7 (tie), US News 2026 — tied with Duke, Northwestern, UPenn",
      gradRate: "~94.6% (6-year)",
      studentFacultyRatio: "6:1",
      popularMajors: ["Cell/Molecular Biology", "Computer Science", "Neuroscience", "Public Health", "Biomedical/Bioengineering"],
      researchOpportunities: "~70% of undergrads engage in research outside coursework, starting as early as freshman year, via Provost's Undergraduate Research Awards, the Woodrow Wilson Fellowship, and Dean's ASPIRE Grants.",
      avgGPA: "Not precisely published; admit pool predominantly 3.9+ unweighted",
      sat: "1530-1570 (middle 50%, Class of 2029)",
      act: "~34-35 (middle 50%)",
      tuition: "$66,670 (2025-26); tuition-free since 2025 for families earning <$200,000 (JHU Tuition Promise)",
      roomBoard: "~$22,430",
      totalYearlyCost: "~$92,000 sticker price (2025-26)",
      financialAid: "Need-blind admissions, meets 100% of demonstrated need; 51-69% of undergrads receive grants/scholarships, avg ~$50,356",
      netPrice: "Overall avg ~$53,746; for aid recipients specifically, avg ~$24,765"
    },
    topFactor: {
      factor: "Academics & essays (6 factors tied at \"Very Important\")",
      note: "JHU's CDS rates rigor, GPA, class rank, test scores, essay, and recommendations all \"Very Important,\" while extracurriculars/talent/character drop to \"Important\" — academics and essays outrank activities here."
    },
    acceptanceRate: "5.14% overall (Class of 2029: 2,525 of 49,112); ED ~10.49%, RD ~4.17%",
    deadlines: "ED I: Nov 1 (fin. aid Nov 15) &middot; ED II: Jan 2 (fin. aid Jan 15) &middot; Regular Decision: Jan 2 (fin. aid Jan 15)",
    scholarships: [
      "Hodson Trust Scholarship — ~20/year, $42,000/yr ($168,000 total), auto-considered",
      "Bloomberg Distinguished Scholarship — full tuition for exceptional promise in a field",
      "Charles R. Westgate Scholarship in Engineering — up to 2/year, full tuition"
    ],
    specialMedicalProgram: {
      name: "None",
      description: "No guaranteed/direct-entry BS/MD pathway. Undergrads may apply to Johns Hopkins School of Medicine, but admission is a fully separate, competitive process with no linkage or guarantee."
    },
    sources: [
      "https://apply.jhu.edu/tuition-aid/types-of-financial-aid/merit-scholarships/",
      "https://apply.jhu.edu/how-to-apply/application-deadlines-requirements/",
      "https://www.hopkinsmedicine.org/som/education-programs/md-program/curriculum-and-degrees/combined-degree-programs"
    ]
  },
  {
    name: "NC State",
    type: "University",
    compare: {
      ranking: "#64, US News 2026 (down from #58 in the 2025 edition)",
      gradRate: "80% (6-year); 94% freshman retention",
      studentFacultyRatio: "15:1",
      popularMajors: ["Business Administration & Management", "General Biological Sciences", "Computer Science", "Engineering (notably Nuclear, Textile, Agricultural/Biological Engineering)"],
      researchOpportunities: "Office of Undergraduate Research offers Project Supply Grants (up to $500 supplies + $1,000 paid work), Federal Work-Study research compensation, and specialized fellowships — competitive small grants rather than a universal guarantee.",
      avgGPA: "~3.83 average incoming unweighted (94% of admits in top quarter of HS class)",
      sat: "1290-1440 (middle 50%)",
      act: "25-32 (middle 50%)",
      tuition: "In-state ~$8,704/yr; Out-of-state ~$33,964/yr (2025-26 estimate)",
      roomBoard: "~$17,562/yr",
      totalYearlyCost: "In-state ~$27,237; Out-of-state ~$51,285 (2024-25 confirmed figures)",
      financialAid: "68% of first-time full-time undergrads receive some aid; 50% receive grant/scholarship aid averaging ~$11,811",
      netPrice: "Overall avg ~$15,522; in-state aid recipients ~$15,114; out-of-state aid recipients ~$34,872"
    },
    topFactor: {
      factor: "Academic rigor & GPA",
      note: "NC State's CDS marks only these two factors \"Very Important\"; essays, recommendations, test scores, and extracurriculars are merely \"Considered\" — the clearest stats-driven profile in this list."
    },
    acceptanceRate: "~42% overall (18,381 of 44,043); EA ~48%, RD ~38%",
    deadlines: "Early Action: Nov 1 &middot; Regular Decision: Jan 15 (Park Scholarship supplemental app also due Nov 1)",
    scholarships: [
      "Park Scholarships — full cost of attendance, ~38/year, separate application due Nov 1",
      "Goodnight Scholars Program — for NC STEM/STEM-ed majors, need-based (~$150k household income cap), ~$23,000/yr",
      "Caldwell Fellows — selected from NC State's enrolled freshman class, $6,300/yr tuition scholarship + $2,700 experiential grant"
    ],
    specialMedicalProgram: {
      name: "None",
      description: "No BS/MD or in-house early-assurance medical pathway at NC State itself. North Carolina's early-assurance medical programs run through ECU's Brody School of Medicine, not NC State."
    },
    sources: [
      "https://park.ncsu.edu/",
      "https://goodnight.ncsu.edu/",
      "https://caldwellfellows.ncsu.edu/"
    ]
  },
  {
    name: "Tulane University",
    type: "University",
    compare: {
      ranking: "#69, US News 2025",
      gradRate: "86.9% (6-year)",
      studentFacultyRatio: "7:1",
      popularMajors: ["Finance", "Psychology", "Public Health/Health Professions", "Biology/Environmental Science"],
      researchOpportunities: "Office of Undergraduate Research funds academic-year and summer research grants; the Tulane Undergraduate Research Network connects students to faculty-mentored assistantships.",
      avgGPA: "3.77 (avg unweighted, recalculated, Class of 2029)",
      sat: "1430-1500 (middle 50%); test-optional, ~half of admits don't submit",
      act: "32-34",
      tuition: "$67,592-$68,678 (2025-26)",
      roomBoard: "~$19,630-$21,608",
      totalYearlyCost: "~$87,000-$90,300",
      financialAid: "59% of undergrads receive grants/scholarships, avg ~$35,988; avg need-based grant to first-years ~$54,852",
      netPrice: "~$50,600 average; ~$39,600 for students receiving need-based aid"
    },
    topFactor: {
      factor: "Academic rigor, class rank, GPA & test scores",
      note: "All four marked \"Very Important\" per Tulane's CDS; essays/recommendations/character are the next tier, extracurriculars only \"Considered.\""
    },
    acceptanceRate: "~15% overall for Class of 2030 (32,000+ applicants); ED acceptance ~25-30%",
    deadlines: "ED I: Nov 1 &middot; EA: Nov 10 &middot; ED II / Regular Decision: Jan 15",
    scholarships: [
      "Dean's Honor Scholarship — full tuition, renewable 4 years (3.0 GPA min)",
      "Stamps Scholarship — ~5/year, full cost of attendance + enrichment fund",
      "All Common App applicants auto-considered for merit aid (from Class of 2026 admits on)"
    ],
    specialMedicalProgram: {
      name: "Tulane Pathway to Medicine (TPM)",
      description: "Invitation-only early-assurance program guaranteeing admission to Tulane School of Medicine after 4 years of undergrad in good standing. No shortened timeline or financial benefit — the sole benefit is guaranteed admission. Invitations sent in January to highly competitive applicants (SAT 1540+/ACT 35+ range); students must matriculate at Tulane as freshmen (no gap-year deferral)."
    },
    sources: [
      "https://admission.tulane.edu/academics/degrees-requirements/accelerated-degree-programs/tulane-pathway-to-medicine",
      "https://admission.tulane.edu/tuition-aid/merit-scholarships",
      "https://admission.tulane.edu/apply/deadlines-forms"
    ]
  },
  {
    name: "UNC Chapel Hill",
    type: "University",
    compare: {
      ranking: "#26, US News 2025",
      gradRate: "91.2% (6-year)",
      studentFacultyRatio: "~15:1 (one source cites 17:1)",
      popularMajors: ["Biology/Biological Sciences", "Psychology", "Business Administration & Management", "Media/Communication"],
      researchOpportunities: "Office for Undergraduate Research (OUR) administers Summer Undergraduate Research Fellowships (SURFs), travel awards, and the Carolina Research Scholar Program.",
      avgGPA: "4.49 (avg weighted HS GPA of admits)",
      sat: "~1350-1530 (middle 50%, combined EBRW+Math)",
      act: "30-34 (middle 50%)",
      tuition: "In-state $7,020/yr; Out-of-state $43,152/yr (2025-26)",
      roomBoard: "~$15,038",
      totalYearlyCost: "In-state ~$28,000-$33,340; Out-of-state ~$64,846-$70,420",
      financialAid: "~50% of undergrads receive aid; avg grant/scholarship ~$16,499; meets 100% of demonstrated need",
      netPrice: "~$11,140 average after aid"
    },
    topFactor: {
      factor: "Rigor of secondary school record",
      note: "The only factor UNC's CDS rates \"Very Important\"; GPA, class rank, essays, and recommendations are all \"Important,\" extracurriculars merely \"Considered.\""
    },
    acceptanceRate: "~15.3% overall (10,209 of 66,535); in-state ~38%, out-of-state ~8.1%",
    deadlines: "Early Action: Oct 15 &middot; Regular Decision: Jan 15",
    scholarships: [
      "Morehead-Cain Scholarship — ~75/year, covers tuition/fees/housing/meals + four summer enrichment experiences",
      "Robertson Scholars Leadership Program — shared with Duke, covers tuition/room/board at either campus with cross-enrollment access"
    ],
    specialMedicalProgram: {
      name: "None",
      description: "No combined undergraduate BS/MD; UNC School of Medicine offers only graduate-level combined degrees (MD/PhD, MD/MPH, MD/MBA)."
    },
    sources: [
      "https://studentaid.unc.edu/faq/ive-heard-of-the-morehead-cain-scholars-and-the-robertson-scholars-non-need-basedmerit-programs-can-you-tell-me-more/",
      "https://admissions.unc.edu/apply/decisions/",
      "https://www.med.unc.edu/education/additional-degrees/"
    ]
  },
  {
    name: "UNCC Levine",
    type: "Scholarship Program",
    compare: {
      ranking: "Same as UNC Charlotte — #143, US News 2025",
      gradRate: "Institutional ~69% (6-year); Levine cohort typically far higher given selectivity, no distinct published figure",
      studentFacultyRatio: "Same as UNC Charlotte — 21:1",
      popularMajors: ["Not separately published — Levine Scholars span all UNC Charlotte majors with a leadership/interdisciplinary emphasis"],
      researchOpportunities: "Scholars get facilitated faculty research connections and support to present at the National Conference on Undergraduate Research, plus an $8,000 grant for a self-designed community-partnership project.",
      avgGPA: "Typical successful candidates ~3.8-4.0 unweighted",
      sat: "Test-optional, not the primary decision factor; historically strong range cited",
      act: "29-36",
      tuition: "Same as UNC Charlotte — In-state $3,926/yr; Out-of-state $22,018/yr (2025-26)",
      roomBoard: "Same as UNC Charlotte — ~$15,010/yr",
      totalYearlyCost: "Same as UNC Charlotte — In-state ~$25,437; Out-of-state ~$40,690",
      financialAid: "The Levine award itself: full 4-year package (tuition, housing, meals, fees, book stipend) valued over $129,000 in-state / $192,000 out-of-state; ~20 scholars/year",
      netPrice: "Effectively $0 out-of-pocket for the ~20 recipients per year — a full ride"
    },
    topFactor: {
      factor: "Ethical leadership & community service",
      note: "Program materials state test scores are supplemental, not primary — the emphasis is on sustained intellectual passion, service commitment, and leadership, assessed through essays and finalist interviews."
    },
    acceptanceRate: "~20 scholars chosen/year from a large nominated pool (UNC Charlotte's overall acceptance rate ~79.6%)",
    deadlines: "Nomination window Aug 15–Oct 15 &middot; UNC Charlotte application due Nov 1 &middot; Levine supplemental application (3 essays, activities list, 3 recs) due Nov 15",
    scholarships: [
      "Levine Scholars Program — ~20 new scholars/year, valued ~$129,000 (NC resident) to ~$192,000 (out-of-state); covers full tuition, housing, meals, fees, plus a book/summer stipend",
      "Albert Scholarships — for incoming engineering majors in the Honors Program"
    ],
    specialMedicalProgram: {
      name: "Not a medical program",
      description: "Confirmed no medical-program tie-in — the Levine Scholars Program is a general leadership/academic/community-service merit scholarship, not a BS/MD or pre-health track."
    },
    sources: [
      "https://levinescholars.charlotte.edu/",
      "https://levinescholars.charlotte.edu/nomination-application-process/applicant-profile/"
    ]
  },
  {
    name: "University of Chicago",
    type: "University",
    compare: {
      ranking: "#6, US News 2026 (up from #11 the prior year)",
      gradRate: "96% (6-year; also cited as 95%)",
      studentFacultyRatio: "5:1 (CDS reports 6.4:1 to tenure-stream faculty specifically)",
      popularMajors: ["Economics (by far #1)", "Computer Science", "Mathematics", "Biological Sciences", "Political Science"],
      researchOpportunities: "The College Center for Research and Fellowships (CCRF) runs a searchable Research Opportunity Database and coordinates funded summer research (e.g., College Summer Research Fellows, NSF REUs).",
      avgGPA: "4.97 average weighted HS GPA of enrolled first-years; ~58% of the class had a 4.0",
      sat: "~1510-1580 (middle 50%, approximate — school is test-optional)",
      act: "34-35 (middle 50%)",
      tuition: "$71,325 (2025-26)",
      roomBoard: "$20,835 (2025-26)",
      totalYearlyCost: "$98,301 (tuition + room/board + fees + books + personal expenses, 2025-26)",
      financialAid: "~33-34% of students receive need-based aid, avg award ~$78,383-82,308; meets 100% of demonstrated need; free tuition for families <$125K, full ride for families <$60K",
      netPrice: "Wide variance by source (~$14,860-$18,967 typical); by income: <$30K/yr families average net negative (-$1,264); >$110K/yr families ~$48,524"
    },
    topFactor: {
      factor: "Rigor, essays & recommendations",
      note: "UChicago's CDS elevates these three to \"Very Important\" while GPA, class rank, and test scores are only \"Considered\" — notably lower emphasis on raw stats than most peers."
    },
    acceptanceRate: "~4.5% (Class of 2028); estimated ≤4.5% for more recent cycles",
    deadlines: "ED I / EA: Nov 3 &middot; ED II / Regular Decision: Jan 5",
    scholarships: [
      "University Merit Scholarships — automatic consideration, $2,000–$25,000/yr, some full tuition",
      "Odyssey Scholarship — need-based, full tuition + $5,000 career development grant, no-loan, guaranteed funded research/internship",
      "QuestBridge National College Match — full scholarship for high-achieving, low-income students"
    ],
    specialMedicalProgram: {
      name: "None",
      description: "No BS/MD program."
    },
    sources: [
      "https://financialaid.uchicago.edu/undergraduate/how-aid-works/types-of-aid/scholarships/",
      "https://collegeadmissions.uchicago.edu/financial-support/scholarships/"
    ]
  },
  {
    name: "University of Miami",
    type: "University",
    compare: {
      ranking: "#64, US News 2026",
      gradRate: "83-84% (6-year)",
      studentFacultyRatio: "11:1 (US News); university's own site states 12:1",
      popularMajors: ["Nursing", "Finance", "Psychology", "Biology/Biological Sciences", "Business/Marketing"],
      researchOpportunities: "The Office of Undergraduate Research and Creative Endeavors (UGR) connects students to faculty-mentored research via named programs like PRIME and Lois Pope Summer Scholars.",
      avgGPA: "3.89 average unweighted (official Fall 2025 Class Profile)",
      sat: "1360-1480 (middle 50%, Fall 2025; ~60% of admits report scores)",
      act: "30-34 (middle 50%, official class profile)",
      tuition: "$63,452 (2025-26)",
      roomBoard: "$24,742 (2025-26)",
      totalYearlyCost: "$97,774 (on-campus, 2025-26)",
      financialAid: "79% of full-time beginning undergrads received grant/scholarship aid; avg package ~$60,263; meets ~96% of demonstrated need",
      netPrice: "Wide variance by source, ~$40,000-$51,000/yr typical range"
    },
    topFactor: {
      factor: "Academic profile & extracurriculars",
      note: "Miami's CDS rates rigor, class rank, GPA, test scores, essay, AND extracurriculars all \"Very Important\" — an unusually broad top tier spanning both academics and activities."
    },
    acceptanceRate: "17.55% (Fall 2025, record low, from 58,139 applications)",
    deadlines: "ED I / EA: Nov 1 &middot; ED II / Regular Decision: Jan 5 (Frost School of Music RD: Dec 1)",
    scholarships: [
      "Stamps Scholarship — full cost of attendance for 8 semesters + $12,000 enrichment fund",
      "Isaac Bashevis Singer Scholarship — full tuition for 8 semesters",
      "Premier Scholarships — require application by Nov 1 (ED I or EA)"
    ],
    specialMedicalProgram: {
      name: "Health Professions Mentoring (HPM) Program (formerly \"Honors Program in Medicine\")",
      description: "3-year mentoring/enrichment pipeline (research, a Clinical Medicine course, personalized MCAT prep) for invited students, identified automatically from the applicant pool. Explicitly does NOT guarantee medical school admission. UM's actual guaranteed-admission pathway, the Medical Scholars Program, is only open to continuing UM undergrads after sophomore year (3.75+ GPA, 512+ MCAT) — not an entering-freshman BS/MD."
    },
    sources: [
      "https://prehealth.miami.edu/hpm/index.html",
      "https://admissions.miami.edu/undergraduate/financial-aid/scholarships/freshman/index.html",
      "http://admissions.med.miami.edu/md-programs/medical-scholars-program"
    ]
  },
  {
    name: "University of Pennsylvania",
    type: "University",
    compare: {
      ranking: "#7, US News 2026 (up from #10 in the 2025 edition)",
      gradRate: "96.5% (6-year, confirmed) — a previously-cited 86% figure was actually the 4-year rate",
      studentFacultyRatio: "8:1",
      popularMajors: ["Finance/Financial Analytics (Wharton)", "Nursing", "Econometrics/Quantitative Economics", "Biology", "Philosophy/Economics/Political Science"],
      researchOpportunities: "Research funding exceeds $966M/year; undergrads across all four schools can do faculty-mentored research (volunteer, work-study, paid, or for credit), coordinated via the Center for Undergraduate Research and Fellowships (CURF).",
      avgGPA: "~3.9 unweighted (59% of enrolled students arrived with a 4.0 GPA)",
      sat: "1510-1570 (middle 50%)",
      act: "34-36 (middle 50%)",
      tuition: "$63,204 (2025-26)",
      roomBoard: "$19,876 ($13,132 housing + $6,744 board)",
      totalYearlyCost: "$91,112 (tuition + fees $8,032 + room + board, 2025-26)",
      financialAid: "45.4% of undergrads receive aid; avg package $70,552 (covers 76% of cost); 100% of need met; families ≤$200K get full-tuition scholarships (Quaker Commitment)",
      netPrice: "~$25,315-$26,017 average for aided students"
    },
    topFactor: {
      factor: "Academics tied with essays, recommendations & character",
      note: "Penn's CDS ties five factors at \"Very Important\"; test scores are only \"Considered\" (though SAT/ACT became required starting with the 2025-26 cycle)."
    },
    acceptanceRate: "5.84% (Class of 2030: 3,575 of 61,264); Class of 2029 was 4.87% (record low)",
    deadlines: "Early Decision: Nov 1 &middot; Regular Decision: Jan 5",
    scholarships: [
      "100% need-based aid only — no academic/athletic merit scholarships",
      "Vagelos Scholars Program in the Molecular Life Sciences — named endowed award for 20+ science students/year, tied to competitive program admission"
    ],
    specialMedicalProgram: {
      name: "None",
      description: "No BS/MD program."
    },
    sources: [
      "https://srfs.upenn.edu/financial-aid/grants-and-scholarships",
      "https://admissions.upenn.edu/how-to-apply/first-year-applicants"
    ]
  },
  {
    name: "University of Pittsburgh Guaranteed",
    type: "Combined BS/MD Program",
    compare: {
      ranking: "Same as University of Pittsburgh — #69 National Universities, US News 2026 (#32 Top Public Schools)",
      gradRate: "Same as University of Pittsburgh — 6-year figure pending confirmation (72% cited as a 4-year rate)",
      studentFacultyRatio: "Same as University of Pittsburgh — 13:1",
      popularMajors: ["No major restriction for GAP — common choices are Neuroscience, Biology, and Bioengineering"],
      researchOpportunities: "GAP students get dedicated advising each semester on research/volunteering/clinical activities; broader Pitt undergrad research is open to all class years via a biannual Undergraduate Research and Creative Expression Fair.",
      avgGPA: "Competitive applicants typically ~3.5+ unweighted minimum; must maintain 3.70 BCPM once in the program",
      sat: "Not publicly disclosed — only the minimum eligibility floor is published (1500 combined)",
      act: "Not publicly disclosed — only the minimum eligibility floor is published (34 composite)",
      tuition: "Same as University of Pittsburgh — In-state $21,926 / Out-of-state $41,430 (2025-26)",
      roomBoard: "Same as University of Pittsburgh — ~$14,720",
      totalYearlyCost: "Same as University of Pittsburgh — ~$36,244 in-state / ~$57,150 out-of-state (excl. books/personal)",
      financialAid: "Same as University of Pittsburgh — ~46-47% of first-years receive need-based aid; avg award ~$19,019",
      netPrice: "Same as University of Pittsburgh — ~$24,286 average"
    },
    topFactor: {
      factor: "Interview & recommendation letters",
      note: "Beyond the GPA/MCAT/SAT eligibility cutoffs, Pitt's GAP page states no one is admitted without an interview and calls recommendation letters \"extremely important\" for assessing personal competencies."
    },
    acceptanceRate: "Not publicly disclosed; highly selective, drawn from top-tier high school applicants",
    deadlines: "Pitt undergraduate application: Oct 15 &middot; Required GAP webform: Nov 1 &middot; Supplemental application: Jan 30 &middot; Interviews: March",
    scholarships: [
      "No GAP-specific scholarship; GAP students remain eligible for standard Pitt merit awards (University Scholarship, Chancellor's Scholarship if also an Honors College admit)"
    ],
    specialMedicalProgram: {
      name: "Guaranteed Admission Program (GAP)",
      description: "4+4 structure (4 years Pitt undergrad + 4 years School of Medicine) — not an accelerated combined degree. Requires SAT 1500+/ACT 34+ and U.S. citizenship/permanent residency; once admitted, students must maintain a 3.70 GPA (3.70 in sciences), complete the degree in 4 years, and score 517+ on the MCAT within 3 attempts. Guarantees a seat in the UPSOM incoming class."
    },
    sources: [
      "https://www.medadmissions.pitt.edu/upsom-programs/guaranteed-admission-program",
      "https://admissions.pitt.edu/guaranteed-admissions-programs/medicine/"
    ]
  },
  {
    name: "University of Rochester",
    type: "University",
    compare: {
      ranking: "#44, US News 2025",
      gradRate: "75% (4-year cited; 6-year figure pending confirmation)",
      studentFacultyRatio: "10:1",
      popularMajors: ["Biology", "Business", "Computer Science", "Economics", "Public Health"],
      researchOpportunities: "Undergraduate research is a hallmark of Rochester's curriculum, with faculty-mentored opportunities across departments and the Eastman School of Music for performance-track students.",
      avgGPA: "~3.86 (admitted, recalculated) / ~3.72 (enrolled Class of 2028 average)",
      sat: "~1420-1500 (middle 50%, enrolled)",
      act: "32-34 (enrolled) / 32-35 (admitted)",
      tuition: "$69,030 (2025-26)",
      roomBoard: "$20,466 ($12,328 room + $8,138 board)",
      totalYearlyCost: "$92,270 (2025-26 official, residential students: tuition $69,030 + fees $1,452 + housing/food $20,466 + transportation $300 + personal $1,022)",
      financialAid: "67% of undergrads receive grants/scholarships; avg aid $42,046",
      netPrice: "~$47,516 average — flagged for a sanity check against College Scorecard"
    },
    topFactor: {
      factor: "Academic rigor & GPA (tied with extracurriculars & character)",
      note: "Rochester's CDS ties these four at \"Very Important\"; essays/recommendations/interview are \"Important.\" REMS specifically screens hardest on stats — typical admits have ~3.95 GPA and top-3% rank."
    },
    acceptanceRate: "40% (Fall 2024: 8,150 of 20,308)",
    deadlines: "ED I: Nov 1 &middot; ED II / Regular Decision: Jan 5 (no Early Action option)",
    scholarships: [
      "Bausch + Lomb Science Scholarship — $6,000/yr for science excellence, running since 1933",
      "Renaissance Scholar Award — up to $10,000/yr",
      "General merit scholarships — ~half of admitted students receive aid averaging ~$14,000/yr, automatic consideration"
    ],
    specialMedicalProgram: {
      name: "Rochester Early Medical Scholars (REMS)",
      description: "8-year combined BA/BS + MD program (est. 1991), admitting ~8-10 students/year. Guarantees conditional admission to the University of Rochester School of Medicine and Dentistry and exempts scholars from the MCAT. REMS-specific application deadline is Nov 15 (earlier than general RD); strong applicants typically have ~3.95 GPA and top 3% class rank."
    },
    sources: [
      "https://admissions.rochester.edu/academics/rems/",
      "https://www.rochester.edu/financial-aid/scholarships/"
    ]
  },
  {
    name: "University of South Carolina",
    type: "University",
    compare: {
      ranking: "#127 (tied), US News 2026; #63 Top Public Schools",
      gradRate: "~77-78% (6-year)",
      studentFacultyRatio: "18:1 (one source cites 19:1)",
      popularMajors: ["Business Administration/Management", "Public Health", "Finance", "Biology/Biological Sciences", "Marketing"],
      researchOpportunities: "The Magellan Scholar program awards up to $2,500 per student for faculty-mentored research (salary, materials, or travel) across all disciplines; requires a 3.2+ GPA to apply.",
      avgGPA: "~3.69 average unweighted (figures inconsistent across sources — treat with caution)",
      sat: "~1200-1360 (middle 50%)",
      act: "26-32 (middle 50%)",
      tuition: "In-state $12,288-$12,688/yr; Out-of-state $38,098/yr (2025-27 figures; small discrepancy in-state, likely tuition-only vs. tuition+fees)",
      roomBoard: "$17,334/yr",
      totalYearlyCost: "In-state ~$31,602; Out-of-state ~$57,412 (direct costs, excl. books/personal/transportation)",
      financialAid: "98% of incoming freshmen receive some financial aid; avg need-based grant to first-years ~$14,644",
      netPrice: "~$23,138 in-state / ~$45,050 out-of-state average for aid recipients"
    },
    topFactor: {
      factor: "GPA, rigor & test scores",
      note: "USC's CDS rates these three \"Very Important\" — a more stats-driven profile than the holistic private schools. BARSC & MD adds a second-round interview and healthcare/leadership experience once the academic bar is cleared."
    },
    acceptanceRate: "~60% overall (2025 cycle: ~31,701 of ~52,703 applicants); 71% in-state vs 52% out-of-state",
    deadlines: "Early Action: Oct 15 &middot; Regular Decision: Dec 1 (Honors College/Top Scholar supplemental application: Nov 15)",
    scholarships: [
      "McNair Scholars Award (nonresident) — $22,000/yr + in-state tuition rate + $12,000 enrichment fund",
      "Horseshoe Scholars Award (nonresident) — $11,000/yr + in-state tuition rate",
      "Trustees' Endowment Scholars Award — merit + need based, ~1480 SAT/34 ACT average among recipients"
    ],
    specialMedicalProgram: {
      name: "Accelerated Undergraduate to M.D. (BARSC & MD)",
      description: "7-year combined BA/BS + MD track run jointly by the SC Honors College and USC School of Medicine – Columbia. Students complete undergrad/Honors requirements in 3 years, then proceed directly into medical school. Fewer than 10 students per cohort; invitation-only after applying to USC and the Honors College by Nov 15."
    },
    sources: [
      "https://sc.edu/study/majors_and_degrees/accelerated-undergraduate-to-md-barsc-and-md.php",
      "https://sc.edu/about/offices_and_divisions/undergraduate_admissions/tuition_scholarships/nonresidents/"
    ]
  },
  {
    name: "Vanderbilt University",
    type: "University",
    compare: {
      ranking: "#17, US News 2026 (up from #18)",
      gradRate: "93% (6-year)",
      studentFacultyRatio: "8:1 (avg. class size 13)",
      popularMajors: ["Economics", "Social Sciences", "Multi-/Interdisciplinary Studies", "Medicine/Health & Society", "Psychology", "Computer Science"],
      researchOpportunities: "Immersion Vanderbilt (a graduation requirement) funds culminating research/creative projects; the Vanderbilt Undergraduate Summer Research Program (VUSRP) is a paid 10-week program pairing students with faculty mentors.",
      avgGPA: "~3.89 average unweighted (not an official CDS figure); ~89% of admits have GPA ≥ 3.75",
      sat: "1510-1560 (middle 50%, official)",
      act: "34-35 (middle 50%, official)",
      tuition: "$67,934 tuition + $3,292 fee = $71,226 (2025-26)",
      roomBoard: "$23,048 (2025-26: $14,760 housing + $8,288 dining)",
      totalYearlyCost: "~$94,274 (2025-26 direct costs: tuition+fees+housing+dining)",
      financialAid: "64-68% of undergrads receive need-based aid; need-blind, meets 100% of demonstrated need; avg award ~$58,699-$79,177",
      netPrice: "~$20,374-$25,606/yr average (sources vary; no single official figure)"
    },
    topFactor: {
      factor: "Broadly holistic — 6 factors tied at \"Very Important\"",
      note: "Rigor, class rank, GPA, essays, extracurriculars, and character all sit at the top tier per Vanderbilt's CDS; test scores and recommendations are \"Important\" — reflecting fully holistic review rather than one dominant factor."
    },
    acceptanceRate: "4.7% overall (Class of 2029); RD 3.3%, ED 13.2%",
    deadlines: "ED I: Nov 1 &middot; ED II / Regular Decision: Jan 1 (merit scholarship applications due Dec 1)",
    scholarships: [
      "Cornelius Vanderbilt Scholarship — signature full/partial merit award",
      "Chancellor's Scholarship — full tuition + summer stipend",
      "Ingram Scholars Program — full tuition + fees + housing + summer service stipend (20 hrs/month service commitment)",
      "Curb Leadership Scholarship — $8,000/yr renewable, drawn from the Cornelius Vanderbilt applicant pool"
    ],
    specialMedicalProgram: {
      name: "None",
      description: "No combined BS/MD program — the School of Medicine's former Early Acceptance Program (EAP) has been discontinued; standard pre-med track only."
    },
    sources: [
      "https://www.vanderbilt.edu/scholarships/signature/",
      "https://www.vanderbilt.edu/scholarships/chancellor/",
      "https://www.vanderbilt.edu/scholarships/ingram/",
      "https://medschool.vanderbilt.edu/md-gateway/dual-degree-requirements/"
    ]
  }
];
