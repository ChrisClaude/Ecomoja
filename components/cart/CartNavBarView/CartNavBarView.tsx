import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@/components/common';
import { default as cn } from 'classnames';
import Link from 'next/link';
import CartMiniItem from '@/components/cart/CartMiniItem/CartMiniItem';
import { calculateCartTotal } from '@/helpers/index';
import { UIContext } from '@/api/context/UIContext';
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

const CartMini = () => {
	const { cartItems } = React.useContext(UIContext);

	return (
		<div className={s.cartMini}>
			<div
				className={cn(
					{ hidden: cartItems.length > 0 },
					'h-40 flex items-center justify-center',
				)}
			>
				<p>Your cart is empty</p>
			</div>
			<div className={cn({ hidden: cartItems.length === 0 })}>
				<div>
					{cartItems.map((item) => (
						<CartMiniItem cartItem={item} key={item.id} />
					))}
				</div>
				<div>
					<div className="py-2 px-5 border-t-2 border-b-2 border-solid border-gray-300 flex justify-end font-bold">
						Total: R {calculateCartTotal(cartItems)}
					</div>
					<div className="flex justify-between px-6 my-3">
						<Button secondary className="bg-green-600 w-1/2 mr-2">
							<span className="material-icons text-base mr-1">lock</span>
							<span>Checkout</span>
						</Button>
						<Link href="/cart" passHref>
							<Button
								secondary
								className="bg-green-600 w-1/2 hover:text-white hover:no-underline"
								as="a"
							>
								<span className="material-icons text-base mr-1">
									shopping_cart
								</span>
								<span>Cart</span>
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

const CartNavBarView = () => (
	<div className={s.cartWrapper}>
		<CartNavICon />
		<CartMini />
	</div>
);

export default CartNavBarView;
