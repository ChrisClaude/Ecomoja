import * as React from 'react';
import Head from 'next/head';
import { UIContext } from '@/api/context/UIContext';
import { CartItem } from '@/components/cart';
import {
	calculateCartTotal,
	calculateNumberOfCartItems,
} from '@/helpers/index';
import { Button, Modal } from '@/components/common';
import Link from 'next/link';
import { default as cn } from 'classnames';

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
			<section className="px-16 py-8 hidden lg:block relative">
				<h1 className="mb-6">Shopping Cart</h1>
				<div
					className={cn(
						{ hidden: cartItems.length > 0 },
						'h-80 bg-white flex items-center justify-center text-lg',
					)}
				>
					<p className="animate-bounce">Your cart is empty!</p>
				</div>

				<div
					className={cn('flex items-start', { hidden: cartItems.length === 0 })}
				>
					<div className="space-y-5 flex-1">
						{cartItems.map((item) => (
							<CartItem cartItem={item} key={item.id} />
						))}
					</div>
					<aside className="ml-5 w-80 h-auto bg-white px-4 py-6">
						<h2>Cart Summary</h2>
						<div className="mt-5 flex items-end">
							<div>
								<span className="text-lg font-semibold">Total:</span>
								<span className="ml-2">
									({calculateNumberOfCartItems(cartItems)} items)
								</span>
							</div>
							<span className="text-2xl font-semibold ml-auto">
								R {calculateCartTotal(cartItems)}
							</span>
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
