import Icon from './Icon'

const FEATURES = [
  {
    icon: 'bolt',
    title: 'Deploy in days, not months',
    desc: 'Pre-configured workflows, data migration tools and dedicated onboarding engineers get you live in 5–10 business days — even for campuses with 20,000+ students.',
  },
  {
    icon: 'shield',
    title: 'Compliance by default',
    desc: 'ISO 27001, SOC 2 Type II, NAAC, and UGC/AICTE reporting formats baked in. Audit logs retained for 7 years. VAPT reports available on request.',
  },
  {
    icon: 'globe',
    title: 'Multi-institution, one login',
    desc: "Manage a chain of 200 schools or a multi-campus university from a single console. Role-based access keeps each institution's data siloed unless you explicitly share it.",
  },
  {
    icon: 'layers',
    title: 'Deep module integration',
    desc: 'Fee collected in School EMS posts directly to Finance. Payroll generated in HR hits the ledger automatically. No manual exports, no reconciliation errors.',
  },
  {
    icon: 'cloud',
    title: 'Cloud-native, on-prem optional',
    desc: 'Hosted on AWS with data residency in India (ap-south-1). Enterprise customers can opt for a private cloud or on-premise deployment in their own data center.',
  },
  {
    icon: 'team',
    title: 'Dedicated support team',
    desc: 'Named implementation manager during rollout, then a named CSM post-go-live. 24 × 7 toll-free support line. SLA penalties in contract — we put skin in the game.',
  },
]

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="section-head">
        <div className="eye">Why Applio</div>
        <h2>Every module. One shared foundation.</h2>
        <p>
          We built the infrastructure once so every product inherits it — security, integrations,
          data, support. You get a complete platform, not a patchwork.
        </p>
      </div>
      <div className="features-grid">
        {FEATURES.map((f) => (
          <div className="feature-cell" key={f.title}>
            <div className="icon-wrap">
              <Icon name={f.icon} className="" />
            </div>
            <h4>{f.title}</h4>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
