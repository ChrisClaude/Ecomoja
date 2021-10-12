import {
	SwiperAction,
	SwiperState,
} from '@/components/common/Swiper/SwiperTypes';
import { JSX } from '@babel/types';

const reducer = (state: SwiperState, action: SwiperAction): SwiperState => {
	const { type, payload } = action;

	let payload_;

	switch (type) {
		case 'NEXT_SLIDE':
			console.log('next slide button');
			return {
				...state,
				nextSlide: true,
				prevSlide: false,
			};
		case 'PREV_SLIDE':
			console.log('previous slide button');
			return {
				...state,
				prevSlide: true,
				nextSlide: false,
			};
		case 'TOGGLE_ACTION_BUTTONS':
			console.log(state.isActionButtonsDisabled);
			return {
				...state,
				isActionButtonsDisabled: !state.isActionButtonsDisabled,
			};
		case 'PREPEND_LAST_ELEMENT':
			console.log('prepend last element');
			payload_ = payload as JSX.Element[];
			const lastElement = payload_.pop();
			payload_.unshift(lastElement);

			return {
				...state,
				slides: payload_,
			};
		case 'APPEND_FIRST_ELEMENT':
			console.log('append first element');
			payload_ = payload as JSX.Element[];
			const firstElement = payload_.shift();
			payload_.push(firstElement);

			return {
				...state,
				slides: payload_,
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
	}
};

export default reducer;
