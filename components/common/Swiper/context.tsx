import * as React from 'react';
import { SwiperContextType, SwiperState } from './SwiperTypes';
import { default as swiperReducer } from './reducer';

export const SwiperContext = React.createContext<SwiperContextType>(
	{} as SwiperContextType,
);

SwiperContext.displayName = 'SwiperContext';

export const SwiperProvider = ({ children }: { children: React.ReactNode }) => {
	const initialSwiperState: SwiperState = {
		nextSlide: false,
		prevSlide: false,
		canTransition: true,
		isActionButtonsDisabled: false,
		slides: [],
	};

	const [swiperState, dispatch] = React.useReducer(
		swiperReducer,
		initialSwiperState,
	);

	return (
		<SwiperContext.Provider
			value={{
				...swiperState,
				dispatch,
			}}
		>
			{children}
		</SwiperContext.Provider>
	);
};
