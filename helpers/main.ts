/* eslint-disable no-param-reassign */
/* eslint-disable no-else-return */
/* eslint-disable no-lonely-if */
import * as React from 'react';
// eslint-disable-next-line import/no-cycle
import {
	Bike,
	CartItem,
	CartItem as CartItemType,
	Product,
	UIAction,
} from '@/types/AppTypes';
import { addBike } from '@/services/BikeServices';
// eslint-disable-next-line import/no-cycle
import {
	User as AuthUser,
} from '@/hooks/context/AuthContext';
import { NEXT_URL } from '@/config/index';
import { CartRequest } from '@/services/ApiService';
/**
 *  Method for querying and returning products all from backend */
export async function getAllProducts(): Promise<Product[]> {
	let products: Product[];

	try {
		const response = await fetch(
			`${NEXT_URL}/api/getAllProducts?populate=*`,
		);
		const result = await response.json();
		products = result.response.data.map(
			(productItem): Product => ({
				id: productItem.id,
				name: productItem.attributes.name,
				description: productItem.attributes.description,
				image:
					productItem.attributes.images.data[0].attributes.formats.thumbnail
						.url,
				currentPrice: productItem.attributes.price,
				oldPrice: productItem.attributes.oldPrice,
				rating: 4,
				numberOfVotes: 90,
				categories: ['Gardening'],
				vendor: 'CMK',
				isInStock: productItem.attributes.isInStock,
			}),
		);
	} catch (error) {
		console.log(error);
	}

	return products;
}

export function getEcoProducts(ecoProducts): Product[] {
	let products: Product[];

		// eslint-disable-next-line prefer-const
		products = ecoProducts.response.data.map(
			(productItem): Product => ({
				id: productItem.id,
				name: productItem.attributes.name,
				description: productItem.attributes.description,
				image:
					productItem.attributes.images.data[0].attributes.formats.thumbnail
						.url,
				currentPrice: productItem.attributes.price,
				oldPrice: productItem.attributes.oldPrice,
				rating: 4,
				numberOfVotes: 90,
				categories: ['Gardening'],
				vendor: 'CMK',
				isInStock: productItem.attributes.isInStock,
			}),
		);

	return products;
}

/* Method for creating cart Items */
async function recreateCartItems(cartItemsAPI): Promise<CartItemType[]> {
	const cartItems: CartItemType[] = [];
	try {
		const products: Product[] = await getAllProducts();
		cartItemsAPI.response.forEach((productItem) => {
			const product: Product = products.find(
				({ id }) => id === productItem.product.id,
			);
			cartItems.push({
				id: productItem.id,
				Users_permissions_user: productItem.users_permissions_user,
				product,
				quantity: productItem.quantity,
			});
		});
	} catch (err) {
		console.log(err.message);
	}
	return cartItems;
}

/**
 *  Method for getting all cart Items */
async function getCartItems(userId:number): Promise<CartItemType[]> {
	let cartItems: CartItemType[] = [];

	try {
		if(userId){
			const cartAPIResponse = await fetch(`${NEXT_URL}/api/getCartByUserId?id=${userId}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
			const cartAPI = await cartAPIResponse.json();
			const items = await recreateCartItems(cartAPI);
			cartItems = items;
		}

	} catch (error) {
		console.error('Error:', error);
	}

	return cartItems;
}

/**
 *
 * Get the local storage items
 */
export function getLocalStorageCart():CartItem[]{
	const userCart:CartItem[] = [];
	const lStorageCart:CartItem[] = JSON.parse(localStorage.getItem('cartitems'));
	if(lStorageCart !== null){
		return lStorageCart;
	}
	return userCart
}

/**
 *
 * Get the local storage and override the user object with that of the logged in user
 */
export function getLocalStorageUserCart(user):CartItem[]{
	let userCart:CartItem[] = [];
	const lStorageCart:CartItem[] = JSON.parse(localStorage.getItem('cartitems'));
	if(lStorageCart !== null && user){
		userCart = lStorageCart.slice();
		userCart.forEach((cart)=>{
			// eslint-disable-next-line no-param-reassign
			cart.Users_permissions_user = user;
		});
		// eslint-disable-next-line @typescript-eslint/no-use-before-define
		storeCartItemsInLocalStorage([]);
		return userCart;
	}
	return userCart	
}

/**
 *
 * @param cart remove user object and insert items in local storage when the user logs out
 */
export function insertItemsInLocalStorage(cartItems: CartItem[]){
	const localStorageCartItems:CartItem[] = [];
	if(cartItems !== null){
		cartItems.forEach((item) => {
			// eslint-disable-next-line no-param-reassign
			item.Users_permissions_user = null;
			// eslint-disable-next-line no-param-reassign
			item.id = item.product.id;
			localStorageCartItems.push(item);
		});
		// eslint-disable-next-line @typescript-eslint/no-use-before-define
		storeCartItemsInLocalStorage(localStorageCartItems);
	}
}

/**
 *
 * @param cart Send local storage items to the backend when user logs in
 */
export async function saveTempCart(cartItems: CartItem[]){
	let response:Response = null;
	try{
		if(cartItems.length > 0){
			response = await fetch(`${NEXT_URL}/api/saveCart`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(cartItems),
			});
			return response
		}
	}catch(error){
		console.log(error.message);
	}
	return response
}
/**
 *
 * @param cart Saves a product to the user cart on the backend
 */
export const saveProductToUserCart = async (product: Product, user: any, cartItems: CartItem[]) => {
	let res:Response = null;
	const cartRequest: CartRequest = {
		data : {
			product: product.id.toString(),
			quantity: '1',
			users_permissions_user: user.id.toString(),
	 }};

	 try{
		res = await fetch(`${NEXT_URL}/api/cart`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(cartRequest),
		});

		return res;
	 }
	 catch(err){
		console.log(err);
	 }
	 return res;
}

/**
 *
 * @param cart Store Items to the localstorage
 */
export async function updateCartQuantity(cartItem:CartItem):Promise<Response>{
	let response:Response = null;
	try{
		if(cartItem !== null){
			response = await fetch(`${NEXT_URL}/api/updateCartQuantity`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(cartItem),
			});
			return response
		}
	}catch(error){
		console.log(error.message);
	}
	return response
}

/**
 *
 * @param cart update backend cart quantity
 */
export async function initiateQuantityUpdate(cartItem:CartItem):Promise<Response>{
	let response:Response = null;
	if(cartItem !== null){
		try{
			response = await updateCartQuantity(cartItem);
			return response;
		}
		catch(err){
			console.error(err);
		}
	}
	return response;
}

/**
 *
 * @param cart increase cart quantity
 */
export async function increaseQuantity(newQuantity:number, cartItems:CartItemType[], cartItem:CartItemType){
	const tempCartItems = cartItems.slice();
	const filteredCartItem = tempCartItems.filter((cart) => cart.id === cartItem.id);
	filteredCartItem[0].quantity = newQuantity;
	try{
		const response = await updateCartQuantity(cartItem);
		 if(response.ok){
			return tempCartItems;
		 }
	}
	catch(err){
		console.error(err);
	}
	return tempCartItems;
}

/**
 *
 * @param cart Store Items to the localstorage
 */
export const storeCartItemsInLocalStorage = (cart: CartItemType[]) => {
	localStorage.setItem('cartitems', JSON.stringify(cart));
};


/**
 * Removes cart state from local storage
 */
export const removeCartFromLocalStorage = () => {
	localStorage.removeItem('cartitems');
};

/**
 * Returns cart items from Backend if it exists else returns null
 */
// eslint-disable-next-line consistent-return
export async function getAllCartItems(user:AuthUser): Promise<CartItemType[]> {
	let cartItems: CartItemType[];

	try {
		if(user){
			cartItems = await getCartItems(user.id);
			return cartItems;
		}

	} catch (err) {
		console.error(err);
	}
}

/**
 * Removes cart items from backend by cart Id, not to be mistaken with product id
 */
export async function removeItemFromCart(cartId: number) {
	try {
		await fetch(
			`${NEXT_URL}/api/deleteCartItem?id=${cartId}`,
			{ method: 'DELETE',
		},);
	} catch (err) {
		console.log(err);
	}
}

/**
 * Computes the total price from the cart items
 * @param cart the cart array containing the user selected items
 */
export const calculateCartTotal = (cart: CartItemType[]): number => {
	let total = 0;
	cart.forEach((item) => {
		total += item.product.currentPrice * item.quantity;
	});
	return total;
};

/**
 * Computes the total number of cart items
 * @param cart the cart array containing the user selected items
 */
export const calculateNumberOfCartItems = (cart: CartItemType[]): number => {
	const total  = cart.length
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

export const addProductToCart = (
	product: Product,
	dispatch: React.Dispatch<UIAction>,
	user: AuthUser
) => {
	dispatch({
		type: 'ADD_PRODUCT_TO_CART',
		payload: product,
		// TODO: review this
		authUser: user,
	});
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
	user: AuthUser,
): CartItemType[] => {
	const filteredCartItems = cartItems.filter(
		(cartItem) => cartItem.id === newItem.id,
	);
	const existingItem = filteredCartItems.slice();
	// there is no existing cart item in the cart - we then create a new cart item
	if (filteredCartItems.length === 0) {
		const cartItem: CartItem = {
			id: newItem.id,
			Users_permissions_user: user,
			product: newItem,
			quantity: 1,
		};
		return [cartItem, ...cartItems];
	}
	// remove existing cart item from passed array
	const tempCartItems = cartItems.filter((item) => item.product.id !== existingItem[0].product.id);
	// increment quantity of the existing cart item
	existingItem[0].quantity += 1;
	return [existingItem[0], ...tempCartItems]; 
};

/**
 * Filter the new cart item to avoid duplicates
 */
export const createNewCartItem = (
	cartItems: CartItemType[],
	newItem: Product
):CartItemType[] => {
	const newCartItem = cartItems.filter(
		(cartItem) => cartItem.product.id === newItem.id,
	);

	return newCartItem;
}

/**
 * Remove cart from state before async removeCartItem() function finishes
 */
export const removeStateCartItem = (
	cartItems: CartItemType[],
	id: number,
): CartItemType[] =>
	cartItems !== null ? cartItems.filter((cartItem) => cartItem.id !== id) : [];

/**
 * Update cart items after removing an item
 */
export function removeCartItem(
	cartItems: CartItemType[],
	productId: number,
): CartItemType[] {
	return cartItems.filter((item) => item.product.id !== productId);
}

/**
 * This method finds if a product exists in a product array. It returns true if the product is found, returns false otherwise.
 * @return boolean
 */
export const isProductInArray = (product: Product, array: Product[]): boolean =>
	array.some((p) => p.id === product.id);

/**
 * send and save user local storage if user is logged in
 */	
export async function saveTempUserCart(user:AuthUser):Promise<boolean>{
	const userCart = getLocalStorageUserCart(user);
	if(userCart.length > 0){
		// send and save local storage to the backend
		const res = await saveTempCart(userCart);
		return res.ok;
	}
	return false;
}

/**
 * Get all user cart Items if user is logged in
 */	
export async function getAllCarts(dispatch, user:AuthUser) {
	try{
		const cartItems:CartItem[] = await getAllCartItems(user);
		if(cartItems !== null){
			dispatch({ type: 'PATCH_CART', payload: cartItems });
		}
	}
	catch(err){
		console.log(err);
	}
}

/**
 * Initialize user cart when user is logged in
 */	
export async function initializeCartItems(user:AuthUser, dispatch){
	try{
		if(user){
			const saved = await saveTempUserCart(user);
			if(saved){
				await getAllCarts(dispatch, user);
			}
			await getAllCarts(dispatch, user);
		}	
	}
	catch(err){
		console.log(err);
	}
}

/**
 * Update cart in local storage if user signs out
 */	
export function updateFromLocalStorage(dispatch){
	const lStorageCart = getLocalStorageCart();
	if(lStorageCart.length > 0){
		dispatch({ type: 'PATCH_CART', payload: lStorageCart });
	}
	dispatch({ type: 'PATCH_CART', payload: lStorageCart });
	storeCartItemsInLocalStorage(lStorageCart);
}