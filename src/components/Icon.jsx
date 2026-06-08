/**
 * Renders an icon from the inline SVG sprite (see IconSprite).
 * `name` is the symbol id without the `i-` prefix, e.g. <Icon name="arrow-r" />.
 */
export default function Icon({ name, className = 'icon', style }) {
  return (
    <svg className={className} style={style}>
      <use href={`#i-${name}`} />
    </svg>
  )
}
