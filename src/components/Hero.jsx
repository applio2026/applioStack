import { Link } from 'react-router-dom'
import Icon from './Icon'

const STATS = [
  { k: 'Institutions', v: '1,400+' },
  { k: 'Countries', v: '28' },
  { k: 'Uptime SLA', v: '99.98%' },
  { k: 'Support', v: '24 × 7' },
  { k: 'Compliance', v: 'ISO 27001 · SOC 2' },
]

const TRUST = ['IIT Delhi', 'BITS Pilani', 'DPS Group', 'Amity University', 'HDFC Ltd']

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid" />
      <div className="hero-inner">
        <div className="hero-badge">
          <span className="badge-tag">New</span>
          <span>Applio Stack v2.0 · Examination &amp; Academic Process modules now available</span>
        </div>
        <h1>
          Enterprise management
          <br />
          software <em>built to scale.</em>
        </h1>
        <p className="hero-sub">
          Eight integrated platforms — from university admissions to online examinations to
          payroll — unified under one login, one dashboard, one support team. Built for
          institutions that can't afford downtime.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary btn-lg" href="#products">
            Explore products <Icon name="arrow-r" />
          </a>
          <Link className="btn btn-secondary btn-lg" to="/book-demo">
            Request a demo
          </Link>
        </div>
        <div className="hero-stats">
          {STATS.map((s) => (
            <div className="hero-stat" key={s.k}>
              <div className="k">{s.k}</div>
              <div className="v">{s.v}</div>
            </div>
          ))}
        </div>
        <div className="trust-bar">
          <span className="trust-label">Trusted by</span>
          {TRUST.map((t) => (
            <span className="trust-logo" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
