import { Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'

const COLUMNS = [
  {
    title: 'Products',
    links: PRODUCTS.map((p) => ({ label: p.title, to: `/products/${p.slug}` })),
  },
  {
    title: 'Platform',
    links: [
      { label: 'Overview', to: '/#products' },
      { label: 'Integrations' },
      { label: 'Security' },
      { label: 'Compliance' },
      { label: 'API docs' },
      { label: 'Status page' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About' },
      { label: 'Careers' },
      { label: 'Blog' },
      { label: 'Press' },
      { label: 'Partners' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Book a demo', to: '/book-demo' },
      { label: 'Documentation' },
      { label: 'Help centre' },
      { label: 'Webinars' },
      { label: 'Case studies' },
      { label: 'Changelog' },
    ],
  },
]

function FooterLink({ link }) {
  if (link.to) {
    return <Link to={link.to}>{link.label}</Link>
  }
  return <a href="#">{link.label}</a>
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link className="footer-logo" to="/">
            <div className="mark-bars">
              <div className="bar-1" />
              <div className="bar-2" />
              <div className="bar-3" />
            </div>
            <span className="wm">
              Applio <span>Stack</span>
            </span>
          </Link>
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
                <FooterLink link={link} key={link.label} />
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
