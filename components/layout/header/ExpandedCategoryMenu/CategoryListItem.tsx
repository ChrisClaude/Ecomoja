/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { UIContext } from "@/hooks/context/UIContext";
import React from "react";

function CategoryListItem({category, categoryId}){

  const {
    dispatch,
  } = React.useContext(UIContext);

function toggleSubCategorMenu(ecoCategory) {
  dispatch({ type: 'TOGGLE_CATEGORY_MENU' });
  dispatch({ type: 'TOGGLE_SUB_CATEGORY_MENU' });
  dispatch({type: 'SET_CATEGORY', category: ecoCategory});
};

  return(
    <>
    <li className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" onClick={()=> toggleSubCategorMenu(category)} role="option">
    <div className="flex items-center">
      <span className="font-normal ml-3 block truncate">{category.name}</span>
    </div>
    <span className="text-black absolute inset-y-0 right-0 flex items-center pr-4">
    <span className="material-icons-outlined">
    <span className="material-icons-outlined">chevron_right</span>
    </span>
    </span>
  </li></>
  )
}
    
    export default CategoryListItem;