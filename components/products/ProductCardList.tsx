import * as React from 'react';
import ProductItem from '@/components/products/ProductItem';
import { Product } from '@/types/Product';
import ProductListSwiper from '@/components/products/ProductListSwiper';
import Button from '@/components/core/Button';

type ProductCardListProps = ProductListProps & ProductListCardListHeaderProps;

type ProductListCardListHeaderProps = {
	title: string;
	buttonText: string;
	buttonType: 'filled' | 'outlined';
};

type ProductListProps = {
	products: Product[];
};

const pickButtonType = (
	buttonText: string,
	buttonType: 'filled' | 'outlined',
) => {
	let jsxResult;
	if (buttonType === 'filled') {
		jsxResult = (
			<Button variant="contained" primary>
				{buttonText}
			</Button>
		);
	} else if (buttonType === 'outlined') {
		jsxResult = (
			<Button variant="outlined" primary>
				{buttonText}
			</Button>
		);
	}

	return jsxResult;
};

const ProductCardListHeader = ({
	title,
	buttonText,
	buttonType,
}: ProductListCardListHeaderProps) => (
	<div className="flex justify-between align-items-center pt-2 pb-1 px-4">
		<h3>{title}</h3>
		{pickButtonType(buttonText, buttonType)}
	</div>
);

const ProductCardList = ({
	products,
	title,
	buttonText,
	buttonType,
}: ProductCardListProps) => (
	<div className="w-full">
		<ProductCardListHeader
			title={title}
			buttonText={buttonText}
			buttonType={buttonType}
		/>
		<ProductListSwiper products={products} />
	</div>
);

export default ProductCardList;
