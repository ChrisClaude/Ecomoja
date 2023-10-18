import { useContext, useEffect, useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import { initializeCartItems, updateFromLocalStorage } from '@/helpers/main';
import { UIContext } from '@/hooks/context/UIContext';
import AuthContext, { AuthState } from '@/hooks/context/AuthContext';

const Initiate = () => {
	const { dispatch } = useContext(UIContext);
	const { user } = useContext<AuthState>(AuthContext);

	useEffect(() => {
		const getCartItems = async()=> {
			try{
				await initializeCartItems(user, dispatch);
			}catch(err){
				// eslint-disable-next-line no-console
				console.error(new Error('Loading user cart'));
			}
		}
		getCartItems();
	}, [dispatch, user]);


	useEffect(() => {
		updateFromLocalStorage(dispatch);
	}, [dispatch]);

	return (
		<>
			<ToastContainer />
		</>
	);
};

export default Initiate;
