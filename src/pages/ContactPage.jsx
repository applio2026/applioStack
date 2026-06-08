import { Link } from 'react-router-dom'
import Icon from '../components/Icon'

// Company contact details — replace these placeholders with the real ones.
const METHODS = [
  {
    icon: 'mail',
    label: 'Email us',
    value: 'sales@applio.io',
    href: 'mailto:sales@applio.io',
  },
  {
    icon: 'phone',
    label: 'Call us',
    value: '+91 80 4718 2200',
    href: 'tel:+918047182200',
  },
]

export default function ContactPage() {
  return (
    <main className="contact-page">
      <div className="contact-card">
        <Link className="nav-logo contact-logo" to="/">
          <div className="mark-bars">
            <div className="bar-1" />
            <div className="bar-2" />
            <div className="bar-3" />
          </div>
          <span className="wordmark">
            Applio <span>Stack</span>
          </span>
        </Link>

        <div className="eye">Get in touch</div>
        <h1>Let's connect.</h1>
        <p className="contact-lead">
          Tell us about your institution and we'll set up a demo or talk through pricing. Reach our
          team directly — we usually reply within a few hours.
        </p>

        <div className="contact-methods">
          {METHODS.map((m) => (
            <a className="contact-method" href={m.href} key={m.label}>
              <span className="cm-icon">
                <Icon name={m.icon} className="" />
              </span>
              <span>
                <span className="cm-label">{m.label}</span>
                <span className="cm-value">{m.value}</span>
              </span>
            </a>
          ))}
        </div>

        <p className="contact-meta">
          Mon–Fri · 9:00–18:00 IST · Applio Technologies Pvt. Ltd., Bengaluru, India
        </p>

        <Link className="btn btn-secondary" to="/">
          <Icon name="arrow-r" style={{ transform: 'rotate(180deg)' }} />
          Back to home
        </Link>
      </div>
    </main>
  )
}
