import { Link, useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Icon from '../components/Icon'
import { PRODUCTS, getProduct } from '../data/products'
import NotFoundPage from './NotFoundPage'

function Tag({ tag }) {
  const className = ['badge', tag.variant].filter(Boolean).join(' ')
  return (
    <span className={className}>
      {tag.dot && <span className="dot" />}
      {tag.label}
    </span>
  )
}

export default function ProductPage() {
  const { slug } = useParams()
  const product = getProduct(slug)

  if (!product) return <NotFoundPage />

  const related = PRODUCTS.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section className="product-hero">
        <div className="hero-grid" />
        <div className="product-hero-inner">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <Icon name="chev-r" />
            <Link to="/#products">Products</Link>
            <Icon name="chev-r" />
            <span>{product.title}</span>
          </div>

          <div
            className={['product-icon', 'product-hero-icon', product.iconClass]
              .filter(Boolean)
              .join(' ')}
            style={product.iconStyle}
          >
            <Icon name={product.icon} className="" />
          </div>

          <div className="product-tags" style={{ marginBottom: '18px' }}>
            {product.tags.map((tag, i) => (
              <Tag tag={tag} key={i} />
            ))}
          </div>

          <h1>
            {product.title}
            <br />
            <em>{product.tagline}</em>
          </h1>
          <p className="hero-sub">{product.intro}</p>

          <div className="hero-actions">
            <Link className="btn btn-primary btn-lg" to="/book-demo">
              Book a demo <Icon name="arrow-r" />
            </Link>
            <Link className="btn btn-secondary btn-lg" to="/contact">
              Talk to sales
            </Link>
          </div>

          <div className="hero-stats">
            {product.stats.map((s) => (
              <div className="hero-stat" key={s.k}>
                <div className="k">{s.k}</div>
                <div className="v">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modules ── */}
      <section className="section">
        <div className="section-head">
          <div className="eye">What's inside</div>
          <h2>Every module you need. Nothing you don't.</h2>
          <p>
            {product.title} ships as a complete system — each module below is included, configured
            to your institution's rules during onboarding.
          </p>
        </div>
        <div className="features-grid">
          {product.modules.map((m) => (
            <div className="feature-cell" key={m.title}>
              <div className="icon-wrap">
                <Icon name={m.icon} className="" />
              </div>
              <h4>{m.title}</h4>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Workflow ── */}
      <section className="section">
        <div className="section-head">
          <div className="eye">Implementation</div>
          <h2>From signature to go-live.</h2>
          <p>
            A named onboarding engineer runs your implementation end-to-end. Here's how it
            typically goes.
          </p>
        </div>
        <div className="steps-grid">
          {product.workflow.map((step, i) => (
            <div className="step-card" key={step.title}>
              <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section">
        <div className="section-head">
          <div className="eye">FAQ</div>
          <h2>Questions institutions ask us.</h2>
        </div>
        <div className="faq-list">
          {product.faqs.map((f) => (
            <details className="faq-item" key={f.q}>
              <summary>
                {f.q}
                <Icon name="chev-d" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="cta-banner">
          <div className="cta-text">
            <h2>See {product.title} on your own data.</h2>
            <p>
              Book a 45-minute walkthrough with a product specialist — we'll demo the exact
              workflows your institution runs today.
            </p>
          </div>
          <div className="cta-actions">
            <Link className="btn btn-accent btn-lg" to="/book-demo">
              Book a demo <Icon name="arrow-r" />
            </Link>
            <Link
              className="btn btn-ghost btn-lg"
              to="/contact"
              style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}
            >
              Contact sales
            </Link>
          </div>
        </div>
      </section>

      {/* ── Related products ── */}
      <section className="section">
        <div className="section-head">
          <div className="eye">Works better together</div>
          <h2>Pairs with the rest of the stack.</h2>
          <p>
            Every Applio product shares the same data layer — add modules any time without
            integration projects.
          </p>
        </div>
        <div className="products-grid">
          {related.map((p) => (
            <Link className="product-card" to={`/products/${p.slug}`} key={p.slug}>
              <div
                className={['product-icon', p.iconClass].filter(Boolean).join(' ')}
                style={p.iconStyle}
              >
                <Icon name={p.icon} className="" />
              </div>
              <div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
              <div className="product-cta">
                {p.cta} <Icon name="arrow-r" className="" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
