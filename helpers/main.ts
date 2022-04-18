import * as React from 'react';
import {
	Bike,
	CartItem,
	CartItem as CartItemType,
	Product,
	UIAction,
} from '@/types/AppTypes';
import { addProduct } from '@/services/ProductServices';
import { addBike } from '@/services/BikeServices';

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

export const handleAddBikeToCart = (
	bike: Bike,
	dispatch: React.Dispatch<UIAction>,
) => {
	dispatch({
		type: 'ADD_BIKE_TO_CART',
		payload: bike,
	});
	addBike(bike);
};

export const addNewCartItem = (
	cartItems: CartItemType[],
	newItem: Product,
): CartItemType[] => {
	const filteredCartItems = cartItems.filter(
		(cartItem) => cartItem.id === newItem.id,
	);

	// there is no existing cart item in the cart - we then create an new cart item
	if (filteredCartItems.length === 0) {
		const cartItem: CartItem = {
			id: newItem.id,
			product: newItem,
			productInstances: 1,
		};
		return [cartItem, ...cartItems];
	}

	// there is an existing cart item in the cart - we do nothing, just return the exist cart items array as is
	return cartItems;
};

export const removeCartItem = (
	cartItems: CartItemType[],
	id: number,
): CartItemType[] => cartItems.filter((cartItem) => cartItem.id !== id);

/**
 * This method finds if a product exists in a product array. It returns true if the product is found, returns false otherwise.
 * @return boolean
 */
export const isProductInArray = (product: Product, array: Product[]): boolean =>
	array.some((p) => p.id === product.id);
