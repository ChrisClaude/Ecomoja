import React from 'react';
import Image from 'next/image';
import { CartItem as CartItemType } from '@/types/AppTypes';
import { UIContext } from '@/api/context/UIContext';

const CartItem = ({ cartItem }: { cartItem: CartItemType }) => {
	const { dispatch } = React.useContext(UIContext);

	const handleOnRemoveCartItem = () => {
		dispatch({
			type: 'REMOVE_PRODUCT_FROM_CART',
			payload: cartItem.product,
		});
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
			<div>
				<Image
					loader={() => cartItem.product.image}
					src={cartItem.product.image}
					width={200}
					height={200}
					alt={cartItem.product.name}
					objectFit="cover"
				/>
			</div>
			<div className="flex flex-col justify-between lg:flex-1">
				<div className="flex flex-col md:flex-row">
					<div className="flex flex-col">
						<p className="text-2xl font-semibold">{cartItem.product.name}</p>
						<p>{cartItem.product.description}</p>
					</div>
					<div className="my-4 flex flex-col md:ml-auto md:my-0">
						<span className="text-2xl font-bold">
							R {cartItem.product.currentPrice}
						</span>
						<div className="mt-1">
							<label htmlFor="qty">
								Qty:
								<input
									type="number"
									id="qty"
									className="w-12 ml-2 px-2 py-1"
									value={cartItem.productInstances}
									onChange={handleOnQtyChange}
								/>
							</label>
						</div>
					</div>
				</div>
				<div className="flex flex-col md:flex-row">
					<p className="flex items-center">
						{cartItem.product.isFreeDelivered
							? 'Free Delivery'
							: 'Delivery fees will be charged'}
					</p>
					<div className="flex lg:ml-auto">
						<button
							type="button"
							className="px-2 py-1 rounded flex items-center justify-center transition duration-300 hover:bg-gray-200 rounded-sm mr-2"
							onClick={handleOnRemoveCartItem}
						>
							<span className="material-icons mr-1">delete</span>{' '}
							<span>Remove</span>
						</button>
						<button
							type="button"
							className="px-2 py-1 flex items-center justify-center transition duration-300 hover:bg-gray-200 rounded-sm"
						>
							<span className="material-icons mr-1">favorite</span>
							<span>Add to list</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
