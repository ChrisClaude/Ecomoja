import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

export type Product = {
	id: number;
	name: string;
	image: string;
	description: string;
	currentPrice: number;
	oldPrice?: number;
	rating?: number;
	numberOfVotes?: number;
};

const ProductItem = ({
	name,
	image,
	currentPrice,
	oldPrice,
	rating,
	numberOfVotes,
}: Product) => (
	<div className="product-item">
		<div className="d-flex justify-content-center w-100 product-item-header">
			<img src={image} alt="product" />
		</div>
		<div className="d-flex flex-column w-100 product-item-body">
			<span className="w-100 pt-2 product-description">{name}</span>
			<div className="pricing-info-container">
				<span>R {currentPrice}</span>
				<span className="text-line-through text-muted">R {oldPrice}</span>
				<img
					src="/assets/info-product-item-icon.svg' %}"
					className="pricing-info-svg"
					alt="Pricing info icon"
				/>
			</div>
			<div className="rating-info-container">
				<span>
					<FontAwesomeIcon icon="star" />
				</span>
				<span>
					{rating}
					<span className="text-muted">{numberOfVotes}</span>
				</span>
			</div>
		</div>
	</div>
);

export default ProductItem;
