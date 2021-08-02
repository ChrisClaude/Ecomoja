import * as React from 'react';
import ProductItem from '@/components/products/ProductItem';
import { products } from '../../Products';

const ProductList = () => (
	<>
		{products.map(product => (
			<ProductItem key={product.id} {...product} />
		))}
	</>
);

export default ProductList;
