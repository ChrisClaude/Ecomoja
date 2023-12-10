import { UIContext } from "@/hooks/context/UIContext";
import router from "next/router";
import React from "react";

const ToggleShopMobility = ()=>{

	const { dispatch } = React.useContext(UIContext);

	const [isChecked, setIsChecked] = React.useState<boolean>();
	const [shopMobility, setShopMobility] = React.useState<boolean>(false);

	React.useEffect(()=>{
		function ToggleShoppingMobility(){
			if(isChecked){
				router.push('/mobility');
				setShopMobility(isChecked);
			}
			if(shopMobility && !isChecked){
				router.push('/');
			}
		}
		ToggleShoppingMobility();
	}, [dispatch, isChecked]);

	React.useEffect(()=>{
		if(router.pathname === '/mobility'){
			setIsChecked(true);
		}
		else{
			setIsChecked(false);
		}
	}, []);

return(
<div className="px-2 flex items-center h-12 justify-center sm:bg-slate-50 lg:px-16">
<label htmlFor="Toggle4" className="inline-flex items-center p-1 cursor-pointer dark:bg-gray-300 dark:text-gray-800">
<input id="Toggle4" checked={isChecked} type="checkbox" onChange={(e)=>{setIsChecked(e.target.checked)}} className="peer" hidden/>
<span className="px-4 py-2 dark:bg-secondary text-white peer-unchecked:bg-red peer-checked:dark:bg-gray-300 peer-checked:text-black rounded cursor-pointer" role="button"  tabIndex={0}>Shopping</span>
<span className="px-4 py-2 dark:bg-gray-300 peer-checked:dark:bg-secondary peer-checked:text-white rounded cursor-pointer" role="button"  tabIndex={0}>Mobility</span>
</label>
</div>
)

}
export default ToggleShopMobility;