import * as React from 'react';
import { default as cn } from 'classnames';
import Link from 'next/link';
import { UIContext } from '@/hooks/context/UIContext';
import s from '@/components/cart/CartNavBarView/Cart.module.scss';
import { calculateCartTotal } from '@/helpers/main';
import { Button } from '@/components/common';
import CartMiniItem from '@/components/cart/CartItem';
import AuthContext, { AuthState } from '@/hooks/context/AuthContext';

const CartMini = () => {
	const { cartItems } = React.useContext(UIContext);
	const { user } = React.useContext<AuthState>(AuthContext);

	return (
		<div className={s.cartMini}>
			<div>
			<div
				className={cn(
					cartItems?{ hidden: cartItems.length > 0 }:"",
					'h-40 flex items-center justify-center',
				)}
			>
				<p>Your cart is empty</p>
			</div>
			<div className={cn(cartItems?{ hidden: cartItems.length === 0 }:"")}>
				<div className="overflow-y-auto h-56">
					{cartItems? cartItems.map((item) => (
						<CartMiniItem cartItem={item} key={item.id} />
					)):""}
				</div>
				<div>
					<div className="py-2 px-5 border-t-2 border-b-2 border-solid border-gray-300 flex justify-end font-bold">
						Total: R {cartItems?calculateCartTotal(cartItems):""}
					</div>
					</div>
					<div className="flex space-evenly px-2 my-3">
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
								<div className='flex'>
									<Button secondary type="submit" className="w-full mt-2 hover:text-white">
									Checkout
								</Button>
								<Link className="hover:no-underline mt-2 ml-1" href="/cart" passHref>
							<Button
								secondary
								className="w-full hover:text-white hover:no-underline"
							>
								<span className="material-icons text-base">
									shopping_cart
								</span>
								<span>Cart</span>
							</Button>
						</Link>
								</div>
								
							</form>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartMini;
