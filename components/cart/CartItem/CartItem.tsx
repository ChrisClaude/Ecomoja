import React from 'react';
import Image from 'next/image';
import { CartItem as CartItemType } from '@/types/AppTypes';

const CartItem = ({ cartItem }: { cartItem: CartItemType }) => {
	return (
		<div className="w-full flex bg-white p-3">
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
			<div className="flex flex-col flex-1 justify-between">
				<div className="flex">
					<div className="flex flex-col">
						<p>{cartItem.product.name}</p>
						<p>{cartItem.product.description}</p>
					</div>
					<div className="flex flex-col ml-auto">
						<span>R {cartItem.product.currentPrice}</span>
						<span>Qty: {cartItem.productInstances}</span>
					</div>
				</div>
				<div className="flex">
					<p>Delivery info: {cartItem.product.isFreeDelivered}</p>
					<div className="flex ml-auto">
						<button
							type="button"
							className="p-1 flex items-center justify-center transition duration-300 hover:bg-gray-200 rounded-sm"
						>
							<span className="material-icons">delete</span> Remove
						</button>
						<button
							type="button"
							className="p-1 flex items-center justify-center transition duration-300 hover:bg-gray-200 rounded-sm"
						>
							<span className="material-icons">favorite</span>Add to list
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
