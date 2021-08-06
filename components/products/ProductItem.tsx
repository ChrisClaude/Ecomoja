import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Product } from '@/types/Product';

type ProductProps = Product;

const ProductItem = ({
	name,
	image,
	currentPrice,
	oldPrice,
	rating,
	numberOfVotes,
}: ProductProps) => (
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
