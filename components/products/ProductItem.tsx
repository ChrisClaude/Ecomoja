import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Product } from '@/types/Product';

type ProductProps = { product: Product };

const ProductItem = ({
	product: { name, image, currentPrice, oldPrice, rating, numberOfVotes },
}: ProductProps) => (
	<div className="product-item">
		<div className="flex justify-center items-center w-full h-44 p-2.5">
			<img src={image} alt="product" />
		</div>
		<div className="flex flex-col w-full p-2.5">
			<span className="w-full pt-2 flex-1">{name}</span>
			<div className="pricing-info-container">
				<span>R {currentPrice}</span>
				<span className="text-line-through text-muted">R {oldPrice}</span>
				<img
					src="/assets/info-product-item-icon.svg"
					className="pricing-info-svg"
					alt="Pricing info icon"
				/>
			</div>
			<div className="rating-info-container">
				<span className="mr-1">
					<FontAwesomeIcon icon="star" />
				</span>
				<span className="mr-1">{rating}</span>
				<span className="text-muted">({numberOfVotes})</span>
			</div>
		</div>
	</div>
);

export default ProductItem;
