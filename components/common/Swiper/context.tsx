import * as React from 'react';
import { SwiperContextType, SwiperState } from './SwiperTypes';
import { default as swiperReducer } from './reducer';
import SwiperItem from './SwiperItem/SwiperItem';

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
		slides: [1, 2, 3, 4].map((n) => (
			<SwiperItem key={n}>
				<div className="w-full h-full flex items-center justify-center bg-green-300">
					<div>Slide {n}</div>
				</div>
			</SwiperItem>
		)),
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
