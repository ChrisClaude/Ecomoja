import * as React from 'react';
import { useContext } from 'react';
import Image from 'next/image';
import { Button } from '@/components/common';
import { UIContext } from '@/hooks/context/UIContext';
import { addProductToCart } from '@/helpers/main';
import { Product } from '@/types/AppTypes';
import AuthContext, { AuthState } from '@/hooks/context/AuthContext';

type WishListItemProps = { product: Product };

const WishListItem = ({ product }: WishListItemProps) => {
	const { dispatch } = useContext(UIContext);
	const { user } = useContext<AuthState>(AuthContext);

	const {
		name,
		image,
		currentPrice,
		description,
		isFreeForDelivery,
		oldPrice,
	} = product;

	const handleOnRemoveWishListItem = () => {
		dispatch({
			type: 'REMOVE_PRODUCT_FROM_WISHLIST',
			payload: product,
		});
	};

	return (
		<div className="w-full flex flex-col bg-white p-3 lg:flex-row">
			<div className="flex items-center justify-center">
				<Image
					loader={() => image}
					src={image}
					width={200}
					height={200}
					alt={name}
					objectFit="cover"
					unoptimized
				/>
			</div>
			<div className="flex flex-col justify-between lg:flex-1 ml-2">
				<div className="flex flex-col md:flex-row">
					<div className="flex flex-col w-3/5">
						<p className="text-2xl font-semibold">{name}</p>
						<p>{description}</p>
					</div>
					<div className="my-4 flex flex-col md:ml-auto md:my-0">
						<span className="text-2xl font-bold">R {currentPrice}</span>
						<div className="flex items-center justify-end">
							<span className="text-sm font-bold text-gray-500 line-through">
								R {oldPrice}
							</span>
							<img
								src="/assets/info-product-item-icon.svg"
								className="ml-1 w-4 h-4"
								alt="Pricing info icon"
							/>
						</div>
					</div>
				</div>
				<div className="flex flex-col md:flex-row">
					<p className="flex items-center">
						{isFreeForDelivery
							? 'Free Delivery'
							: 'Delivery fees will be charged'}
					</p>
					<div className="flex flex-col md:ml-auto">
						<Button
							secondary
							className="w-full mb-2 bg-secondary lg:w-52"
							onClick={() => {
								addProductToCart(product, dispatch, user);
								dispatch({ type: 'TOGGLE_MODAL' });
							}}
						>
							<span className="material-icons mr-1">shopping_cart</span>
							<span>Add to cart</span>
						</Button>

						<Button
							className="w-full bg-danger text-white lg:w-52"
							onClick={handleOnRemoveWishListItem}
						>
							<span className="material-icons mr-1">delete</span>{' '}
							<span>Remove</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WishListItem;
