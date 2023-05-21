import * as React from 'react';
import Image from 'next/image';
import { CartItem as CartItemType } from '@/types/AppTypes';
import { UIContext } from '@/hooks/context/UIContext';
import { removeCartItem, storeCartItemsInLocalStorage } from '@/helpers/main';
import AuthContext, { AuthState } from '@/hooks/context/AuthContext';

const CartMiniItem = ({ cartItem }: { cartItem: CartItemType }) => {
	const { dispatch, cartItems } = React.useContext(UIContext);
	const {isAuthenticated} = React.useContext<AuthState>(AuthContext);
		const auth = isAuthenticated();

	const handleOnRemoveCartItem = () => {
		dispatch({
			type: 'REMOVE_PRODUCT_FROM_CART',
			payload: cartItem.product,
		});

		removeCartItem(cartItems, cartItem.product.id, auth)
		.then((items)=>{
			const newCartItems = items;
			storeCartItemsInLocalStorage(newCartItems, auth);
		})
		.catch((err) => {
			console.log(err);
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
					unoptimized
				/>
			</div>
			<div className="flex flex-col flex-1">
				<div className="flex flex-1 justify-between">
					<div>{cartItem.product.name}</div>
					<div>
						<button
							type="button"
							className="p-1 flex items-center justify-center transition duration-300 hover:bg-gray-200 rounded-sm"
							onClick={handleOnRemoveCartItem}
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

export default CartMiniItem;
