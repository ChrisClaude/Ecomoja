/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
import router from "next/router";

const ToggleShopMobility = ()=>{
     
	const navigateToMobilityHome = () => {
		router.push('/mobility');
	};

    const navigateToShoppingHome = () => {
		router.push('/');
	};

return(
<div className="px-2 flex items-center h-12 justify-center sm:bg-slate-50 lg:px-16">
<label htmlFor="Toggle4" className="inline-flex items-center p-1 cursor-pointer dark:bg-gray-300 dark:text-gray-800">
<input id="Toggle4" type="checkbox" className="hidden peer" />
<span className="px-4 py-2 dark:bg-secondary text-white peer-checked:dark:bg-gray-300 peer-checked:text-black rounded cursor-pointer" onClick={navigateToShoppingHome}>Shopping</span>
<span className="px-4 py-2 dark:bg-gray-300 peer-checked:dark:bg-secondary peer-checked:text-white rounded cursor-pointer" onClick={navigateToMobilityHome}>Mobility</span>
</label>
</div>
)

}
export default ToggleShopMobility;