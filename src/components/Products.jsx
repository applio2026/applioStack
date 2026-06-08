import Icon from './Icon'

const LIVE = { label: 'Live', variant: 'badge-success', dot: true }
const ENTERPRISE = { label: 'Enterprise', variant: 'badge-accent' }

const PRODUCTS = [
  {
    icon: 'graduation',
    title: 'University EMS',
    desc: 'Full lifecycle management for universities — admissions, academics, fees, examinations, hostels, alumni. Handles multi-campus and autonomous colleges under one umbrella.',
    tags: [ENTERPRISE, { label: 'Admissions' }, { label: 'Examinations' }, { label: 'Multi-campus' }],
    cta: 'Explore University EMS',
  },
  {
    icon: 'layers',
    iconStyle: { background: 'var(--indigo-50)', color: 'var(--indigo-700)' },
    title: 'Colleges EMS',
    desc: 'Purpose-built for degree colleges and institutions. Manages student records, attendance, internal marks, fee collection, faculty workload and NAAC reports out of the box.',
    tags: [ENTERPRISE, { label: 'Attendance' }, { label: 'NAAC Reports' }],
    cta: 'Explore Colleges EMS',
  },
  {
    icon: 'folder',
    iconClass: 'icon-school',
    title: 'School EMS',
    desc: 'K–12 management covering admissions, timetables, progress cards, transport, library, parent communication and mid-day meal tracking. Works for chains of 200+ schools.',
    tags: [LIVE, { label: 'K–12' }, { label: 'Parent Portal' }, { label: 'Transport' }],
    cta: 'Explore School EMS',
  },
  {
    icon: 'exam',
    iconClass: 'icon-exam',
    title: 'Examination Management',
    desc: 'End-to-end online examinations — question banks, secure paper setting, remote proctoring, OMR & on-screen evaluation, instant results and grade-card publishing. Scales to lakhs of concurrent candidates.',
    tags: [ENTERPRISE, { label: 'Proctoring' }, { label: 'Question Bank' }, { label: 'Auto-grading' }],
    cta: 'Explore Examinations',
  },
  {
    icon: 'lms',
    iconClass: 'icon-lms',
    title: 'Smart LMS',
    desc: 'A modern learning platform with course authoring, live & recorded classes, assignments, discussion forums and adaptive learning paths. Built-in analytics surface at-risk learners before they fall behind.',
    tags: [LIVE, { label: 'Courses' }, { label: 'Live Classes' }, { label: 'Analytics' }],
    cta: 'Explore Smart LMS',
  },
  {
    icon: 'flow',
    iconClass: 'icon-process',
    title: 'Academic Process Management',
    desc: "Digitises the paperwork that runs a university — meeting records, file movement, document repository and multi-stage approval flows. Track exactly where any file or proposal sits, who's actioned it and what stage is next.",
    tags: [ENTERPRISE, { label: 'Approval Flows' }, { label: 'File Tracking' }, { label: 'Meeting Records' }],
    cta: 'Explore Process Management',
  },
  {
    icon: 'bank',
    iconClass: 'icon-finance',
    title: 'Finance & Accounting',
    desc: 'Double-entry accounting, budgeting, procurement, GST/TDS compliance, and multi-entity consolidation. Direct integration with the other five modules for zero-reconciliation billing.',
    tags: [LIVE, { label: 'GST' }, { label: 'Multi-entity' }, { label: 'Budgeting' }],
    cta: 'Explore Finance ERP',
  },
  {
    icon: 'briefcase',
    iconClass: 'icon-hr',
    title: 'HR & Payroll',
    desc: 'Hire-to-retire across all institution types. Covers recruitment, onboarding, appraisals, leave management, payroll processing and PF/ESI statutory filings.',
    tags: [LIVE, { label: 'PF / ESI' }, { label: 'Payroll' }, { label: 'Appraisals' }],
    cta: 'Explore HR & Payroll',
  },
]

function Tag({ tag }) {
  const className = ['badge', tag.variant].filter(Boolean).join(' ')
  return (
    <span className={className}>
      {tag.dot && <span className="dot" />}
      {tag.label}
    </span>
  )
}

export default function Products() {
  return (
    <section className="section" id="products">
      <div className="section-head">
        <div className="eye">Products</div>
        <h2>Eight products. One unified platform.</h2>
        <p>
          Each module is a complete, stand-alone system — and every one plugs into the shared
          Applio data layer so information flows where it needs to, without manual exports.
        </p>
      </div>

      <div className="products-grid">
        {PRODUCTS.map((p) => (
          <a className="product-card" href="#" key={p.title}>
            <div
              className={['product-icon', p.iconClass].filter(Boolean).join(' ')}
              style={p.iconStyle}
            >
              <Icon name={p.icon} className="" />
            </div>
            <div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
            <div className="product-tags">
              {p.tags.map((tag, i) => (
                <Tag tag={tag} key={i} />
              ))}
            </div>
            <div className="product-cta">
              {p.cta} <Icon name="arrow-r" className="" />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
