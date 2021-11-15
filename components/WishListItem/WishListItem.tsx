import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { Product } from '@/types/Product';

type WishListItemProps = { product: Product };

const WishListItem = ({
	product: { id, name, image, currentPrice, oldPrice, rating, numberOfVotes },
}: WishListItemProps) => (
	<div className=" content-center  max-w-md w-full lg:flex  mt-5">
		<div className=" w-3/4 h-48 lg:h-auto lg:w-48  flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
			<img src={image} alt="product" />
		</div>
		<div className=" w-3/4 flex-none border-r border-b border-1 border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal ">
			<span className=" font-bold w-full pt-2 flex-1">{name}</span>
			<div className="mb-8 pricing-info-container">
				<span className="text-base mr-2">R {currentPrice}</span>
				<span className="line-through text-gray-400 mr-2">R {oldPrice}</span>
				<img
					src="/assets/info-product-item-icon.svg"
					className="w-4 h-4"
					alt="Pricing info icon"
				/>
			</div>
			<div className=" flex items-center  ">
				<span className="mr-1">
					<FontAwesomeIcon icon="star" className="text-yellow-500" />
				</span>
				<span className="mr-1">{rating}</span>
				<span className="text-muted">({numberOfVotes})</span>
			</div>
		</div>

		<div className=" w-3/4 flex-none border-r border-b border-1 border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal ">
			<div className="  flex md:ml-auto">
				<div className=" mb-8">
					<button
						type="button"
						className=" mt-2 px-2 py-1 rounded flex items-center justify-center transition duration-300 mr-2 shadow-sm bg-gradient-to-r from-gray-50 to-gray-200 hover:from-gray-300 hover:to-gray-200"
						/* 							  onClick={handleOnRemoveWishlistItem}
						 */
					>
						<span className="material-icons mr-1 font-bold py-0.5 px-2 rounded">
							delete
						</span>
						<span>Remove</span>
					</button>
				</div>
				<div className=" mb-8 ">
					<button
						type="button"
						className="  mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						/* onClick={handleOnRemoveWishlistItem */
					>
						<span>
							<Link href={`/products/${id}`}>Add to Cart </Link>
						</span>
					</button>
				</div>
			</div>
		</div>
	</div>
);

export default WishListItem;
