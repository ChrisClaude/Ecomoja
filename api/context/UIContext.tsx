import * as React from 'react';
// eslint-disable-next-line import/named
import { UIState, UIAction } from '@/types/AppTypes';
import reducer from '../reducer/reducer';

type UIContextType = UIState & {
	dispatch: React.Dispatch<UIAction>;
};

const initializeUIState: UIState = {
	isShopByCategoryCollapsed: true,
	cartItems: [],
	isModalOpen: false,
	user: null,
};

export const UIContext = React.createContext<UIContextType>(
	initializeUIState as UIContextType,
);

UIContext.displayName = 'UIContext';

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
	const [appState, dispatch] = React.useReducer(reducer, initializeUIState);

	return (
		<UIContext.Provider
			value={{
				...appState,
				dispatch,
			}}
		>
			{children}
		</UIContext.Provider>
	);
};
