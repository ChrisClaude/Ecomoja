import * as React from 'react';
// eslint-disable-next-line import/named
import { AppState } from '@/types/AppTypes';
import reducer, { AppAction } from '@/utils/reducer/reducer';

type AppContextType = AppState & {
	dispatch: React.Dispatch<AppAction>;
};

export const AppContext = React.createContext<AppContextType>({
	isShopByCategoryCollapsed: true,
} as AppContextType);

export const AppContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [appState, dispatch] = React.useReducer(reducer, {
		isShopByCategoryCollapsed: true,
	});

	return (
		<AppContext.Provider
			value={{
				...appState,
				dispatch,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
