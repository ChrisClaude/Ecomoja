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
	<div className="px-7 py-8 lg:px-16 lg:block">
		<div className="bg-white">
			<CardList
				title={title}
				buttonText="View more"
				buttonType="contained"
				items={catalogue}
			/>
		</div>
		<div className="mt-6">
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
