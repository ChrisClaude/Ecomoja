import * as React from 'react';
import ProductCardList from '@/components/products/ProductCardList';
import { products } from '../../Products';

const Catalogue = () => (
	<div className='px-7 py-8 lg:px-16 lg:block'>
		<div className='bg-white'>
			<ProductCardList
				title='Groceries'
				buttonText='View more'
				buttonType='contained'
				products={products}
			/>
		</div>
		<div className='mt-6'>
			<ProductCardList
				title='Groceries'
				buttonText='View more'
				buttonType='outlined'
				products={products}
			/>
		</div>
	</div>
);

export default Catalogue;
