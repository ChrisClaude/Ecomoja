/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { ProductCategory } from "@/types/ProductCategory";
import React, { useEffect, useState } from "react";
import { UIContext } from "@/hooks/context/UIContext";
import SubCategoryListItem from "./SubCategoryListItem";

const MobileSubCategoryDrawer = ({categories,
}: {
	categories: ProductCategory[];}) =>{

    const {
      dispatch,
      category,
    } = React.useContext(UIContext);

  function toggleMainMenu() {
		dispatch({ type: 'TOGGLE_CATEGORY_MENU' });;
	};

  const toggleMenus = () =>{
    dispatch({ type: 'TOGGLE_SUB_CATEGORY_MENU' });
    dispatch({ type: 'TOGGLE_CATEGORY_MENU' });
  }


return(
<div>
    <div className="flex items-center">
    <span className="material-icons-outlined" onClick={toggleMenus}>arrow_back</span>
    <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900 ml-2">Back to categories</label>
    <span className="material-icons-outlined ml-auto mx-2 my-2" onClick={toggleMainMenu}>close</span>
    </div>

  <div className="relative mt-2">
    <ul className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" tabIndex={-1} role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
      {category?.subcategories.map((ecoCategory) => 
      <SubCategoryListItem key={ecoCategory.id} subCategory={ecoCategory}/>)}
    </ul>
  </div>
</div>)
}

export default MobileSubCategoryDrawer;
