import * as React from 'react';
import { Product } from '@/types/Product';
import ProductListSwiper from '@/components/products/ProductListSwiper';
import Button from '@/components/common/Button';
import { default as cn } from 'classnames';

type ProductCardListProps = ProductListProps & ProductListCardListHeaderProps;

type ProductListCardListHeaderProps = {
	title: string;
	buttonText: string;
	buttonType: 'contained' | 'outlined';
} & React.HTMLProps<HTMLDivElement>;

type ProductListProps = {
	products: Product[];
};

const pickButtonType = (
	buttonText: string,
	buttonType: 'contained' | 'outlined',
) => {
	let jsxResult;
	if (buttonType === 'contained') {
		jsxResult = (
			<Button variant="contained" secondary>
				{buttonText}
			</Button>
		);
	} else if (buttonType === 'outlined') {
		jsxResult = (
			<Button variant="outlined" dark>
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
	...props
}: ProductListCardListHeaderProps) => (
	<div
		{...props}
		className={cn(
			'flex justify-between align-items-center pt-2 pb-1 px-4',
			props.className,
		)}
	>
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
			className="mb-2"
		/>
		<ProductListSwiper products={products} />
	</div>
);

export default ProductCardList;
