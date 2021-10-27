import * as React from 'react';
import { UIContext } from '@/api/context/UIContext';
import s from '@/components/cart/CartNavBarView/Cart.module.scss';
import { default as cn } from 'classnames';
import { calculateCartTotal } from '@/helpers/main';
import { Button } from '@/components/common';
import Link from 'next/link';
import { CartMiniItem } from '@/components/cart';

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

export default CartMini;
