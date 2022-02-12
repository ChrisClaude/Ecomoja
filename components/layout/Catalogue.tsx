import * as React from 'react';
import CardList from '@/components/products/CardList';
import { Product } from '@/types/AppTypes';

const Catalogue = ({ catalogue }: { catalogue: Product[] | any[] }) => (
	<div className="px-7 py-8 lg:px-16 lg:block">
		<div className="bg-white">
			<CardList
				title="Groceries"
				buttonText="View more"
				buttonType="contained"
				items={catalogue}
			/>
		</div>
		<div className="mt-6">
			<CardList
				title="Groceries"
				buttonText="View more"
				buttonType="outlined"
				items={catalogue}
			/>
		</div>
	</div>
);

export default Catalogue;
