import Icon from './Icon'

const SIDEBAR_TOP = [
  { icon: 'home', label: 'Overview', active: true },
  { icon: 'graduation', label: 'Universities', count: 3 },
  { icon: 'layers', label: 'Colleges', count: 8 },
  { icon: 'folder', label: 'Schools', count: 24 },
  { icon: 'exam', label: 'Examinations', count: 6 },
  { icon: 'flow', label: 'Process Mgmt', count: 11 },
]

const METRICS = [
  { label: 'Total students', val: '84,210', delta: '+2.8% vs. last month', dir: 'up' },
  { label: 'Fee collected · MTD', val: '₹4.2 Cr', delta: 'On pace · ₹5.1 Cr forecast', dir: 'up' },
  { label: 'Attendance avg.', val: '91.4%', delta: '−0.6% vs. last week', dir: 'dn' },
  { label: 'Open tickets', val: '12', delta: '−5 resolved today', dir: 'up' },
]

const ACTIVITY = [
  { avatar: 'R', cls: '', text: (<><strong>Rajesh</strong> processed payroll for <strong>School Block A</strong></>), meta: '10 min ago · 342 employees · ₹38.4 L' },
  { avatar: 'P', cls: 's2', text: (<><strong>Priya</strong> admitted 24 students to <strong>B.Tech CSE</strong></>), meta: '42 min ago · University Campus 1' },
  { avatar: 'S', cls: 's3', text: (<><strong>System</strong> flagged low attendance in <strong>Grade 9-B</strong></>), meta: '1 h ago · DPS Noida · below 75% threshold' },
  { avatar: 'A', cls: 's4', text: (<><strong>Admin</strong> generated GST report for <strong>Q1 FY26</strong></>), meta: '3 h ago · Finance module · exported PDF' },
]

const numCell = { textAlign: 'right', fontFeatureSettings: "'tnum'" }
const dotStyle = (bg) => ({ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: bg })

const ROWS = [
  { dot: 'var(--success-solid)', name: 'DPS Noida', sub: 'Sector 132, Noida', type: 'K–12 School', module: <span className="badge badge-info">School EMS</span>, students: '4,820', fee: '₹1.2 Cr', att: '93.2%' },
  { dot: 'var(--success-solid)', name: 'Amity University', sub: 'Noida Campus', type: 'University', module: <span className="badge badge-accent">University EMS</span>, students: '22,104', fee: '₹2.1 Cr', att: '89.8%' },
  { dot: 'var(--warn-solid)', name: 'Christ University', sub: 'Bengaluru', type: 'Online Exams', module: <span className="badge" style={{ background: '#F5F3FF', color: '#6D28D9', borderColor: 'transparent' }}>Exam Mgmt</span>, students: '—', studentsMuted: true, fee: '₹48.6 L', att: '—', attMuted: true },
  { dot: 'var(--success-solid)', name: 'Sunrise College', sub: 'Bengaluru', type: 'Degree College', module: <span className="badge" style={{ background: 'var(--indigo-50)', color: 'var(--indigo-700)', borderColor: 'transparent' }}>Colleges EMS</span>, students: '3,206', fee: '₹84.0 L', att: '91.1%' },
]

export default function DashboardPreview() {
  return (
    <section className="section" style={{ paddingBottom: 0 }}>
      <div className="section-head section-center">
        <div className="eye">Platform</div>
        <h2>One dashboard. Every system.</h2>
        <p>
          Real-time metrics across all your institutions and modules — without switching tabs or
          logging in again.
        </p>
      </div>

      <div className="dash-preview-wrap" style={{ marginTop: '8px' }}>
        <div className="dash-chrome">
          <div className="dot-red" />
          <div className="dot-amber" />
          <div className="dot-green" />
          <div className="url-bar">app.applio.io/dashboard</div>
        </div>
        <div className="dash-body">
          <div className="dash-sidebar">
            <div className="brand-row">
              <div className="ws-icon">A</div>
              <span className="ws-name">Applio Stack</span>
            </div>
            {SIDEBAR_TOP.map((item) => (
              <div className={`nav-link${item.active ? ' active' : ''}`} key={item.label}>
                <Icon name={item.icon} className="" style={{ width: '14px', height: '14px' }} />
                {item.label}
                {item.count != null && <span className="nav-count">{item.count}</span>}
              </div>
            ))}
            <div className="nav-section">Finance</div>
            <div className="nav-link">
              <Icon name="chart" className="" style={{ width: '14px', height: '14px' }} />
              Accounts
            </div>
            <div className="nav-link">
              <Icon name="team" className="" style={{ width: '14px', height: '14px' }} />
              HR &amp; Payroll
            </div>
            <div className="nav-section">Admin</div>
            <div className="nav-link">
              <Icon name="shield" className="" style={{ width: '14px', height: '14px' }} />
              Compliance
            </div>
            <div className="nav-link">
              <Icon name="settings" className="" style={{ width: '14px', height: '14px' }} />
              Settings
            </div>
          </div>

          <div className="dash-main-area">
            <div className="dash-header">
              <div>
                <div className="dash-breadcrumb">
                  DPS Group{' '}
                  <Icon name="chev-r" className="" style={{ width: '10px', height: '10px', verticalAlign: 'middle' }} />{' '}
                  Overview
                </div>
                <h2>Group overview</h2>
              </div>
              <div className="row" style={{ gap: '8px' }}>
                <div className="input-group" style={{ height: '34px', maxWidth: '220px' }}>
                  <span
                    className="affix"
                    style={{ background: 'transparent', borderRight: 'none', paddingRight: 0, paddingLeft: '10px' }}
                  >
                    <Icon name="search" className="" style={{ width: '13px', height: '13px', color: 'var(--fg-subtle)' }} />
                  </span>
                  <input className="input" style={{ height: '32px', fontSize: '12px' }} placeholder="Search · ⌘K" />
                </div>
                <button className="btn btn-secondary btn-sm btn-icon" aria-label="Notifications">
                  <Icon name="bell" />
                </button>
                <button className="btn btn-primary btn-sm">
                  <Icon name="plus" />
                  New report
                </button>
              </div>
            </div>

            <div className="dash-metrics-row">
              {METRICS.map((m) => (
                <div className="dash-metric" key={m.label}>
                  <div className="m-label">{m.label}</div>
                  <div className="m-val">{m.val}</div>
                  <div className={`m-delta ${m.dir}`}>{m.delta}</div>
                </div>
              ))}
            </div>

            <div className="dash-chart-row">
              <div className="dash-chart-card">
                <div className="dash-card-head">
                  <div>
                    <h4>Fee collection trend</h4>
                    <div className="sub">Last 30 days · all institutions</div>
                  </div>
                  <select
                    className="select"
                    style={{ width: 'auto', height: '28px', fontSize: '11px', padding: '0 26px 0 9px', backgroundPosition: 'right 6px center' }}
                    defaultValue="30 days"
                  >
                    <option>30 days</option>
                    <option>90 days</option>
                    <option>This year</option>
                  </select>
                </div>
                <svg viewBox="0 0 540 160" preserveAspectRatio="none" style={{ width: '100%', height: '160px' }}>
                  <defs>
                    <linearGradient id="g-fee" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" stopColor="#6366F1" stopOpacity="0.22" />
                      <stop offset="1" stopColor="#6366F1" stopOpacity="0" />
                    </linearGradient>
                    <pattern id="dash-grid" width="54" height="32" patternUnits="userSpaceOnUse">
                      <path d="M 54 0 L 0 0 0 32" fill="none" stroke="#E2E8F0" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="540" height="160" fill="url(#dash-grid)" />
                  <path
                    d="M 0 110 L 36 104 L 72 108 L 108 90 L 144 96 L 180 76 L 216 82 L 252 62 L 288 68 L 324 52 L 360 58 L 396 44 L 432 48 L 468 34 L 504 40 L 540 28 L 540 160 L 0 160 Z"
                    fill="url(#g-fee)"
                  />
                  <path
                    d="M 0 110 L 36 104 L 72 108 L 108 90 L 144 96 L 180 76 L 216 82 L 252 62 L 288 68 L 324 52 L 360 58 L 396 44 L 432 48 L 468 34 L 504 40 L 540 28"
                    fill="none"
                    stroke="#4F46E5"
                    strokeWidth="2"
                  />
                  <circle cx="468" cy="34" r="4" fill="#4F46E5" stroke="#fff" strokeWidth="2" />
                </svg>
              </div>

              <div className="dash-activity-card">
                <div className="dash-card-head">
                  <h4>Recent activity</h4>
                  <a href="#" style={{ fontSize: '12px', color: 'var(--accent)', textDecoration: 'none' }}>
                    View all →
                  </a>
                </div>
                {ACTIVITY.map((a, i) => (
                  <div className="activity-item" key={i}>
                    <div className={`avatar ${a.cls}`.trim()} style={{ width: '26px', height: '26px', fontSize: '10px', flexShrink: 0 }}>
                      {a.avatar}
                    </div>
                    <div>
                      <div className="a-text">{a.text}</div>
                      <div className="a-meta">{a.meta}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="dash-chart-card">
              <div className="dash-card-head">
                <div>
                  <h4>Institutions</h4>
                  <div className="sub">37 active · 2 pending setup</div>
                </div>
                <div className="row" style={{ gap: '6px' }}>
                  <button className="btn btn-secondary btn-sm">Filter</button>
                  <button className="btn btn-secondary btn-sm">Export</button>
                </div>
              </div>
              <div className="table-wrap">
                <table className="tbl tbl-dense">
                  <thead>
                    <tr>
                      <th style={{ width: '24px' }} />
                      <th>Institution</th>
                      <th>Type</th>
                      <th>Module</th>
                      <th style={{ textAlign: 'right' }}>Students</th>
                      <th style={{ textAlign: 'right' }}>Fee collected</th>
                      <th style={{ textAlign: 'right' }}>Attendance</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {ROWS.map((r) => (
                      <tr key={r.name}>
                        <td>
                          <span style={dotStyle(r.dot)} />
                        </td>
                        <td>
                          <strong>{r.name}</strong>
                          <div className="t-caption">{r.sub}</div>
                        </td>
                        <td>{r.type}</td>
                        <td>{r.module}</td>
                        <td style={r.studentsMuted ? { ...numCell, color: 'var(--fg-subtle)' } : numCell}>{r.students}</td>
                        <td style={numCell}>{r.fee}</td>
                        <td style={r.attMuted ? { ...numCell, color: 'var(--fg-subtle)' } : numCell}>{r.att}</td>
                        <td style={{ textAlign: 'right' }}>
                          <button className="btn btn-ghost btn-icon btn-sm" aria-label="More">
                            <Icon name="more" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
