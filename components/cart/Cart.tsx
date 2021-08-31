import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UIContext } from '@/utils/context/UIContext';

const Cart = () => {
	const { cartItems } = React.useContext(UIContext);

	return (
		<a
			href="#"
			className="flex text-white items-center justify-center rounded-3xl w-12 h-8 bg-green-600 hover:bg-green-700 hover:text-white"
		>
			<FontAwesomeIcon icon="shopping-cart" className="w-6" />
			<span className="ml-1">{cartItems.length}</span>
		</a>
	);
};

export default Cart;
