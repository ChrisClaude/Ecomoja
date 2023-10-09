import { useContext, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { getAllCartItems, storeCartItemsInLocalStorage } from '@/helpers/main';
import { UIContext } from '@/hooks/context/UIContext';
import { CartItem } from '@/types/AppTypes';
import AuthContext, { AuthState } from '@/hooks/context/AuthContext';

const Initiate = () => {
	const { dispatch } = useContext(UIContext);
	const { user } = useContext<AuthState>(AuthContext);

	useEffect(() => {

		const getCartItems = async()=> {
			try{
				let cartItems: CartItem[] = [];
				if(user){
					cartItems = await getAllCartItems(user);
					if (cartItems !== null) {
						console.log(1)
						storeCartItemsInLocalStorage(cartItems);
						const lStorageCart = JSON.parse(localStorage.getItem('cartitems'));
						dispatch({ type: 'PATCH_CART', payload: lStorageCart });
					}
				}
				const lStorageCart = JSON.parse(localStorage.getItem('cartitems'));

				if(lStorageCart !== null){
					console.log(2)
					dispatch({ type: 'PATCH_CART', payload: lStorageCart });
				}
				else{
					console.log(3)
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
