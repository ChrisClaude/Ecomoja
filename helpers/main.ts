import * as React from 'react';
import {
	BackendCart,
	Bike,
	CartItem,
	CartItem as CartItemType,
	Product,
	UIAction,
} from '@/types/AppTypes';
import { addProduct } from '@/services/ProductServices';
import { addBike } from '@/services/BikeServices';
import { products } from 'MockData';


/* Method for querying and returning products from backend */

async function getProducts():Promise<Product[]>{

	let products: Product[];

	try{
		const response = await fetch('http://localhost:1337/api/products?populate=*')
		const result = await response.json();
	
		products = result.data.map((productItem): Product => ({
			id: productItem.id,
			name: productItem.attributes.name,
			description: productItem.attributes.description,
			image: productItem.attributes.images.data[0].attributes.formats.thumbnail.url,
			currentPrice: productItem.attributes.price,
			oldPrice: productItem.attributes.oldPrice,
			rating: 4,
			numberOfVotes: 90,
			categories: ['Gardening'],
			vendor: 'CMK',
			isInStock: productItem.attributes.isInStock,
			getCustomTypeName: () => 'Product',
		}));

	}catch(error){
		console.log(error);
	}

	return products;
}

/**
 *  Method for storing cart Items to the backend */
async function SaveCartItems(backendCartItem:BackendCart){
	try {
	
	  const response = await fetch("http://localhost:1337/api/carts", {
			method: "POST", 
			headers: {
		  "Content-Type": "application/json",
			},
			body: JSON.stringify(backendCartItem),
	  });
  
	  const result = await response.json();
	  console.log("Success:", result);
	} catch (error) {
	  console.error("Error:", error);
	}
}

/* Method for creating cart Items */
async function recreateCartItems(cartItemsAPI):Promise<CartItemType[]>{

	const cartItems: CartItemType[] = [];

	try{
		const products: Product[] = await getProducts();
		
		cartItemsAPI.data.forEach((productItem) => {

			const product: Product = products.find(({ id }) => 
				id === productItem.attributes.products.data[0].id);

			cartItems.push({
				id:productItem.id, product , productInstances:productItem.attributes.quantity
			});
		
		});

	}catch(err){
		console.log(err);
	}

	return cartItems;

}

/**
 *  Method for getting all cart Items */
async function getCartItems():Promise<CartItemType[]>{

	let cartItems: CartItemType[] = [];

	try {
	  const cartAPIResponse = await fetch("http://localhost:1337/api/carts?populate=*");
	  const cartAPI = await cartAPIResponse.json();
	  const items = await recreateCartItems(cartAPI);
	  cartItems = items;
	
	  console.log("Success:", cartItems);
	} 
	catch (error) {
	  console.error("Error:", error);
	}

	return cartItems;
}

/**
 * Stores cart state to local storage or Backend if the user is loggedIn
 * @param cart the cart array containing the user selected items
 */

const getBackendCartFormat = (cart: CartItem):BackendCart => 
({
		data:{
			id: cart.id,
			products: cart.product.id,
			quantity: cart.productInstances,
		},
});

/**
 * Returns true or false if cartItem exits */
async function cartItemExits(CartItem:CartItem):Promise<boolean>{
	const cartItems = await getAllCartItems();
	const cartItem: CartItem = cartItems.find(({ id }) => 
				id === CartItem.id);
    return cartItem? true:false;
}

/**
 * 
 * @param cart Store Items to the backend or localStorage if user is logged in
 */
export const StoreCartItems = (cart: CartItemType[]) => {

	const isLoggedIn = true;
	
	if(isLoggedIn && cart !== null)
	{
		cart.forEach( async (item) => {

			  try{
				
				const itemExists = await cartItemExits(item);
				
				if(!itemExists){	
					const backendCartItem = getBackendCartFormat(item);
					await SaveCartItems(backendCartItem);
				}
			  }
			  catch(err){
				console.log(err);
			  }

		});

	}
	else{
		localStorage.setItem('cartitems', JSON.stringify(cart));
	}

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
export async function getAllCartItems():Promise<CartItemType[]> {

	const isLoggedIn = true;
	let cartItems : CartItemType[];

	try{
		cartItems = await getCartItems();
		return isLoggedIn? cartItems : JSON.parse(localStorage.getItem('cartitems'));
	}
	catch(err){
		console.log(err);
	}
	
	return isLoggedIn? cartItems : JSON.parse(localStorage.getItem('cartitems'));
}

async function removeItemFromCart(cartId:number){
	try{
		const deletedcart = await fetch(`http://localhost:1337/api/carts/${cartId}`,
		{ method: 'DELETE' });
		const res = await deletedcart.json();
		console.log(res)
	}
	catch(err){
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

export async function removeCartItem(
	cartItems: CartItemType[],
	product_id: number,
): Promise<CartItemType[]>{
	
	const isLoggedIn = true;
	let usercartItems: CartItemType[];
	
	try{
		const cartItem: CartItem = cartItems.find(({ product }) => 
		product.id === product_id);

		if(cartItem !== null && isLoggedIn){
			const deletedcartItem = await removeItemFromCart(cartItem.product.id);
			usercartItems = await getCartItems();
			return usercartItems;
		}
		
		return cartItems.filter((cartItem) => cartItem.product.id !== product_id);

	}
	catch(err){
		console.log(err);
	}

	return isLoggedIn? usercartItems : cartItems.filter((cartItem) => cartItem.id !== product_id);

};

/**
 * This method finds if a product exists in a product array. It returns true if the product is found, returns false otherwise.
 * @return boolean
 */
export const isProductInArray = (product: Product, array: Product[]): boolean =>
	array.some((p) => p.id === product.id);
