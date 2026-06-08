export default function Testimonial() {
  return (
    <section className="section" style={{ background: 'var(--bg-muted)' }}>
      <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
        <svg
          style={{ width: '36px', height: '36px', color: 'var(--accent)', margin: '0 auto 20px', display: 'block' }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p
          style={{
            fontSize: '22px',
            lineHeight: 1.45,
            fontWeight: 500,
            letterSpacing: '-0.015em',
            color: 'var(--fg)',
            margin: '0 0 24px',
          }}
        >
          "We moved 14 schools, 3 colleges and our corporate office onto Applio in under 8 weeks.
          The Finance and HR modules talk to each other out of the box. That alone saved us two FTEs
          worth of reconciliation work every month."
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <div className="avatar" style={{ width: '40px', height: '40px', fontSize: '14px' }}>
            SK
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--fg)' }}>Suresh Kapoor</div>
            <div style={{ fontSize: '12.5px', color: 'var(--fg-subtle)' }}>
              CTO, Kapoor Education Group · 14 institutions
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
