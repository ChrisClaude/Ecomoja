import * as React from 'react';
import Head from 'next/head';
import { default as cn } from 'classnames';
import { UIContext } from '@/hooks/context/UIContext';
import AuthContext, { AuthState } from '@/hooks/context/AuthContext';
import { CartItem } from '@/components/cart';
import { calculateCartTotal, calculateNumberOfCartItems } from '@/helpers/main';
import { Button } from '@/components/common';

const Cart = () => {
	const { cartItems, dispatch } = React.useContext(UIContext);
	const { user } = React.useContext<AuthState>(AuthContext);

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
			<section className="px-6 py-8 lg:block lg:px-16 relative">
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
					className={cn('flex flex-col items-start lg:flex-row', {
						hidden: cartItems.length === 0,
					})}
				>
					<div className="space-y-5 w-full lg:flex-1">
						{cartItems.map((item) => (
							<CartItem cartItem={item} key={item.id} />
						))}
					</div>

					<aside className="fixed bottom-0 left-0 w-full h-auto bg-white mt-4 px-4 py-6 lg:relative lg:ml-5 lg:mt-0 lg:w-80">
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
						{user && (
							<form
								action="https://www.payfast.co.za/eng/process"
								method="post"
							>
								<input
									type="hidden"
									name="merchant_id"
									value={process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_ID}
								/>
								<input
									type="hidden"
									name="merchant_key"
									value={process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_KEY}
								/>

								{/* TODO: Add the following */}
								{/* <input type="hidden" name="return_url" value="https://www.example.com/success" /> */}
								{/* <input type="hidden" name="cancel_url" value="https://www.example.com/cancel" /> */}
								{/* <input type="hidden" name="notify_url" value="https://www.example.com/notify" /> */}
								<input
									type="hidden"
									name="amount"
									value={calculateCartTotal(cartItems)}
								/>

								<input type="hidden" name="name_first" value={user.username} />
								<input type="hidden" name="email_address" value={user.email} />

								{/* TODO: Test product should be replaced with an order number */}
								<input type="hidden" name="item_name" value="Test Product" />
								<Button secondary type="submit" className="w-full mt-3">
									Pay Now
								</Button>
							</form>
						)}
					</aside>
				</div>
			</section>
		</>
	);
};

export default Cart;
