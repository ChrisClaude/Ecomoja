import * as React from 'react';
import Head from 'next/head';
import { UIContext } from '@/api/context/UIContext';
import { CartMiniItem } from '@/components/cart';

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
				<div>
					{cartItems.map((item) => (
						<CartMiniItem cartItem={item} key={item.id} />
					))}
				</div>
			</section>
		</>
	);
};

export default Cart;
