// eslint-disable-next-line import/named
import { UIState } from '@/types/AppTypes';

export type UIAction = {
	type: 'SET_SHOP_BY_CATEGORY';
	payload: boolean;
};

const reducer = (state: UIState, action: UIAction): UIState => {
	if (action.type === 'SET_SHOP_BY_CATEGORY') {
		return {
			...state,
			isShopByCategoryCollapsed: action.payload,
		};
	}

	return { ...state };
};

export default reducer;
