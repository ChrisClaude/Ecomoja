import * as React from 'react';
import ProductItem from '@/components/products/ProductItem';
import { Product } from '@/types/Product';

type ProductCardListProps = ProductListProps & ProductListCardListHeaderProps;
type ProductListSwiperProps = ProductListProps;

type ProductListCardListHeaderProps = {
	title: string;
	buttonText: string;
	buttonType: 'filled' | 'outlined';
};

type ProductListProps = {
	products: Product[];
};

const ProductListSwiper = ({ products }: ProductListSwiperProps) => (
	<div className="flex justify-content-between p-3">
		{products.map((product) => (
			<ProductItem key={product.id} {...product} />
		))}
	</div>
);

const pickButtonType = (
	buttonText: string,
	buttonType: 'filled' | 'outlined',
) => {
	let jsxResult;
	if (buttonType === 'filled') {
		jsxResult = (
			<button className="btn btn-primary" type="button">
				{buttonText}
			</button>
		);
	} else if (buttonType === 'outlined') {
		jsxResult = (
			<button className="btn btn-outline-dark" type="button">
				{buttonText}
			</button>
		);
	}

	return jsxResult;
};

const ProductCardListHeader = ({
	title,
	buttonText,
	buttonType,
}: ProductListCardListHeaderProps) => (
	<div className="d-flex justify-content-between align-items-center py-2 px-4">
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
