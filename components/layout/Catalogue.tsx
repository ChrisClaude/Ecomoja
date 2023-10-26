import * as React from 'react';
import CardList from '@/components/products/CardList';
import { Bike, Product } from '@/types/AppTypes';

const Catalogue = ({
	catalogue,
	title,
}: {
	catalogue: Product[] | Bike[];
	title: string;
}) => (
	<div className="px-7 py-8 lg:px-16 lg:block bg-slate-50">
		<div className="mt-2">
			<CardList
				title={title}
				buttonText="View more"
				buttonType="outlined"
				items={catalogue}
			/>
		</div>
	</div>
);

export default Catalogue;
