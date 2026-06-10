import { Link } from 'react-router-dom'
import Icon from './Icon'
import { PRODUCTS } from '../data/products'

function Tag({ tag }) {
  const className = ['badge', tag.variant].filter(Boolean).join(' ')
  return (
    <span className={className}>
      {tag.dot && <span className="dot" />}
      {tag.label}
    </span>
  )
}

export default function Products() {
  return (
    <section className="section" id="products">
      <div className="section-head">
        <div className="eye">Products</div>
        <h2>Eight products. One unified platform.</h2>
        <p>
          Each module is a complete, stand-alone system — and every one plugs into the shared
          Applio data layer so information flows where it needs to, without manual exports.
        </p>
      </div>

      <div className="products-grid">
        {PRODUCTS.map((p) => (
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
            <div className="product-tags">
              {p.tags.map((tag, i) => (
                <Tag tag={tag} key={i} />
              ))}
            </div>
            <div className="product-cta">
              {p.cta} <Icon name="arrow-r" className="" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
