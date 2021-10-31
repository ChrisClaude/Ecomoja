import * as React from 'react';
import ProductCardList from '@/components/products/ProductCardList';
import { products } from '../../Products';

const Catalogue = () => (
	<div className="px-16 py-8 hidden lg:block">
		<div className="bg-white">
			<ProductCardList
				title="Groceries"
				buttonText="View more"
				buttonType="contained"
				products={products}
			/>
		</div>
		<div className="mt-6">
			<ProductCardList
				title="Groceries"
				buttonText="View more"
				buttonType="outlined"
				products={products}
			/>
		</div>
	</div>
);

export default Catalogue;
