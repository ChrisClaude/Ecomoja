/* eslint-disable jsx-a11y/label-has-associated-control */

import { Divider } from "@mui/material";

const SubCategoryListItem = ({subCategory}) =>(
    <>
    <li className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option">
    <div className="flex items-center">
      <span className="font-normal ml-3 block truncate">{subCategory.name}</span>
    </div>
  </li>
  <Divider />
  </>
    )
    
    export default SubCategoryListItem;