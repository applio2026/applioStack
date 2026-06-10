/**
 * Single source of truth for all eight Applio Stack products.
 * Used by the landing-page product grid, the footer, and the
 * /products/:slug detail pages.
 */

const LIVE = { label: 'Live', variant: 'badge-success', dot: true }
const ENTERPRISE = { label: 'Enterprise', variant: 'badge-accent' }

export const PRODUCTS = [
  {
    slug: 'university-ems',
    icon: 'graduation',
    title: 'University EMS',
    desc: 'Full lifecycle management for universities — admissions, academics, fees, examinations, hostels, alumni. Handles multi-campus and autonomous colleges under one umbrella.',
    tags: [ENTERPRISE, { label: 'Admissions' }, { label: 'Examinations' }, { label: 'Multi-campus' }],
    cta: 'Explore University EMS',
    tagline: 'Run the entire university on one system.',
    intro:
      'University EMS digitises every stage of the student and institutional lifecycle — from the first application form to alumni engagement. Affiliated colleges, autonomous institutions and multi-campus setups all operate under one umbrella with role-based access for every stakeholder.',
    stats: [
      { k: 'Universities live', v: '60+' },
      { k: 'Students managed', v: '18 lakh+' },
      { k: 'Affiliated colleges', v: '2,300+' },
      { k: 'Go-live time', v: '8–12 weeks' },
    ],
    modules: [
      {
        icon: 'user',
        title: 'Admissions & Enrolment',
        desc: 'Online application forms, merit lists, counselling rounds, seat allotment and document verification — with state quota and reservation rules built in.',
      },
      {
        icon: 'folder',
        title: 'Academics & Curriculum',
        desc: 'Programme and course management on CBCS/NEP patterns, timetables, attendance, internal assessment and credit transfer across departments.',
      },
      {
        icon: 'exam',
        title: 'Examinations',
        desc: 'Exam scheduling, hall tickets, secure paper distribution, evaluation, revaluation workflows, grade cards and digital degree issuance.',
      },
      {
        icon: 'bank',
        title: 'Fees & Finance',
        desc: 'Fee structures per programme/quota, online payment gateways, scholarships, refunds and automatic posting into the Finance module.',
      },
      {
        icon: 'home',
        title: 'Hostels & Campus Services',
        desc: 'Hostel allotment, mess billing, transport routes, library circulation and asset tracking — managed per campus, reported centrally.',
      },
      {
        icon: 'team',
        title: 'Alumni & Placements',
        desc: 'Alumni directory, donation drives, placement drives, recruiter portals and employment outcome reports for accreditation.',
      },
    ],
    workflow: [
      { title: 'Discovery & data audit', desc: 'We map your programmes, quotas, fee heads and legacy data — usually 2 weeks.' },
      { title: 'Configuration', desc: 'University rules, ordinances and approval chains are configured, not coded.' },
      { title: 'Migration & training', desc: 'Historic student records are migrated; every role gets hands-on training.' },
      { title: 'Go-live & support', desc: 'Phased go-live by department with a named onboarding engineer and 24×7 support.' },
    ],
    faqs: [
      {
        q: 'Can it handle affiliated and autonomous colleges together?',
        a: 'Yes. Each college runs as its own entity with local control over admissions and internals, while the university retains oversight of examinations, results and statutory reporting.',
      },
      {
        q: 'Does it support NEP 2020 / CBCS structures?',
        a: 'Programme templates support CBCS, NEP multiple entry-exit, credit banks (ABC integration) and conventional annual patterns side by side.',
      },
      {
        q: 'How is data migrated from our legacy system?',
        a: 'Our onboarding team handles extraction, cleansing and migration from Excel, legacy ERPs or custom databases. Migrated data is verified with your registrar before go-live.',
      },
      {
        q: 'Is on-premise deployment available?',
        a: 'Yes — Enterprise plans can be deployed on your own infrastructure or a private cloud, with the same feature set and update cadence.',
      },
    ],
  },
  {
    slug: 'colleges-ems',
    icon: 'layers',
    iconStyle: { background: 'var(--indigo-50)', color: 'var(--indigo-700)' },
    title: 'Colleges EMS',
    desc: 'Purpose-built for degree colleges and institutions. Manages student records, attendance, internal marks, fee collection, faculty workload and NAAC reports out of the box.',
    tags: [ENTERPRISE, { label: 'Attendance' }, { label: 'NAAC Reports' }],
    cta: 'Explore Colleges EMS',
    tagline: 'Everything a degree college needs, out of the box.',
    intro:
      'Colleges EMS packs admissions, academics, fees and compliance into a system a college office can run without an IT department. NAAC, UGC and affiliation reports generate from live data — no year-end scramble.',
    stats: [
      { k: 'Colleges live', v: '850+' },
      { k: 'Avg. setup time', v: '3 weeks' },
      { k: 'NAAC metrics covered', v: '95%' },
      { k: 'Fee collection online', v: '₹ 900 Cr+' },
    ],
    modules: [
      {
        icon: 'user',
        title: 'Student Records',
        desc: 'A single master record per student — admissions data, documents, academic history, fee ledger and communication log in one place.',
      },
      {
        icon: 'clock',
        title: 'Attendance & Timetables',
        desc: 'Period-wise attendance from mobile or biometric devices, automatic shortage alerts to students and parents, and condonation workflows.',
      },
      {
        icon: 'chart',
        title: 'Internal Marks & Results',
        desc: 'Internal assessment entry with moderation, grade calculation per university rules, and direct export to university portals.',
      },
      {
        icon: 'bank',
        title: 'Fee Collection',
        desc: 'Online and counter collection, instalment plans, concession approvals, daily reconciliation and automatic receipts.',
      },
      {
        icon: 'briefcase',
        title: 'Faculty Workload',
        desc: 'Teaching allotment, workload norms, leave-adjusted substitution and appraisal inputs collected through the year.',
      },
      {
        icon: 'shield',
        title: 'NAAC & Compliance Reports',
        desc: 'AQAR, SSR data templates, UGC and affiliation returns generated from operational data with evidence attachments.',
      },
    ],
    workflow: [
      { title: 'Self-serve setup', desc: 'Programmes, sections and fee heads configured from templates in days.' },
      { title: 'Bulk import', desc: 'Student and staff data imported from Excel with guided validation.' },
      { title: 'Staff training', desc: 'Role-wise online training for office staff, faculty and management.' },
      { title: 'Live in 3 weeks', desc: 'Most colleges run their first online fee collection within a month.' },
    ],
    faqs: [
      {
        q: 'We are a small college without IT staff. Can we manage this?',
        a: 'Yes — the system is designed for office staff. Setup uses templates, imports are guided, and our support team is on call 24×7.',
      },
      {
        q: 'Does it generate NAAC AQAR data?',
        a: 'AQAR and SSR quantitative metrics are computed from live operational data, with document evidence attached against each metric.',
      },
      {
        q: 'Can parents see attendance and marks?',
        a: 'A parent portal and mobile app show attendance, internal marks, fee dues and college notices, with SMS/WhatsApp alerts for shortages.',
      },
    ],
  },
  {
    slug: 'school-ems',
    icon: 'folder',
    iconClass: 'icon-school',
    title: 'School EMS',
    desc: 'K–12 management covering admissions, timetables, progress cards, transport, library, parent communication and mid-day meal tracking. Works for chains of 200+ schools.',
    tags: [LIVE, { label: 'K–12' }, { label: 'Parent Portal' }, { label: 'Transport' }],
    cta: 'Explore School EMS',
    tagline: 'From admission forms to report cards — handled.',
    intro:
      'School EMS runs the daily operations of K–12 schools: admissions, timetables, gradebooks, transport, fees and parent communication. Chains manage hundreds of branches from one head-office dashboard while each school keeps day-to-day autonomy.',
    stats: [
      { k: 'Schools live', v: '480+' },
      { k: 'Largest chain', v: '212 schools' },
      { k: 'Parent app rating', v: '4.7 ★' },
      { k: 'Boards supported', v: 'CBSE · ICSE · State' },
    ],
    modules: [
      {
        icon: 'plus',
        title: 'Admissions & Front Office',
        desc: 'Enquiry tracking, online registration, age-criteria validation, sibling rules and visitor/gate-pass management.',
      },
      {
        icon: 'clock',
        title: 'Timetables & Attendance',
        desc: 'Constraint-based timetable generation, substitution management, and class-wise attendance with parent notifications.',
      },
      {
        icon: 'chart',
        title: 'Gradebooks & Progress Cards',
        desc: 'CBSE/ICSE/state-board assessment schemes, co-scholastic grading and printable progress cards in your school template.',
      },
      {
        icon: 'globe',
        title: 'Transport & GPS',
        desc: 'Route and stop management, driver records, GPS tracking with live bus location for parents, and transport fee billing.',
      },
      {
        icon: 'bell',
        title: 'Parent Communication',
        desc: 'Mobile app with notices, homework, photos, fee reminders and two-way messaging — in English and regional languages.',
      },
      {
        icon: 'inbox',
        title: 'Library, Meals & Inventory',
        desc: 'Library circulation, mid-day meal tracking with government report formats, uniform and book store inventory.',
      },
    ],
    workflow: [
      { title: 'Template setup', desc: 'Board-specific templates configure classes, subjects and grading in days.' },
      { title: 'Data import', desc: 'Students, staff and fee dues imported from your current software or Excel.' },
      { title: 'Parent rollout', desc: 'Parents onboard through the app with bulk-generated logins.' },
      { title: 'Chain dashboards', desc: 'Head office gets consolidated enrolment, fee and academic dashboards.' },
    ],
    faqs: [
      {
        q: 'Does the parent app support regional languages?',
        a: 'Yes — notices and the app interface are available in major Indian languages, and circulars can be sent bilingually.',
      },
      {
        q: 'Can we run multiple boards (CBSE + state) in one school?',
        a: 'Assessment schemes are configured per wing or section, so CBSE, ICSE and state-board classes coexist in one campus.',
      },
      {
        q: 'How does pricing work for a chain of schools?',
        a: 'Chains get consolidated billing with volume discounts from 5 schools; head office gets cross-school dashboards at no extra cost.',
      },
    ],
  },
  {
    slug: 'examination-management',
    icon: 'exam',
    iconClass: 'icon-exam',
    title: 'Examination Management',
    desc: 'End-to-end online examinations — question banks, secure paper setting, remote proctoring, OMR & on-screen evaluation, instant results and grade-card publishing. Scales to lakhs of concurrent candidates.',
    tags: [ENTERPRISE, { label: 'Proctoring' }, { label: 'Question Bank' }, { label: 'Auto-grading' }],
    cta: 'Explore Examinations',
    tagline: 'High-stakes exams, delivered without incident.',
    intro:
      'Examination Management runs the full assessment lifecycle: question banks, confidential paper setting, online and centre-based delivery, AI-assisted proctoring, on-screen evaluation and instant result publishing. Built for boards, universities and recruitment bodies running lakhs of candidates per session.',
    stats: [
      { k: 'Peak concurrency', v: '3.2 lakh' },
      { k: 'Exams delivered', v: '41,000+' },
      { k: 'Evaluation speedup', v: '60% faster' },
      { k: 'Result disputes', v: '< 0.01%' },
    ],
    modules: [
      {
        icon: 'cube',
        title: 'Question Banks',
        desc: 'Tagged item banks by syllabus unit, difficulty and Bloom level, with versioning, review workflows and usage analytics.',
      },
      {
        icon: 'key',
        title: 'Secure Paper Setting',
        desc: 'Confidential paper generation with blueprint enforcement, encrypted distribution and per-centre decryption at exam time.',
      },
      {
        icon: 'eye',
        title: 'Remote & Centre Proctoring',
        desc: 'AI flagging of impersonation and malpractice, live invigilator dashboards, lockdown browser and full audit trails.',
      },
      {
        icon: 'check',
        title: 'OMR & On-screen Evaluation',
        desc: 'High-speed OMR scanning, masked digital evaluation with dual-evaluator moderation and revaluation queues.',
      },
      {
        icon: 'bolt',
        title: 'Instant Results',
        desc: 'Auto-grading for objective papers, grace-mark and normalisation rules, and one-click publishing to student portals.',
      },
      {
        icon: 'shield',
        title: 'Grade Cards & Verification',
        desc: 'Digitally signed grade cards and certificates with QR verification, DigiLocker push and transcript services.',
      },
    ],
    workflow: [
      { title: 'Blueprint & banks', desc: 'Syllabus blueprints and question banks set up with your subject experts.' },
      { title: 'Mock at scale', desc: 'A full-scale mock validates infrastructure at your real candidate volume.' },
      { title: 'Exam day ops', desc: 'A live command centre monitors every centre and candidate session.' },
      { title: 'Evaluate & publish', desc: 'Evaluation, moderation and result publishing run on a tracked timeline.' },
    ],
    faqs: [
      {
        q: 'What happens if a candidate loses power or internet mid-exam?',
        a: 'Every response is saved server-side as it happens. Candidates resume from the same question with the timer restored, and the incident is logged for the centre report.',
      },
      {
        q: 'Can it really handle lakhs of concurrent candidates?',
        a: 'Yes — capacity is pre-provisioned per exam and validated in a full-scale mock. Our largest single session ran 3.2 lakh concurrent candidates.',
      },
      {
        q: 'Is the proctoring compliant with privacy rules?',
        a: 'Recordings are encrypted, retained per your policy, and access is audit-logged. Candidates see an explicit consent screen before the exam starts.',
      },
    ],
  },
  {
    slug: 'smart-lms',
    icon: 'lms',
    iconClass: 'icon-lms',
    title: 'Smart LMS',
    desc: 'A modern learning platform with course authoring, live & recorded classes, assignments, discussion forums and adaptive learning paths. Built-in analytics surface at-risk learners before they fall behind.',
    tags: [LIVE, { label: 'Courses' }, { label: 'Live Classes' }, { label: 'Analytics' }],
    cta: 'Explore Smart LMS',
    tagline: 'Teaching online that actually feels modern.',
    intro:
      'Smart LMS gives faculty a fast way to publish courses, run live classes and grade assignments — and gives institutions learning analytics that flag at-risk students weeks before exams. It plugs into the EMS modules so enrolment, attendance and marks stay in sync automatically.',
    stats: [
      { k: 'Active learners', v: '6 lakh+' },
      { k: 'Courses hosted', v: '38,000+' },
      { k: 'Live class hours/mo', v: '2.1 lakh' },
      { k: 'At-risk detection', v: '3 wks earlier' },
    ],
    modules: [
      {
        icon: 'copy',
        title: 'Course Authoring',
        desc: 'Drag-and-drop builder for video, documents, SCORM packages and quizzes, with templates and bulk import from existing material.',
      },
      {
        icon: 'globe',
        title: 'Live & Recorded Classes',
        desc: 'Built-in live classrooms with attendance capture, auto-recording, and integrations for Zoom, Teams and Google Meet.',
      },
      {
        icon: 'check',
        title: 'Assignments & Quizzes',
        desc: 'Plagiarism-checked submissions, rubric grading, peer review and question pools with randomisation.',
      },
      {
        icon: 'team',
        title: 'Forums & Collaboration',
        desc: 'Course discussion forums, study groups, announcements and direct messaging with moderation controls.',
      },
      {
        icon: 'flow',
        title: 'Adaptive Learning Paths',
        desc: 'Prerequisite-based paths that unlock content by mastery, with remedial loops for students who fall behind.',
      },
      {
        icon: 'chart',
        title: 'Learning Analytics',
        desc: 'Engagement scores, predicted outcomes and at-risk alerts for mentors — wired to attendance and marks from the EMS.',
      },
    ],
    workflow: [
      { title: 'Sync rosters', desc: 'Courses and enrolments sync automatically from your EMS or via CSV/API.' },
      { title: 'Author or import', desc: 'Faculty build courses from templates or import existing SCORM/video content.' },
      { title: 'Teach & assess', desc: 'Live classes, assignments and quizzes run with grades flowing back to the EMS.' },
      { title: 'Act on analytics', desc: 'Mentors get weekly at-risk lists with the evidence behind each flag.' },
    ],
    faqs: [
      {
        q: 'Does it work on low-bandwidth connections?',
        a: 'Video streams adapt to connection quality, content is downloadable for offline study in the mobile app, and live classes have an audio-only mode.',
      },
      {
        q: 'Can we use our existing Zoom/Teams licences?',
        a: 'Yes — schedule through the LMS and classes launch in Zoom, Teams or Meet, with attendance and recordings pulled back automatically.',
      },
      {
        q: 'How are at-risk students identified?',
        a: 'A model combines login frequency, content completion, quiz scores and attendance to flag students trending toward failure, typically three weeks before internal exams.',
      },
    ],
  },
  {
    slug: 'academic-process-management',
    icon: 'flow',
    iconClass: 'icon-process',
    title: 'Academic Process Management',
    desc: "Digitises the paperwork that runs a university — meeting records, file movement, document repository and multi-stage approval flows. Track exactly where any file or proposal sits, who's actioned it and what stage is next.",
    tags: [ENTERPRISE, { label: 'Approval Flows' }, { label: 'File Tracking' }, { label: 'Meeting Records' }],
    cta: 'Explore Process Management',
    tagline: 'Every file, every approval — visible and on time.',
    intro:
      'Academic Process Management replaces physical file movement with tracked digital workflows. Proposals, meeting agendas, resolutions and official documents move through configurable approval chains with deadlines, escalations and a complete audit trail.',
    stats: [
      { k: 'Files in motion', v: '2.4 lakh/yr' },
      { k: 'Avg. approval time', v: '−68%' },
      { k: 'Lost files', v: 'Zero' },
      { k: 'Audit readiness', v: '100%' },
    ],
    modules: [
      {
        icon: 'flow',
        title: 'Approval Workflows',
        desc: 'Multi-stage approval chains with conditional routing, delegation during leave, deadlines and automatic escalation.',
      },
      {
        icon: 'inbox',
        title: 'File Movement & Tracking',
        desc: 'Digital noting and file movement that shows where every file sits, who has actioned it and what stage comes next.',
      },
      {
        icon: 'team',
        title: 'Meetings & Resolutions',
        desc: 'Agenda compilation for BoS, Academic Council and Syndicate meetings, minutes recording and resolution tracking to closure.',
      },
      {
        icon: 'folder',
        title: 'Document Repository',
        desc: 'Versioned central repository for ordinances, circulars and policies with access control and full-text search.',
      },
      {
        icon: 'key',
        title: 'Digital Signatures',
        desc: 'Aadhaar eSign and DSC-based signing on approvals and official documents, legally valid under the IT Act.',
      },
      {
        icon: 'search',
        title: 'Audit Trails & RTI',
        desc: 'Immutable logs of every action, with RTI-ready extracts and retention policies per document class.',
      },
    ],
    workflow: [
      { title: 'Map processes', desc: 'Your registrar office maps existing file flows to digital workflows.' },
      { title: 'Configure chains', desc: 'Approval chains, delegations and deadlines are configured per process.' },
      { title: 'Digitise records', desc: 'Active files and key historic documents are scanned and indexed.' },
      { title: 'Track & improve', desc: 'Bottleneck dashboards show where files stall, so processes keep improving.' },
    ],
    faqs: [
      {
        q: 'Can workflows match our exact ordinance-defined hierarchy?',
        a: 'Yes — chains are configured to your hierarchy, including conditional steps (e.g., finance review only above a threshold) and officiating arrangements.',
      },
      {
        q: 'Are digital signatures legally valid?',
        a: 'Aadhaar eSign and DSC signatures applied through the system are valid under the Indian IT Act, with signature certificates embedded in each document.',
      },
      {
        q: 'What happens to our existing paper files?',
        a: 'Active files are scanned and continue digitally from their current stage. Closed files can be bulk-digitised into the repository with searchable metadata.',
      },
    ],
  },
  {
    slug: 'finance-accounting',
    icon: 'bank',
    iconClass: 'icon-finance',
    title: 'Finance & Accounting',
    desc: 'Double-entry accounting, budgeting, procurement, GST/TDS compliance, and multi-entity consolidation. Direct integration with the other five modules for zero-reconciliation billing.',
    tags: [LIVE, { label: 'GST' }, { label: 'Multi-entity' }, { label: 'Budgeting' }],
    cta: 'Explore Finance ERP',
    tagline: 'Institutional finance with zero reconciliation.',
    intro:
      'Finance & Accounting is a full double-entry ERP built for educational trusts and institutions. Fee receipts, payroll and procurement post automatically from the other Applio modules, so books are always current and audit-ready — across any number of entities.',
    stats: [
      { k: 'Processed annually', v: '₹ 3,800 Cr' },
      { k: 'Entities consolidated', v: 'up to 140' },
      { k: 'Audit prep time', v: '−75%' },
      { k: 'GST/TDS filings', v: 'On time, always' },
    ],
    modules: [
      {
        icon: 'bank',
        title: 'General Ledger',
        desc: 'Configurable chart of accounts, cost centres per department or campus, year-end closing and schedule-wise financial statements.',
      },
      {
        icon: 'chart',
        title: 'Budgeting & Control',
        desc: 'Department-wise budget preparation, approval, and real-time utilisation checks that block overruns at the PO stage.',
      },
      {
        icon: 'inbox',
        title: 'Procurement & Inventory',
        desc: 'Indents, quotations, purchase orders, GRN and stores — with GeM-compatible workflows for government institutions.',
      },
      {
        icon: 'check',
        title: 'GST, TDS & Statutory',
        desc: 'Automated GST returns data, TDS computation and Form 16/16A generation, with trust and society compliance reports.',
      },
      {
        icon: 'layers',
        title: 'Multi-entity Consolidation',
        desc: 'Separate books per trust, society or institution with inter-entity transactions and one-click consolidated statements.',
      },
      {
        icon: 'bolt',
        title: 'Auto-posting Integrations',
        desc: 'Fee receipts, payroll JVs, hostel and transport billing post automatically from other Applio modules — nothing to reconcile.',
      },
    ],
    workflow: [
      { title: 'Chart & opening balances', desc: 'Your CoA is mapped and audited opening balances are imported.' },
      { title: 'Connect modules', desc: 'Fee, payroll and procurement flows are wired for auto-posting.' },
      { title: 'Parallel run', desc: 'One month runs parallel with your current books to verify accuracy.' },
      { title: 'Cut over', desc: 'Go live with daily auto-posted books and monthly MIS to management.' },
    ],
    faqs: [
      {
        q: 'Will our auditors accept the system reports?',
        a: 'Statements follow standard schedules with drill-down to vouchers and scanned supporting documents. Auditors get read-only access, and several Big-4 audits run on Applio books today.',
      },
      {
        q: 'Can it handle multiple trusts and societies?',
        a: 'Each entity keeps separate statutory books; inter-entity transactions are mirrored automatically and consolidation is one click.',
      },
      {
        q: 'Does fee collection really need no reconciliation?',
        a: 'Receipts from the EMS post to the ledger in real time with gateway settlement matching, so the daily collection report and the books are always the same number.',
      },
    ],
  },
  {
    slug: 'hr-payroll',
    icon: 'briefcase',
    iconClass: 'icon-hr',
    title: 'HR & Payroll',
    desc: 'Hire-to-retire across all institution types. Covers recruitment, onboarding, appraisals, leave management, payroll processing and PF/ESI statutory filings.',
    tags: [LIVE, { label: 'PF / ESI' }, { label: 'Payroll' }, { label: 'Appraisals' }],
    cta: 'Explore HR & Payroll',
    tagline: 'Hire-to-retire HR for academic institutions.',
    intro:
      'HR & Payroll manages teaching and non-teaching staff across schools, colleges and universities — recruitment, service records, leave, payroll and statutory filings. Pay structures handle UGC scales, state scales and consolidated pay in the same payroll run.',
    stats: [
      { k: 'Employees paid', v: '1.2 lakh+' },
      { k: 'Payroll accuracy', v: '99.99%' },
      { k: 'Statutory filings', v: 'PF · ESI · PT · TDS' },
      { k: 'Payroll run time', v: '< 30 min' },
    ],
    modules: [
      {
        icon: 'search',
        title: 'Recruitment & Onboarding',
        desc: 'Vacancy requisitions, application portals, selection committee workflows, offer letters and digital joining formalities.',
      },
      {
        icon: 'folder',
        title: 'Service Records',
        desc: 'Complete service book — postings, promotions, increments, qualifications and disciplinary records with document proofs.',
      },
      {
        icon: 'clock',
        title: 'Leave & Attendance',
        desc: 'Institution-specific leave rules (EL, CL, vacation, sabbatical), biometric integration and substitution-aware approvals.',
      },
      {
        icon: 'bank',
        title: 'Payroll Processing',
        desc: 'UGC/state pay scales, arrears and increment automation, loans and recoveries, bank advice files and payslip distribution.',
      },
      {
        icon: 'shield',
        title: 'PF, ESI & Statutory Filings',
        desc: 'ECR generation for PF, ESI returns, professional tax, TDS on salary with Form 16 — generated from each payroll run.',
      },
      {
        icon: 'chart',
        title: 'Appraisals & API Scores',
        desc: 'Self-appraisal, reviewer workflows, and academic performance indicators (API/CAS) for faculty career advancement.',
      },
    ],
    workflow: [
      { title: 'Import service data', desc: 'Employee masters and service histories imported and verified.' },
      { title: 'Configure pay rules', desc: 'Pay scales, allowances, deductions and leave rules set up per cadre.' },
      { title: 'Parallel payroll', desc: 'One cycle runs parallel against your current payroll to the rupee.' },
      { title: 'Go live', desc: 'Monthly payroll, filings and employee self-service from day one.' },
    ],
    faqs: [
      {
        q: 'Can it run UGC scales and consolidated pay together?',
        a: 'Yes — pay structures are defined per cadre, so regular faculty on UGC scales, state-scale staff and contract employees process in one payroll run.',
      },
      {
        q: 'Does it generate PF ECR and ESI return files directly?',
        a: 'ECR text files, ESI contribution files, PT returns and 24Q TDS data generate from each payroll run, ready for upload to the respective portals.',
      },
      {
        q: 'Is there an employee self-service app?',
        a: 'Employees apply for leave, download payslips and Form 16, update declarations and track appraisals from the web portal or mobile app.',
      },
    ],
  },
]

export function getProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug)
}
