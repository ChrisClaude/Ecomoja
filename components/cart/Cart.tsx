import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@/components/common';
import { CartItem as CartItemType } from '@/types/AppTypes';
import Image from 'next/image';
import { default as cn } from 'classnames';
import s from './Cart.module.scss';
import { UIContext } from '../../api/context/UIContext';

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

const CartItem = ({ cartItem }: { cartItem: CartItemType }) => {
	const { dispatch } = React.useContext(UIContext);

	const removeCartItem = () => {
		dispatch({
			type: 'REMOVE_PRODUCT_FROM_CART',
			payload: cartItem.product,
		});
	};
	return (
		<div className="flex px-5 py-2 h-20">
			<div className="w-1/4 flex items-center justify-center">
				<Image
					loader={() => cartItem.product.image}
					width={50}
					height={50}
					src={cartItem.product.image}
					alt={cartItem.product.name}
					objectFit="cover"
				/>
			</div>
			<div className="flex flex-col flex-1">
				<div className="flex flex-1 justify-between">
					<div>{cartItem.product.name}</div>
					<div>
						<button
							type="button"
							className="p-1 flex items-center justify-center transition duration-300 hover:bg-gray-200 rounded-sm"
							onClick={removeCartItem}
						>
							<span className="material-icons">delete</span>
						</button>
					</div>
				</div>
				<div className="flex">
					<span>Qty: {cartItem.productInstances}</span>
					<span className="ml-auto">R {cartItem.product.currentPrice}</span>
				</div>
			</div>
		</div>
	);
};

const calculateCartTotal = (cart: CartItemType[]): number => {
	let total = 0;

	cart.forEach((item) => {
		total += item.product.currentPrice * item.productInstances;
	});

	return total;
};

const CartMini = () => {
	const { cartItems } = React.useContext(UIContext);

	// TODO: Show no content when Cart is empty
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
						<CartItem cartItem={item} key={item.id} />
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
						<Button secondary className="bg-green-600 w-1/2">
							<span className="material-icons text-base mr-1">
								shopping_cart
							</span>
							<span>Cart</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

const Cart = () => (
	<div className={s.cartWrapper}>
		<CartNavICon />
		<CartMini />
	</div>
);

export default Cart;
