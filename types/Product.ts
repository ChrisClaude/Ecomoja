export type Product = {
	id: number;
	name: string;
	image: string;
	description: string;
	currentPrice: number;
	oldPrice?: number;
	rating?: number;
	numberOfVotes?: number;
	categories: string[];
	vendor: string;
	isInStock: boolean;
	isFreeForDelivery?: boolean;
	deliveryFees?: number;
};
