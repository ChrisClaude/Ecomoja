/* eslint-disable no-param-reassign */
import { CartItem, UIAction, UIState } from '@/types/AppTypes';
import { addNewCartItem, removeStateCartItem, storeCartItemsInLocalStorage } from '@/helpers/main';

const reducer = (state: UIState, action: UIAction): UIState => {
	let newCartItems: CartItem[] = [];

	switch (action.type) {
		case 'SET_CURRENT_USER':
			return {
				...state,
				user: action.payload,
			};
		case 'UPDATE_LAYOUT':
			return {
				...state,
				layoutProp: action.payload,
			};
		case 'REMOVE_CURRENT_USER':
			return {
				...state,
				user: null,
			};
		case 'INCREASE_PRODUCT_QUANTITY':
			state.cartItems.forEach((cartItem: CartItem) => {
				if (cartItem.id === action.payload.id) {
					cartItem.quantity = action.quantity;
				}
			});
			storeCartItemsInLocalStorage(state.cartItems);
			return {
				...state,
			};

		case 'DECREASE_PRODUCT_QUANTITY':
			state.cartItems.forEach((cartItem: CartItem) => {
				if (
					cartItem.id === action.payload.id &&
					cartItem.quantity !== 0
				) {
					cartItem.quantity = action.quantity;
				}
			});
			storeCartItemsInLocalStorage(state.cartItems);
			return {
				...state,
			};

		case 'SET_SHOP_BY_CATEGORY':
			return {
				...state,
				isShopByCategoryCollapsed: action.payload,
			};
		case 'PATCH_CART':
			return {
				...state,
				cartItems: [...action.payload],
			};
		case 'ADD_PRODUCT_TO_CART':
			// eslint-disable-next-line no-case-declarations
			const { cartItems } = state;
			newCartItems = addNewCartItem(cartItems, action.payload, action.authUser);
			return {
				...state,
				cartItems: newCartItems,
			};

		case 'ADD_PRODUCT_TO_WISHLIST':
			return {
				...state,
				wishList: [action.payload, ...state.wishList],
			};
		case 'REMOVE_PRODUCT_FROM_WISHLIST':
			return {
				...state,
				wishList: state.wishList.filter(item => item.id !== action.payload.id),
			};

		case 'REMOVE_PRODUCT_FROM_CART':
			// all cart items have the same id as their product

			return {
				...state,
				cartItems: removeStateCartItem(state.cartItems, action.payload.id),
			};

		case 'TOGGLE_MOBILE_MENU':
			return {
				...state,
				isMobileMenuOpen: !state.isMobileMenuOpen,
			};
		case 'TOGGLE_MODAL':
			return {
				...state,
				isModalOpen: !state.isModalOpen,
			};
		case 'RESET_MODAL':
			return {
				...state,
				isModalOpen: false,
			};
		case 'SET_LOADING':
			return {
				...state,
				loading: action.payload,
			};
		default:
			return { ...state };
	}
};

export default reducer;
