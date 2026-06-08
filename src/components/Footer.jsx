const COLUMNS = [
  {
    title: 'Products',
    links: [
      'University EMS',
      'Colleges EMS',
      'School EMS',
      'Examination Management',
      'Smart LMS',
      'Academic Process Management',
      'Finance & Accounting',
      'HR & Payroll',
    ],
  },
  {
    title: 'Platform',
    links: ['Overview', 'Integrations', 'Security', 'Compliance', 'API docs', 'Status page'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Blog', 'Press', 'Partners', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'Help centre', 'Webinars', 'Case studies', 'Community', 'Changelog'],
  },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <a className="footer-logo" href="#">
            <div className="mark-bars">
              <div className="bar-1" />
              <div className="bar-2" />
              <div className="bar-3" />
            </div>
            <span className="wm">
              Applio <span>Stack</span>
            </span>
          </a>
          <p>
            Enterprise management software for education, examinations, and finance. Trusted by
            1,400+ institutions across 28 countries.
          </p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
            <span className="badge">ISO 27001</span>
            <span className="badge">SOC 2 Type II</span>
            <span className="badge">NAAC</span>
          </div>
        </div>
        <div className="footer-links">
          {COLUMNS.map((col) => (
            <div className="footer-col" key={col.title}>
              <h5>{col.title}</h5>
              {col.links.map((link) => (
                <a href="#" key={link}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © 2026 Applio Technologies Pvt. Ltd. · CIN U72900DL2018PTC123456 · All rights reserved.
        </span>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
            Privacy Policy
          </a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
            Terms of Service
          </a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
            Data Processing Agreement
          </a>
        </div>
        <span>Made in India 🇮🇳 · Hosted on AWS ap-south-1</span>
      </div>
    </footer>
  )
}
