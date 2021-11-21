import * as React from 'react';
import { useContext } from 'react';
import { Product } from '@/types/Product';
import Image from 'next/image';
import { Button } from '@/components/common';
import { UIContext } from '@/hooks/context/UIContext';
import { handleAddProductToCart } from '@/helpers/main';

type WishListItemProps = { product: Product };

const WishListItem = ({
	product,
}: WishListItemProps) => {
	const { dispatch } = useContext(UIContext);
	
	const {
		id,
		name,
		image,
		currentPrice,
		description,
		isFreeForDelivery,
		oldPrice,
		rating,
		numberOfVotes,
	} = product;

	const handleOnRemoveWishListItem = () => {
		dispatch({
			type: 'REMOVE_PRODUCT_FROM_WISHLIST',
			payload: product,
		});
	};

	return (
		<div className='w-full flex flex-col bg-white p-3 lg:flex-row'>
			<div>
				<Image
					loader={() => image}
					src={image}
					width={200}
					height={200}
					alt={name}
					objectFit="cover"
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
				<div className='flex flex-col md:flex-row'>
					<p className='flex items-center'>
						{isFreeForDelivery
							? 'Free Delivery'
							: 'Delivery fees will be charged'}
					</p>
					<div className='flex flex-col md:ml-auto'>
						<Button primary className='w-52 mb-2 bg-secondary' onClick={() => {
							handleAddProductToCart(product, dispatch);
							dispatch({ type: 'TOGGLE_MODAL' });
						}}>
							<span className='material-icons mr-1'>shopping_cart</span>
							<span>Add to cart</span>
						</Button>

						<Button
							className='w-52 bg-danger text-white'
							onClick={handleOnRemoveWishListItem}
						>
							<span className='material-icons mr-1'>delete</span>{' '}
							<span>Remove</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WishListItem;
