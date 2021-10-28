import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UIContext } from '@/api/context/UIContext';
import { CartMini } from '@/components/cart';
import s from './Cart.module.scss';

const CartNavICon = () => {
	const { cartItems } = React.useContext(UIContext);

	return (
		<a
			href="#"
			className="flex text-white items-center justify-center rounded-3xl w-12 h-8 bg-green-600 hover:bg-green-700 hover:text-white hover:no-underline"
		>
			<FontAwesomeIcon icon="shopping-cart" className="w-6" />
			<span className="ml-1">{cartItems.length}</span>
		</a>
	);
};

const CartNavBarView = () => (
	<div className={s.cartWrapper}>
		<CartNavICon />
		<CartMini />
	</div>
);

export default CartNavBarView;
