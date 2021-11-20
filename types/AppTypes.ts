import { Product } from './Product';

export type User = {
	username: string;
	firstName: string;
	lastName: string;
};

export type UIState = {
	user: User | null;
	isShopByCategoryCollapsed: boolean;
	cartItems: CartItem[];
	wishList?: Product[];
	isModalOpen: boolean;
};

export type CartItem = {
	/** CartNavBarView Items are expected to have the same id as the one of its product instance */
	id: number;
	/** This is an array of the instance(s) of the same product */
	product: Product;
	productInstances: number;
};

type IncreaseProductQuantity = {
	type: 'INCREASE_PRODUCT_QUANTITY';
	payload: Product;
};

type DecreaseProductQuantity = {
	type: 'DECREASE_PRODUCT_QUANTITY';
	payload: Product;
};

type PatchCart = {
	type: 'PATCH_CART';
	payload: CartItem[];
};

type AddProductToCart = {
	type: 'ADD_PRODUCT_TO_CART';
	payload: Product;
};

type RemoveProductFromCart = {
	type: 'REMOVE_PRODUCT_FROM_CART';
	payload: Product;
};

type AddProductToWishList = {
	type: 'ADD_PRODUCT_TO_WISHLIST';
	payload: Product;
};

type RemoveProductToWishList = {
	type: 'REMOVE_PRODUCT_FROM_WISHLIST';
	payload: Product;
};

type SetShopByCategory = {
	type: 'SET_SHOP_BY_CATEGORY';
	payload: boolean;
};

type ToggleModal = {
	type: 'TOGGLE_MODAL';
};

type resetModal = {
	type: 'RESET_MODAL';
};

type setCurrentUser = {
	type: 'SET_CURRENT_USER';
	payload: User;
};

type removeCurrentUser = {
	type: 'REMOVE_CURRENT_USER';
};

export type UIAction =
	| AddProductToCart
	| AddProductToWishList
	| SetShopByCategory
	| RemoveProductToWishList
	| RemoveProductFromCart
	| PatchCart
	| IncreaseProductQuantity
	| DecreaseProductQuantity
	| ToggleModal
	| resetModal
	| setCurrentUser
	| removeCurrentUser;
