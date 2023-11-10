/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

const FontAwesomeIcon = ({toggle, className, icon})=> (
<span className={className} onClick={toggle} >{icon}</span>
)

export default FontAwesomeIcon;