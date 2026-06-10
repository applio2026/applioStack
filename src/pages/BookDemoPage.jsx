import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Icon from '../components/Icon'
import { PRODUCTS } from '../data/products'

const INSTITUTION_TYPES = [
  'University',
  'Degree / Autonomous College',
  'School (K–12)',
  'School Chain / Group',
  'Examination Board / Authority',
  'Coaching / EdTech',
  'Other',
]

const SIZES = ['Under 500', '500 – 2,000', '2,000 – 10,000', '10,000 – 50,000', '50,000+']

const EXPECT = [
  {
    icon: 'clock',
    title: '45-minute walkthrough',
    desc: 'A product specialist demos the exact workflows your institution runs — no generic slide decks.',
  },
  {
    icon: 'team',
    title: 'Bring your whole team',
    desc: 'Registrar, exam cell, accounts, IT — we tailor the session to whoever joins.',
  },
  {
    icon: 'shield',
    title: 'No commitment',
    desc: 'Pricing and pilot options shared only if you ask. No follow-up spam, ever.',
  },
]

const INITIAL = {
  name: '',
  email: '',
  phone: '',
  institution: '',
  type: INSTITUTION_TYPES[0],
  size: SIZES[0],
  products: [],
  date: '',
  notes: '',
}

export default function BookDemoPage() {
  const [form, setForm] = useState(INITIAL)
  const [submitted, setSubmitted] = useState(false)

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const toggleProduct = (slug) =>
    setForm((f) => ({
      ...f,
      products: f.products.includes(slug)
        ? f.products.filter((s) => s !== slug)
        : [...f.products, slug],
    }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <Nav />
      <main className="demo-page">
        <div className="hero-grid" />
        <div className="demo-inner">
          <div className="demo-info">
            <div className="eye">Book a demo</div>
            <h1>
              See Applio Stack
              <br />
              <em>on your own workflows.</em>
            </h1>
            <p className="hero-sub">
              Tell us a little about your institution and pick a date — we'll confirm a slot within
              one business day.
            </p>

            <div className="expect-list">
              {EXPECT.map((item) => (
                <div className="expect-item" key={item.title}>
                  <span className="cm-icon">
                    <Icon name={item.icon} className="" />
                  </span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="contact-meta">
              Prefer email or phone?{' '}
              <Link to="/contact" style={{ color: 'var(--accent)' }}>
                Contact us directly →
              </Link>
            </p>
          </div>

          {submitted ? (
            <div className="demo-card demo-success">
              <div className="success-icon">
                <Icon name="check" className="" />
              </div>
              <h2>Demo request received.</h2>
              <p>
                Thanks, {form.name.split(' ')[0] || 'there'}! Our team will email{' '}
                <strong>{form.email}</strong> within one business day to confirm your slot
                {form.date ? ` around ${form.date}` : ''}.
              </p>
              <div className="alert alert-info">
                <Icon name="info" className="alert-icon" />
                <div className="alert-body">
                  <div className="alert-title">What happens next</div>
                  <div className="alert-text">
                    You'll get a calendar invite with a video link, plus a short agenda tailored to
                    the products you selected.
                  </div>
                </div>
              </div>
              <div className="row" style={{ marginTop: '20px' }}>
                <Link className="btn btn-primary" to="/">
                  Back to home
                </Link>
                <button className="btn btn-ghost" onClick={() => { setForm(INITIAL); setSubmitted(false) }}>
                  Book another demo
                </button>
              </div>
            </div>
          ) : (
            <form className="demo-card" onSubmit={handleSubmit}>
              <div className="demo-form-row">
                <div className="field">
                  <label className="label" htmlFor="bd-name">Full name</label>
                  <input
                    id="bd-name"
                    className="input"
                    placeholder="Dr. A. Sharma"
                    required
                    value={form.name}
                    onChange={set('name')}
                  />
                </div>
                <div className="field">
                  <label className="label" htmlFor="bd-email">Work email</label>
                  <input
                    id="bd-email"
                    className="input"
                    type="email"
                    placeholder="registrar@university.edu"
                    required
                    value={form.email}
                    onChange={set('email')}
                  />
                </div>
              </div>

              <div className="demo-form-row">
                <div className="field">
                  <label className="label" htmlFor="bd-phone">Phone</label>
                  <input
                    id="bd-phone"
                    className="input"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={set('phone')}
                  />
                </div>
                <div className="field">
                  <label className="label" htmlFor="bd-inst">Institution name</label>
                  <input
                    id="bd-inst"
                    className="input"
                    placeholder="ABC University"
                    required
                    value={form.institution}
                    onChange={set('institution')}
                  />
                </div>
              </div>

              <div className="demo-form-row">
                <div className="field">
                  <label className="label" htmlFor="bd-type">Institution type</label>
                  <select id="bd-type" className="select" value={form.type} onChange={set('type')}>
                    {INSTITUTION_TYPES.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label className="label" htmlFor="bd-size">Approx. students</label>
                  <select id="bd-size" className="select" value={form.size} onChange={set('size')}>
                    {SIZES.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="field">
                <span className="label">Products you're interested in</span>
                <div className="demo-products">
                  {PRODUCTS.map((p) => (
                    <label className="check" key={p.slug}>
                      <input
                        type="checkbox"
                        checked={form.products.includes(p.slug)}
                        onChange={() => toggleProduct(p.slug)}
                      />
                      <span className="box" />
                      {p.title}
                    </label>
                  ))}
                </div>
                <span className="help">Pick as many as you like — we'll shape the demo around them.</span>
              </div>

              <div className="field">
                <label className="label" htmlFor="bd-date">Preferred date</label>
                <input
                  id="bd-date"
                  className="input"
                  type="date"
                  value={form.date}
                  onChange={set('date')}
                />
              </div>

              <div className="field">
                <label className="label" htmlFor="bd-notes">Anything specific to cover?</label>
                <textarea
                  id="bd-notes"
                  className="textarea"
                  placeholder="e.g. We're migrating from a legacy ERP and need NAAC reports live before March…"
                  value={form.notes}
                  onChange={set('notes')}
                />
              </div>

              <button className="btn btn-accent btn-lg" type="submit" style={{ width: '100%' }}>
                Request demo <Icon name="arrow-r" />
              </button>
              <p className="help" style={{ textAlign: 'center' }}>
                By submitting you agree to be contacted about your request. No spam, no resale of
                your details.
              </p>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
