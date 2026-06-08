import Icon from './Icon'

export default function CtaBanner() {
  return (
    <section className="section">
      <div className="cta-banner">
        <div className="cta-text">
          <h2>Ready to run your institution on one platform?</h2>
          <p>
            Start with a free 30-day pilot — no credit card required. Our onboarding team will
            migrate your existing data and go live with you.
          </p>
        </div>
        <div className="cta-actions">
          <a className="btn btn-accent btn-lg" href="#">
            <Icon name="plus" />
            Start free pilot
          </a>
          <a
            className="btn btn-ghost btn-lg"
            href="#"
            style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}
          >
            Book a demo
          </a>
        </div>
      </div>
    </section>
  )
}
