import { useContext, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { getAllCartItems } from '@/helpers/main';
import { UIContext } from '@/hooks/context/UIContext';
import { CartItem } from '@/types/AppTypes';
import AuthContext, { AuthState } from '@/hooks/context/AuthContext';

const Initiate = () => {
	const { dispatch } = useContext(UIContext);
	const { user } = useContext<AuthState>(AuthContext);

	useEffect(() => {

		const getCartItems = async()=> {
			try{
				if(user){
					const cartItems: CartItem[] = await getAllCartItems(user);
					if (cartItems !== null) {
						dispatch({ type: 'PATCH_CART', payload: cartItems });
					}
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
