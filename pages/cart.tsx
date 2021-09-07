import * as React from 'react';
import Head from 'next/head';
import { UIContext } from '@/api/context/UIContext';
import { CartItem } from '@/components/cart';
import {
	calculateCartTotal,
	calculateNumberOfCartItems,
} from '@/helpers/index';
import { Button } from '@/components/common';
import Link from 'next/link';

const Cart = () => {
	const { cartItems, dispatch } = React.useContext(UIContext);

	React.useEffect(
		() =>
			dispatch({
				type: 'SET_SHOP_BY_CATEGORY',
				payload: false,
			}),
		[],
	);

	return (
		<>
			<Head>
				<title>Ecomoja | Cart</title>
			</Head>
			<section className="px-16 py-8 hidden lg:block">
				<h2>Shopping Cart</h2>
				<div className="flex items-start">
					<div className="space-y-5 flex-1">
						{cartItems.map((item) => (
							<CartItem cartItem={item} key={item.id} />
						))}
					</div>
					<aside className="ml-5 w-80 h-auto bg-white px-4 py-6">
						<h3>Cart Summary</h3>
						<div className="mt-5">
							<span>Total:</span>
							<span>({calculateNumberOfCartItems(cartItems)} items)</span>
							<span>R {calculateCartTotal(cartItems)}</span>
						</div>
						<Link href="#" passHref>
							<Button secondary as="a" className="w-full mt-3">
								Proceed to checkout
							</Button>
						</Link>
					</aside>
				</div>
			</section>
		</>
	);
};

export default Cart;
