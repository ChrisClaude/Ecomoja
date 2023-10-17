import { useContext, useEffect, useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import { getAllCartItems, getLocalStorageCart, getLocalStorageUserCart, saveTempCart, storeCartItemsInLocalStorage } from '@/helpers/main';
import { UIContext } from '@/hooks/context/UIContext';
import { CartItem } from '@/types/AppTypes';
import AuthContext, { AuthState } from '@/hooks/context/AuthContext';

const Initiate = () => {
	const { dispatch } = useContext(UIContext);
	const { user } = useContext<AuthState>(AuthContext);
	const cart = useRef(null);
	const saveLocalStorage = useRef(null);

	useEffect(() => {
		
		const getCartItems = async()=> {
			try{
				if(user){
					const userCart = getLocalStorageUserCart(user);
					if(userCart.length > 0){
						saveLocalStorage.current = await saveTempCart(userCart);
						if(saveLocalStorage.current.ok){
							cart.current = await getAllCartItems(user);
							if (cart.current !== null){
								dispatch({ type: 'PATCH_CART', payload: cart.current });
							}	
						}			
					}// end if
					cart.current = await getAllCartItems(user);
					if (cart.current !== null){
						dispatch({ type: 'PATCH_CART', payload: cart.current });
					}// end if
				}
			}catch(err){
				console.log(err);
			}
		}
		getCartItems();
	}, [user]);

	useEffect(() => {
		const lStorageCart = getLocalStorageCart();
		if(lStorageCart.length > 0){
			dispatch({ type: 'PATCH_CART', payload: lStorageCart });
		}
		else{
			dispatch({ type: 'PATCH_CART', payload: lStorageCart });
			storeCartItemsInLocalStorage(lStorageCart);
		}
	}, []);

	return (
		<>
			<ToastContainer />
		</>
	);
};

export default Initiate;
