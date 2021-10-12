import * as React from 'react';
import s from './SwiperContainer.module.scss';
import { default as cn } from 'classnames';
import { SwiperContext } from '../context';
import SwiperButton from '@/components/common/Swiper/SwiperButton';

type SwiperContainerProps = {
	totalSlideNumber: number;
};

const SwiperContainer = ({ totalSlideNumber }: SwiperContainerProps) => {
	const {
		nextSlide,
		prevSlide,
		slides,
		canTransition,
		dispatch,
		isActionButtonsDisabled,
	} = React.useContext(SwiperContext);

	React.useEffect(() => {
		dispatch({
			type: 'PREPEND_LAST_ELEMENT',
			payload: slides,
		});
		console.log('running');
	}, []);

	const handleNextSlide = () => {
		dispatch({
			type: 'TOGGLE_ACTION_BUTTONS',
		});
		dispatch({
			type: 'NEXT_SLIDE',
		});
	};

	const handlePrevSlide = () => {
		dispatch({
			type: 'TOGGLE_ACTION_BUTTONS',
		});
		dispatch({
			type: 'PREV_SLIDE',
		});
	};

	const handleOnTransitionEnd = (
		event: React.TransitionEvent<HTMLDivElement>,
	) => {
		console.log(event);
		dispatch({
			type: 'SET_CAN_TRANSITION',
			payload: false,
		});

		if (nextSlide) {
			dispatch({
				type: 'APPEND_FIRST_ELEMENT',
				payload: slides,
			});
		} else {
			dispatch({
				type: 'PREPEND_LAST_ELEMENT',
				payload: slides,
			});
		}

		dispatch({ type: 'RESET_SLIDE' });
		setTimeout(() => {
			dispatch({
				type: 'SET_CAN_TRANSITION',
				payload: true,
			});

			dispatch({
				type: 'TOGGLE_ACTION_BUTTONS',
			});
		}, 600);
	};

	return (
		<div className="h-full overflow-hidden relative">
			<div
				className={cn('h-full flex', {
					[s.w2xFull]: totalSlideNumber === 2,
					[s.w3xFull]: totalSlideNumber === 3,
					[s.w4xFull]: totalSlideNumber === 4,
					[s.w5xFull]: totalSlideNumber === 5,
					[s.w6xFull]: totalSlideNumber === 6,
					[s.translateX14]: nextSlide === false && prevSlide === false,
					[s.translateX0]: prevSlide,
					[s.translateX12]: nextSlide,
					'transition-transform': canTransition,
					'duration-500': canTransition,
				})}
				onTransitionEnd={handleOnTransitionEnd}
			>
				{slides}
			</div>
			<SwiperButton
				className="left-6"
				onClick={handlePrevSlide}
				disabled={isActionButtonsDisabled}
			>
				<span className="material-icons-round text-3xl bg-gray-300">
					chevron_left
				</span>
			</SwiperButton>
			<SwiperButton
				className="right-6"
				onClick={handleNextSlide}
				disabled={isActionButtonsDisabled}
			>
				<span className="material-icons-round text-3xl bg-gray-300">
					chevron_right
				</span>
			</SwiperButton>
		</div>
	);
};

export default SwiperContainer;
