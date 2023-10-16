import React, { useContext } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { CartItem as CartItemType } from '@/types/AppTypes';
import { UIContext } from '@/hooks/context/UIContext';
import { removeCartItem, storeCartItemsInLocalStorage, isProductInArray, removeItemFromCart, getAllCartItems } from '@/helpers/main';
import AuthContext, { AuthState } from '@/hooks/context/AuthContext';

const CartItem = ({ cartItem }: { cartItem: CartItemType }) => {
	const { dispatch, cartItems, wishList } = React.useContext(UIContext);
	const {user } = useContext<AuthState>(AuthContext);

	const handleAddProductToWishList = () => {
		const check = isProductInArray(cartItem.product, wishList);

		if (check){
			toast.warn("The product is already added to your wish list", {
				position: 'top-right',
				autoClose: 1500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			return;
		}

		dispatch({ type: 'ADD_PRODUCT_TO_WISHLIST', payload: cartItem.product });

		toast.info("You've added a new item to your wishlist", {
			position: 'top-right',
			autoClose: 1500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};

	const handleOnRemoveCartItem = () => {

		if(user){
			dispatch({
				type: 'REMOVE_PRODUCT_FROM_CART',
				payload: cartItem.product,
			});

			const newCartItems = removeCartItem(cartItems, cartItem.product.id);
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

	const handleOnQtyChange = (event: React.FormEvent<HTMLInputElement>) => {
		if (+event.currentTarget.value === cartItem.productInstances + 1) {
			dispatch({
				type: 'INCREASE_PRODUCT_QUANTITY',
				payload: cartItem.product,
			});
		}

		if (
			+event.currentTarget.value > 0 &&
			+event.currentTarget.value === cartItem.productInstances - 1
		) {
			dispatch({
				type: 'DECREASE_PRODUCT_QUANTITY',
				payload: cartItem.product,
			});
		}
	};

	return (
		<div className="w-full flex flex-col bg-white p-3 lg:flex-row">
			<div className="items-center justify-center w-full lg:w-1/3">
				<Image
					loader={() => cartItem.product.image}
					src={cartItem.product.image}
					width={200}
					height={200}
					alt={cartItem.product.name}
					objectFit="cover"
					className="w-full"
					unoptimized
				/>
			</div>
			<div className="flex flex-col justify-between ml-2 mt-2 lg:mt-0 lg:flex-1">
				<div className="flex flex-col md:flex-row">
					<div className="flex flex-col">
						<p className="text-lg font-semibold">{cartItem.product.name}</p>
						<p>{cartItem.product.description}</p>
					</div>
					<div className="my-4 flex flex-col md:ml-auto md:my-0">
						<span className="text-lg font-bold">
							R {cartItem.product.currentPrice}
						</span>
						<div className="flex flex-row mt-1">
							<span className="">Qty:</span>
								<input
									type="number"
									id="qty"
									className="border-black border-2 rounded w-12 ml-2 px-2 py-1"
									value={cartItem.productInstances}
									onChange={handleOnQtyChange}
								/>
						</div>
					</div>
				</div>
				<div className='mt-4'>
						{cartItem.product.isFreeForDelivery
							? 'Free Delivery'
							: 'Delivery fees will be charged'}
					</div>
				<div className="flex flex-row mt-4 md:flex-row">
					
					<div className="flex md:ml-auto">
						<button
							type="button"
							className="px-2 rounded flex items-center justify-center transition duration-300 mr-2 shadow-sm bg-gradient-to-r from-gray-50 to-gray-200 hover:from-gray-300 hover:to-gray-200"
							onClick={handleOnRemoveCartItem}
						>
							<span className="material-icons mr-1 text-lg">delete</span>{' '}
							<span>Remove</span>
						</button>
						<button
							type="button"
							className="px-2 rounded flex items-center justify-center transition duration-300 shadow-sm bg-gradient-to-r from-gray-50 to-gray-200 hover:from-gray-300 hover:to-gray-200"
							onClick={handleAddProductToWishList}
						>
							<span className="material-icons mr-1 text-lg">favorite</span>
							<span>Add to list</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
