import * as React from 'react';
// eslint-disable-next-line import/no-cycle
import {User as AuthUser} from '@/hooks/context/AuthContext';


export type User = {
	username: string;
	firstName: string;
	lastName: string;
};

export type UserLogin = {
	identifier: string;
	password: string;
}

export type UIState = {
	user?: User;
	isShopByCategoryCollapsed: boolean;
	cartItems: CartItem[];
	wishList?: Product[];
	isModalOpen: boolean;
	isMobileMenuOpen: boolean;
	layoutProp: LayoutProp;
	loading: boolean;
};

export type LayoutProp = {
	children: React.ReactNode;
	showFooter?: boolean;
	showHeader?: boolean;
};

export type BikeCartItem = {
	/** id: Items are expected to have the same id as the one of its product instance */
	id: number;
	/** This is an array of the instance(s) of the same product */
	bike: Bike;
};

export type CartItem = {
	/** id: Items are expected to have the same id as the one of its product instance */
	id: number;
	Users_permissions_user?: AuthUser;
	product: Product;
	quantity: number;
};

type IncreaseProductQuantity = {
	type: 'INCREASE_PRODUCT_QUANTITY';
	payload: Product;
	quantity: number;
};

type DecreaseProductQuantity = {
	type: 'DECREASE_PRODUCT_QUANTITY';
	payload: Product;
	quantity: number;
};

type PatchCart = {
	type: 'PATCH_CART';
	payload: CartItem[];
};

type AddBikeToCart = {
	type: 'ADD_BIKE_TO_CART';
	payload: Bike;
};

type AddProductToCart = {
	type: 'ADD_PRODUCT_TO_CART';
	payload: Product;
	authUser: AuthUser;
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

type ToggleMobileMenu = {
	type: 'TOGGLE_MOBILE_MENU';
};

type ToggleModal = {
	type: 'TOGGLE_MODAL';
};

type ResetModal = {
	type: 'RESET_MODAL';
};

type SetCurrentUser = {
	type: 'SET_CURRENT_USER';
	payload: User;
};

export type UIAction =
	| AddBikeToCart
	| AddProductToCart
	| AddProductToWishList
	| SetShopByCategory
	| RemoveProductToWishList
	| RemoveProductFromCart
	| PatchCart
	| IncreaseProductQuantity
	| DecreaseProductQuantity
	| ToggleMobileMenu
	| ToggleModal
	| ResetModal
	| SetCurrentUser
	| RemoveCurrentUser
	| UpdateLayout
	| UpdateSpinnerState;

type UpdateSpinnerState = {
	type: 'SET_LOADING';
	payload: boolean;
};

type RemoveCurrentUser = {
	type: 'REMOVE_CURRENT_USER';
};

type UpdateLayout = {
	type: 'UPDATE_LAYOUT';
	payload: LayoutProp;
};

type GetCustomTypeName = {
	getCustomTypeName: () => string;
};

export type Product = {
	id: number;
	name: string;
	image: string;
	description: string;
	currentPrice: number;
	oldPrice?: number;
	rating?: number;
	numberOfVotes?: number;
	categories: string[];
	vendor: string;
	isInStock: boolean;
	isFreeForDelivery?: boolean;
	deliveryFees?: number;
};

export type Bike = {
	id: number;
	name: string;
	image: string;
};
