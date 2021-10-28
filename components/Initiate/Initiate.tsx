import * as React from 'react';
import { ToastContainer } from 'react-toastify';
import { getCartFromLocalStorage } from '@/helpers/main';
import { UIContext } from '@/api/context/UIContext';

const Initiate = () => {
	const { dispatch } = React.useContext(UIContext);
	React.useEffect(() => {
		const storedCartItems = getCartFromLocalStorage();

		if (storedCartItems !== null) {
			dispatch({ type: 'PATCH_CART', payload: storedCartItems });
		}
	}, []);

	return (
		<>
			<ToastContainer />
		</>
	);
};

export default Initiate;
