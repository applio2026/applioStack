import { Link } from 'react-router-dom'
import Icon from './Icon'

const PLANS = [
  {
    name: 'Starter',
    price: '₹ 0',
    unit: ' / module / month',
    desc: 'For pilots and proof-of-concept. Up to 200 students.',
    features: [
      '1 institution · 1 module',
      'Up to 200 active students',
      'Core workflows only',
      'Email support · 48 h SLA',
      'Applio-managed cloud · India region',
    ],
    cta: { label: 'Start free pilot', className: 'btn btn-secondary', to: '/book-demo' },
  },
  {
    name: 'Professional',
    featured: true,
    badge: 'Most popular',
    price: '₹ 2.4 L',
    unit: ' / module / yr',
    desc: 'For production institutions shipping every semester.',
    features: [
      'Unlimited students per institution',
      'All workflows · advanced reports',
      'API access · webhooks · SSO',
      '24 × 7 support · 4 h critical SLA',
      'Named onboarding engineer',
      'Statutory reports (NAAC, UGC, GST)',
    ],
    cta: { label: 'Start 30-day trial', className: 'btn btn-accent', to: '/book-demo' },
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'Dedicated infra, custom integrations & private deployment.',
    features: [
      'Multi-institution bulk pricing',
      'Private cloud or on-premise option',
      'Custom ERP / SIS integrations',
      'Named CSM · 99.99% SLA',
      'VAPT + compliance attestation',
      'SLA penalties contractually bound',
    ],
    cta: { label: 'Contact sales', className: 'btn btn-secondary', to: '/contact' },
  },
]

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="section-head section-center">
        <div className="eye">Pricing</div>
        <h2>Transparent pricing. No hidden costs.</h2>
        <p>
          Annual contracts. Pricing is per institution per module — so you only pay for what you
          use. Volume discounts apply from 5 institutions.
        </p>
      </div>

      <div className="pricing-grid" style={{ maxWidth: '960px', margin: '0 auto' }}>
        {PLANS.map((plan) => (
          <div className={`plan-card${plan.featured ? ' plan-featured' : ''}`} key={plan.name}>
            {plan.badge ? (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3>{plan.name}</h3>
                <span className="badge badge-solid-accent">{plan.badge}</span>
              </div>
            ) : (
              <h3>{plan.name}</h3>
            )}
            <div>
              <div className="plan-price">
                {plan.price}
                {plan.unit && <small>{plan.unit}</small>}
              </div>
              <div className="plan-desc" style={{ marginTop: '6px' }}>
                {plan.desc}
              </div>
            </div>
            <ul className="plan-features">
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div className="plan-cta">
              {plan.cta.to ? (
                <Link className={plan.cta.className} style={{ width: '100%' }} to={plan.cta.to}>
                  {plan.cta.label}
                </Link>
              ) : (
                <button className={plan.cta.className} style={{ width: '100%' }}>
                  {plan.cta.label}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="alert alert-info" style={{ maxWidth: '960px', margin: '20px auto 0' }}>
        <Icon name="info" className="alert-icon" />
        <div className="alert-body">
          <div className="alert-title">Volume discounts available from 5 institutions.</div>
          <div className="alert-text">
            Groups of 5–20 institutions get 20% off list price. 20+ institutions qualify for custom
            enterprise pricing.{' '}
            <Link to="/contact" style={{ color: 'var(--accent)' }}>
              Talk to our sales team →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
