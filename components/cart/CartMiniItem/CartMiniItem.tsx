import * as React from 'react';
import Image from 'next/image';
import { CartItem as CartItemType } from '@/types/AppTypes';
import { UIContext } from '@/hooks/context/UIContext';
import { getAllCartItems, removeCartItem, removeItemFromCart, storeCartItemsInLocalStorage } from '@/helpers/main';
import AuthContext, { AuthState } from '@/hooks/context/AuthContext';
import { useContext } from 'react';

const CartMiniItem = ({ cartItem }: { cartItem: CartItemType }) => {
	const { dispatch, cartItems } = React.useContext(UIContext);
	const {user} = useContext<AuthState>(AuthContext);

	const handleOnRemoveCartItem = () => {
		if(user){
			dispatch({
				type: 'REMOVE_PRODUCT_FROM_CART',
				payload: cartItem.product,
			});

			removeItemFromCart(cartItem.id);
			getAllCartItems(user).then((allCartItems)=>{
				dispatch({ type: 'PATCH_CART', payload: allCartItems });
			}).catch((err)=>{
				console.log(err);
				
			});
		}

		dispatch({
			type: 'REMOVE_PRODUCT_FROM_CART',
			payload: cartItem.product,
		});
		const newCartItems = removeCartItem(cartItems, cartItem.product.id);
		dispatch({ type: 'PATCH_CART', payload: newCartItems });
		storeCartItemsInLocalStorage(newCartItems);
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
					<span>Qty: {cartItem.quantity}</span>
					<span className="ml-auto">R {cartItem.product.currentPrice}</span>
				</div>
			</div>
		</div>
	);
};

export default CartMiniItem;
