import * as React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UIContext } from '@/hooks/context/UIContext';
import CartMini from '../CartMini/CartMini';
import s from './Cart.module.scss';

const CartNavICon = () => {
	const { cartItems } = React.useContext(UIContext);

	return (
		<a
			href="#"
			className="flex text-black items-center justify-center rounded-3xl w-12 h-8 bg-secondary hover:bg-green-800 hover:text-white hover:no-underline"
		>
			<span className="material-icons text-base">shopping_cart</span>
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
