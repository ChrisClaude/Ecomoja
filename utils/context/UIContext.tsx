import * as React from 'react';
// eslint-disable-next-line import/named
import { UIState } from '@/types/AppTypes';
import reducer, { UIAction } from '@/utils/reducer/reducer';

type UIContextType = UIState & {
	dispatch: React.Dispatch<UIAction>;
};

export const UIContext = React.createContext<UIContextType>({
	isShopByCategoryCollapsed: true,
} as UIContextType);

export const UIContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [appState, dispatch] = React.useReducer(reducer, {
		isShopByCategoryCollapsed: true,
	});

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
