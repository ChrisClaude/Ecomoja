/* eslint-disable jsx-a11y/label-has-associated-control */

const NavBarCategory = ({category}) =>(
    <>
    <li className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option">
    <div className="flex items-center">
      <span className="font-normal ml-3 block truncate">{category}</span>
    </div>
    <span className="text-black absolute inset-y-0 right-0 flex items-center pr-4">
    <span className="material-icons-outlined">
    <span className="material-icons-outlined">chevron_right</span>
    </span>
    </span>
  </li></>
    )
    
    export default NavBarCategory;