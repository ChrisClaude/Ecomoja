import { Product } from '@/types/Product';
import { products } from '../Products';

export const getProduct = (id: number) => {
	const result = products.filter((p) => p.id === id);
	return result.length > 0 ? result[0] : null;
};

export const addProduct = (product: Product) => {
	// TODO: Add product to user cart on server
	console.warn(`Added product`);
	console.log(product);
};

export const getProducts = () => products;
