import * as React from 'react';
import { default as cn } from 'classnames';
import ItemListSwiper from '@/components/products/ItemListSwiper';
import Button from '@/components/common/Button';
import BikeItem from '@/components/core/BikeItem';
import { Bike, Product } from '@/types/AppTypes';
import ProductItem from './ProductItem';

type CardListProps = ItemListProps & CardListHeaderProps;

type CardListHeaderProps = {
	title: string;
	buttonText: string;
	buttonType: 'contained' | 'outlined';
} & React.HTMLProps<HTMLDivElement>;

type ItemListProps = {
	items: (Product | Bike)[];
};

// determines if type of items is Product array or Bike array
const isProductArray = (items: (Product | Bike)[]): items is Product[] => true;

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
			<Button className="bg-lime-500" secondary>
				{buttonText}
			</Button>
		);
	}

	return jsxResult;
};

const CardListHeader = ({
	title,
	buttonText,
	buttonType,
	...props
}: CardListHeaderProps) => (
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

const CardList = ({ items, title, buttonText, buttonType }: CardListProps) => (
	<div className="w-full">
		<CardListHeader
			title={title}
			buttonText={buttonText}
			buttonType={buttonType}
			className="mb-2"
		/>

		<ItemListSwiper
			items={items}
			component={isProductArray(items) ? ProductItem : BikeItem}
		/>
	</div>
);

export default CardList;
