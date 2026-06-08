import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view, mirroring the original page's
 * IntersectionObserver-based nav highlighting.
 *
 * @param {string[]} ids  element ids of the sections to observe
 * @returns {string|null} the id of the section currently considered active
 */
export function useScrollSpy(ids, { threshold = 0.35 } = {}) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { threshold },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids.join(','), threshold])

  return activeId
}
