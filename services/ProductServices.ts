import { Product } from '@/types/AppTypes';
import { products } from '../MockData';

export const getProduct = (id: number) => {
	const result = products.filter((p) => p.id === id);
	return result.length > 0 ? result[0] : null;
};

export const addProduct = (product: Product) => {
	// TODO: Add product to user cart on server
	// TODO: Persist cart on cookies or local storage if user not logged in
	console.warn(`Added product`);
	console.log(product);
};

export const getProducts = () => products;
