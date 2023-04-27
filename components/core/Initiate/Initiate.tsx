import * as React from 'react';
import { ToastContainer } from 'react-toastify';
import { getAllCartItems } from '@/helpers/main';
import { UIContext } from '@/hooks/context/UIContext';
import { CartItem } from '@/types/AppTypes';

const Initiate = () => {
	const { dispatch } = React.useContext(UIContext);

	React.useEffect(() => {

		const getCartItems = async()=> {
			try{
				const cartItems: CartItem[] = await getAllCartItems();
			    if (cartItems !== null) {
					dispatch({ type: 'PATCH_CART', payload: cartItems });
				}
			}catch(err){
				console.log(err);
			}

		}
		getCartItems();

	}, []);

	return (
		<>
			<ToastContainer />
		</>
	);
};

export default Initiate;
