
const FontAwesomeIcon = ({toggle, className, icon})=> (
<span className={className} onClick={toggle} onKeyDown={toggle} role="button" tabIndex={0}>{icon}</span>
)

export default FontAwesomeIcon;