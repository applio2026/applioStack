const METRICS = [
  { num: '1,400', em: '+', desc: 'Institutions across India and 27 other countries' },
  { num: '12', em: 'M+', desc: 'Student records managed every academic year' },
  { num: '99.98', em: '%', desc: 'Uptime SLA backed by contractual guarantee' },
  { num: '<2', em: 'h', desc: 'Mean time to resolve critical support tickets' },
]

export default function MetricsStrip() {
  return (
    <section className="section" id="metrics">
      <div className="metrics-strip">
        {METRICS.map((m) => (
          <div className="metric-item" key={m.desc}>
            <div className="m-num">
              {m.num}
              <em>{m.em}</em>
            </div>
            <div className="m-desc">{m.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
