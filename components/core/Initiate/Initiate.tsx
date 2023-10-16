import { useContext, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { getAllCartItems, getLocalStorageCart, getLocalStorageUserCart, saveTempCart, storeCartItemsInLocalStorage } from '@/helpers/main';
import { UIContext } from '@/hooks/context/UIContext';
import { CartItem } from '@/types/AppTypes';
import AuthContext, { AuthState } from '@/hooks/context/AuthContext';

const Initiate = () => {
	const { dispatch } = useContext(UIContext);
	const { user } = useContext<AuthState>(AuthContext);
	let cartItems: CartItem[] = [];

	useEffect(() => {
		const getCartItems = async()=> {
			try{
				if(user){
					const userCart = getLocalStorageUserCart(user);
					await saveTempCart(userCart);
					cartItems = await getAllCartItems(user);
					if (cartItems !== null) {
						console.log(cartItems);
						dispatch({ type: 'PATCH_CART', payload: cartItems });
					}
				}
				const lStorageCart = getLocalStorageCart();
				if(lStorageCart.length > 0){
					dispatch({ type: 'PATCH_CART', payload: lStorageCart });
				}
				else{
					dispatch({ type: 'PATCH_CART', payload: cartItems });
					storeCartItemsInLocalStorage(cartItems);
				}
			}catch(err){
				console.log(err);
			}

		}
		getCartItems();

	}, [user]);

	return (
		<>
			<ToastContainer />
		</>
	);
};

export default Initiate;
