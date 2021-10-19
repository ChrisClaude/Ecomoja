import {
	SwiperAction,
	SwiperState,
} from '@/components/common/Swiper/SwiperTypes';
import { JSX } from '@babel/types';

const reducer = (state: SwiperState, action: SwiperAction): SwiperState => {
	const { type, payload } = action;

	let data;

	switch (type) {
		case 'NEXT_SLIDE':
			return {
				...state,
				nextSlide: true,
				prevSlide: false,
			};
		case 'PREV_SLIDE':
			return {
				...state,
				prevSlide: true,
				nextSlide: false,
			};
		case 'TOGGLE_ACTION_BUTTONS':
			return {
				...state,
				isActionButtonsDisabled: !state.isActionButtonsDisabled,
			};
		case 'INITIALIZE_SWIPER':
			return {
				...state,
				slides: payload as JSX.Element[],
				totalSlideNumber: (payload as JSX.Element[]).length,
			};
		case 'PREPEND_LAST_ELEMENT':
			data = payload as JSX.Element[];
			// eslint-disable-next-line no-case-declarations
			const lastElement = data.pop();
			data.unshift(lastElement);

			return {
				...state,
				slides: data,
			};
		case 'APPEND_FIRST_ELEMENT':
			data = payload as JSX.Element[];
			// eslint-disable-next-line no-case-declarations
			const firstElement = data.shift();
			data.push(firstElement);

			return {
				...state,
				slides: data,
			};
		case 'SET_CAN_TRANSITION':
			return {
				...state,
				canTransition: payload as boolean,
			};
		case 'RESET_SLIDE':
			return {
				...state,
				nextSlide: false,
				prevSlide: false,
			};
		default:
			return {
				...state,
			};
	}
};

export default reducer;
