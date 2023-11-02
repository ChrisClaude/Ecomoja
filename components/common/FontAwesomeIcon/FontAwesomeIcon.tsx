
const FontAwesomeIcon = ({toggle, className, icon})=> (
<span className={className} onClick={toggle}>{icon}</span>
)

export default FontAwesomeIcon;