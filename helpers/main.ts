import { CartItem, CartItem as CartItemType, UIAction } from '@/types/AppTypes';
import { Product } from '@/types/Product';
import * as React from 'react';
import { addProduct } from '@/services/ProductServices';

/**
 * Stores cart state to local storage
 * @param cart the cart array containing the user selected items
 */
export const storeCartToLocalStorage = (cart: CartItemType[]) => {
	localStorage.setItem('cartitems', JSON.stringify(cart));
};

/**
 * Removes cart state from local storage
 */
export const removeCartFromLocalStorage = () => {
	localStorage.removeItem('cartitems');
};

/**
 * Returns car items state from local storage if it exists else returns null
 */
export const getCartFromLocalStorage = (): CartItemType[] | null =>
	JSON.parse(localStorage.getItem('cartitems'));

/**
 * Computes the total price from the cart items
 * @param cart the cart array containing the user selected items
 */
export const calculateCartTotal = (cart: CartItemType[]): number => {
	let total = 0;

	cart.forEach((item) => {
		total += item.product.currentPrice * item.productInstances;
	});

	return total;
};

/**
 * Computes the total number of cart items
 * @param cart the cart array containing the user selected items
 */
export const calculateNumberOfCartItems = (cart: CartItemType[]): number => {
	let total = 0;

	cart.forEach((item) => {
		total += item.productInstances;
	});

	return total;
};

// TODO: Implement pure classes
export const purgeClasses = (classNames: string): string => {
	const classArray = classNames.split(' ');
	// We need to remove duplicate classes such as
	// e.g: 'bg-green-300 bg-blue-200 py-2' => 'bg-blue-200 py-2'
	// e.g: 'bg-red-200 px-4 p-4' => 'bg-red-200 p-4'
	// e.g: 'bg-red-200 mx-4 m-2' => 'bg-red-200 m-2'
	classArray.forEach((c) => c.trim());

	// eg: flex items-center justify-center py-2 px-3 rounded-sm font-semibold
	// hover:scale-105 hover:animate-heartbeat bg-primary text-white focus-within:border-primary
	return '';
};

// Event handlers
export const handleAddProductToCart = (
	product: Product,
	dispatch: React.Dispatch<UIAction>,
) => {
	dispatch({
		type: 'ADD_PRODUCT_TO_CART',
		payload: product,
	});
	addProduct(product);
};
