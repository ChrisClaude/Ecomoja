import * as React from 'react';
import { Product } from '@/types/AppTypes';

type ProductsLayoutMenuProps = {
	items: Product[] | any[];
	component: React.ComponentType<any>;
};

const ProductsLayoutMenu = ({ items, component }: ProductsLayoutMenuProps) => {
	const ItemComponent = component;
	return (
		<div className="flex sm:justify-center sm:flex-wrap lg:flex-wrap lg:justify-center xl:flex-wrap xl:justify-center md:justify-center md:flex-wrap">
			{items.map((item) => (
			<div key={item.id} className="md:basis-1/4 md:last-of-type:mr-auto sm:basis-1/2 sm:last-of-type:mr-auto lg:last-of-type:mr-auto lg:basis-1/5 xl:last-of-type:mr-auto xl:basis-1/6">
				<ItemComponent item={item}/>
			</div>
			))}
		</div>
	);
};

export default ProductsLayoutMenu;
