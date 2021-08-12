import { products } from '../Products';

export const getProduct = (id: number) => {
	const result = products.filter((p) => p.id === id);
	return result.length > 0 ? result[0] : null;
};

export const getProducts = () => products;
