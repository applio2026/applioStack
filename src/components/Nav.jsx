import Icon from './Icon'
import { useScrollSpy } from '../hooks/useScrollSpy'

const LINKS = [
  { href: '#products', label: 'Products' },
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#', label: 'Customers' },
  { href: '#', label: 'Docs' },
]

export default function Nav() {
  const activeId = useScrollSpy(['products', 'features', 'pricing', 'metrics'])

  return (
    <header className="site-nav">
      <a className="nav-logo" href="#">
        <div className="mark-bars">
          <div className="bar-1" />
          <div className="bar-2" />
          <div className="bar-3" />
        </div>
        <span className="wordmark">
          Applio <span>Stack</span>
        </span>
      </a>
      <nav className="nav-links">
        {LINKS.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className={link.href === `#${activeId}` ? 'active' : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <span className="nav-pill">
          <span className="dot" />
          All systems operational
        </span>
        <a className="btn btn-primary btn-sm" href="#pricing">
          Get started
        </a>
      </div>
    </header>
  )
}
