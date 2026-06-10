import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * On route change: scrolls to the element referenced by the URL hash if there
 * is one (e.g. /#products from a sub-page), otherwise resets scroll to top.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}
