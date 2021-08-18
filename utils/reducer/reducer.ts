// eslint-disable-next-line import/named
import { AppState } from '@/types/AppTypes';

export type AppAction = {
	type: 'SET_SHOP_BY_CATEGORY';
	payload: boolean;
};

const reducer = (state: AppState, action: AppAction): AppState => {
	if (action.type === 'SET_SHOP_BY_CATEGORY') {
		return {
			...state,
			isShopByCategoryCollapsed: action.payload,
		};
	}

	return { ...state };
};

export default reducer;
