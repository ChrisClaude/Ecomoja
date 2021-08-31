import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UIContext } from '@/utils/context/UIContext';
import s from './Cart.module.scss';

const Cart = () => {
	const { cartItems } = React.useContext(UIContext);

	return (
		<div className={s.cartWrapper}>
			<a
				href="#"
				className="flex text-white items-center justify-center rounded-3xl w-12 h-8 bg-green-600 hover:bg-green-700 hover:text-white hover:no-underline"
			>
				<FontAwesomeIcon icon="shopping-cart" className="w-6" />
				<span className="ml-1">{cartItems.length}</span>
			</a>

			<div className={s.cartItems}>
				<div className="bg-green-600 h-40">Cart Content</div>
			</div>
		</div>
	);
};

export default Cart;
