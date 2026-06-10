import { Link } from 'react-router-dom'
import { useScrollSpy } from '../hooks/useScrollSpy'

const LINKS = [
  { to: '/#products', id: 'products', label: 'Products' },
  { to: '/#features', id: 'features', label: 'Features' },
  { to: '/#pricing', id: 'pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const activeId = useScrollSpy(['products', 'features', 'pricing', 'metrics'])

  return (
    <header className="site-nav">
      <Link className="nav-logo" to="/">
        <div className="mark-bars">
          <div className="bar-1" />
          <div className="bar-2" />
          <div className="bar-3" />
        </div>
        <span className="wordmark">
          Applio <span>Stack</span>
        </span>
      </Link>
      <nav className="nav-links">
        {LINKS.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className={link.id && link.id === activeId ? 'active' : undefined}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="nav-actions">
        <span className="nav-pill">
          <span className="dot" />
          All systems operational
        </span>
        <Link className="btn btn-primary btn-sm" to="/book-demo">
          Book a demo
        </Link>
      </div>
    </header>
  )
}
