import { Product } from './Product';

export type UIState = {
	isShopByCategoryCollapsed: boolean;
	cartItems: CartItem[];
};

export type CartItem = {
	/** Cart Items are expected to have the same id as the one of its product instance */
	id: number;
	/** This is an array of the instance(s) of the same product */
	product: Product;
	productInstances: number;
};
