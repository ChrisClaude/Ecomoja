import { useContext, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { initializeCartItems, updateFromLocalStorage } from '@/helpers/main';
import { UIContext } from '@/hooks/context/UIContext';
import AuthContext, { AuthState } from '@/hooks/context/AuthContext';

const ToastContainer = dynamic(() => import('react-toastify').then((module) => module.ToastContainer), {
	ssr:false,
});

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
