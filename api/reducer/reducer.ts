import { CartItem, UIAction, UIState } from '@/types/AppTypes';
import { updateCartItems } from '@/helpers/main';

const reducer = (state: UIState, action: UIAction): UIState => {
	let newCartItems: CartItem[];

	switch (action.type) {
		case 'SET_CURRENT_USER':
			return {
				...state,
				user: action.payload,
			};
		case 'REMOVE_CURRENT_USER':
			return {
				...state,
				user: null,
			};
		case 'INCREASE_PRODUCT_QUANTITY':
			state.cartItems.forEach((cartItem: CartItem) => {
				if (cartItem.id === action.payload.id) {
					cartItem.productInstances += 1;
				}
			});

			return {
				...state,
			};

		case 'DECREASE_PRODUCT_QUANTITY':
			state.cartItems.forEach((cartItem: CartItem) => {
				if (
					cartItem.id === action.payload.id &&
					cartItem.productInstances !== 0
				) {
					cartItem.productInstances -= 1;
				}
			});

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

			newCartItems = updateCartItems(cartItems, action.payload);
			return {
				...state,
				cartItems: newCartItems,
			};

		case 'REMOVE_PRODUCT_FROM_CART':
			// we're comparing carItem's id (item.id) to product's id (action.payload.id)
			// because a cartItem has the same id as the product it contains
			newCartItems = state.cartItems.filter(
				(item) => item.id !== action.payload.id,
			);
			return {
				...state,
				cartItems: newCartItems,
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
		default:
			return { ...state };
	}
};

export default reducer;
