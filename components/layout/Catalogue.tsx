import * as React from 'react';
import ProductCardList from '@/components/products/ProductCardList';
import { products } from '../../Products';

const Catalogue = () => (
	<div className="px-44 py-8">
		<div className="bg-white">
			<ProductCardList
				title="Daily Deals"
				buttonText="View more"
				buttonType="filled"
				products={products}
			/>
		</div>
		<div className="mt-6">
			<ProductCardList
				title="Stay Warm & Well This Winter"
				buttonText="View more"
				buttonType="outlined"
				products={products}
			/>
		</div>
	</div>
);

export default Catalogue;
