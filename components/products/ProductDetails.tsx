import * as React from 'react';
import { Product } from '@/types/Product';
import Image from 'next/image';

const showCategories = ({ id, categories }: Product) => (
	<div className="flex">
		<span className="py-3 pr-4">Categories</span>
		{categories.map((category) => (
			<span className="py-3 pr-4" key={`${id}-${category}`}>
				{category}
			</span>
		))}
	</div>
);

const ProductDetails = ({ product }: { product: Product }) => {
	return (
		<div className="flex flex-col h-full w-full bg-gray-300">
			<div className="flex">{showCategories(product)}</div>
			<div className="flex">
				<div className="w-1/2 flex justify-center">
					<Image
						loader={() => product.image}
						width={200}
						height={200}
						src={product.image}
						alt={product.name}
					/>
				</div>
				<div className="w-1/2 flex flex-col">
					<span>{product.name}</span>
					<span>R {product.currentPrice}</span>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
