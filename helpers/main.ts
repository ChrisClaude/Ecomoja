import * as React from 'react';
import {
	BackendCart,
	Bike,
	CartItem,
	CartItem as CartItemType,
	Product,
	UIAction,
} from '@/types/AppTypes';
import { addBike } from '@/services/BikeServices';
import {
	User as AuthUser,
} from '@/hooks/context/AuthContext';
import { NEXT_URL, API_URL } from '@/config/index';
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
				productInstances: productItem.quantity,
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


const checkCartItem = (cart:CartItem[], newProduct:Product):boolean => {
	const cartItem: CartItem = cart.find(
		({ product }) => product === newProduct,
	);
	return !!cartItem;
}

/**
 *
 * @param cart Saves a product to the user cart on the backend
 */
export const saveProductToUserCart = async (product: Product, user: any, cartItems: CartItem[]) => {
	const itemExists:boolean = checkCartItem(cartItems, product)

	if(!itemExists){
		const cartRequest: CartRequest = {
			data : {
				product: product.id.toString(),
				quantity: '1',
				users_permissions_user: user.id.toString(),
		 }};

		 fetch(`${NEXT_URL}/api/cart`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(cartRequest),
		})
		 .then(res => res.json())
		 .catch(err => console.log(err.message));
	}// end if
	// else update quantity
}

/**
 *
 * @param cart Store Items to the backend
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
 * Returns car items state from local storage or Backend if it exists else returns null
 */
// eslint-disable-next-line consistent-return
export async function getAllCartItems(user:AuthUser): Promise<CartItemType[]> {
	let cartItems: CartItemType[];

	try {
		if(user){
			cartItems = await getCartItems(user.id);
			return cartItems;
		}

		return JSON.parse(localStorage.getItem('cartitems'));

	} catch (err) {
		console.error(err);
	}
}

async function removeItemFromCart(cartId: number) {
	try {
		const deletedcart = await fetch(
			`${NEXT_URL}/api/deleteCartItem?id=${cartId}`,
			{ method: 'DELETE',
		},
			
		);
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
		total += item.product.currentPrice * item.productInstances;
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
) => {
	dispatch({
		type: 'ADD_PRODUCT_TO_CART',
		payload: product,
		// TODO: review this
		authUser: null,
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

	// there is no existing cart item in the cart - we then create an new cart item
	if (filteredCartItems.length === 0) {
		const cartItem: CartItem = {
			id: newItem.id,
			Users_permissions_user: user,
			product: newItem,
			productInstances: 1,
		};
		return [cartItem, ...cartItems];
	}

	// there is an existing cart item in the cart - we do nothing, just return the exist cart items array as is
	return cartItems;
};

/**
 * Remove cart from state before async removeCartItem() function finishes
 */
export const removeStateCartItem = (
	cartItems: CartItemType[],
	id: number,
): CartItemType[] =>
	cartItems !== null ? cartItems.filter((cartItem) => cartItem.id !== id) : [];

/**
 * Remove cart from backend
 */
export async function removeCartItem(
	cartItems: CartItemType[],
	productId: number,
): Promise<CartItemType[]> {
	const isLoggedIn = true;
	let usercartItems: CartItemType[];

	try {
		const cartItem: CartItem = cartItems.find(
			({ product }) => product.id === productId,
		);

		if (cartItem !== null && isLoggedIn) {
			const deletedcartItem = await removeItemFromCart(cartItem.id);
			// usercartItems = await getCartItems();
			return usercartItems;
		}

		return cartItems.filter((item) => item.product.id !== productId);
	} catch (err) {
		console.log(err);
	}

	return isLoggedIn
		? usercartItems
		: cartItems.filter((cartItem) => cartItem.id !== productId);
}

/**
 * This method finds if a product exists in a product array. It returns true if the product is found, returns false otherwise.
 * @return boolean
 */
export const isProductInArray = (product: Product, array: Product[]): boolean =>
	array.some((p) => p.id === product.id);
