import { Link } from 'react-router-dom'
import Icon from '../components/Icon'

export default function NotFoundPage() {
  return (
    <main className="contact-page">
      <div className="contact-card" style={{ textAlign: 'center' }}>
        <div className="eye">404</div>
        <h1>Page not found.</h1>
        <p className="contact-lead">
          The page you're looking for doesn't exist or has moved. Try the home page or browse our
          products.
        </p>
        <div className="row" style={{ justifyContent: 'center' }}>
          <Link className="btn btn-primary" to="/">
            Back to home
          </Link>
          <Link className="btn btn-secondary" to="/book-demo">
            Book a demo <Icon name="arrow-r" />
          </Link>
        </div>
      </div>
    </main>
  )
}
