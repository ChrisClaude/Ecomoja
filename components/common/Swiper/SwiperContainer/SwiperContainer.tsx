import * as React from 'react';
import { JSX } from '@babel/types';
import { default as cn } from 'classnames';
import s from './SwiperContainer.module.scss';
import { SwiperContext } from '../context';
import SwiperButton from '../SwiperButton';

type SwiperContainerProps = {
	children: JSX.Element[];
	autoplay?: boolean;
	visibleChildren?: number;
};

const SwiperContainer = ({
	children,
	autoplay,
	visibleChildren,
}: SwiperContainerProps) => {
	const {
		nextSlide,
		prevSlide,
		slides,
		canTransition,
		dispatch,
		isActionButtonsDisabled,
		totalSlideNumber,
	} = React.useContext(SwiperContext);

	const handleOnTransitionEnd = () => {
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

	const handleNextSlide = React.useCallback(() => {
		dispatch({
			type: 'TOGGLE_ACTION_BUTTONS',
		});
		dispatch({
			type: 'NEXT_SLIDE',
		});
	}, [dispatch]);

	const handlePrevSlide = () => {
		dispatch({
			type: 'TOGGLE_ACTION_BUTTONS',
		});
		dispatch({
			type: 'PREV_SLIDE',
		});
	};

	// eslint-disable-next-line consistent-return
	React.useEffect(() => {
		if (autoplay) {
			const delayTime = 2500;
			const intervalId = setInterval(() => {
				// eslint-disable-next-line no-console
				console.log('running autoplay');
				handleNextSlide();
			}, delayTime);
			// eslint-disable-next-line no-console
			console.log('running outside autoplay setInterval');
			return () => clearInterval(intervalId);
		}
	}, [autoplay]);

	React.useEffect(() => {
		dispatch({
			type: 'INITIALIZE_SWIPER',
			payload: [...children],
		});
	}, [children]);

	React.useEffect(() => {
		if (slides.length > 0) {
			dispatch({
				type: 'PREPEND_LAST_ELEMENT',
				payload: slides,
			});
		}
	}, []);

	return (
		<div className="h-full overflow-hidden relative">
			<div
				className={cn('h-full flex', {
					[s.w2xFull]: totalSlideNumber / visibleChildren === 2,
					[s.w3xFull]: totalSlideNumber / visibleChildren === 3,
					[s.w4xFull]: totalSlideNumber / visibleChildren === 4,
					[s.w5xFull]: totalSlideNumber / visibleChildren === 5,
					[s.w6xFull]: totalSlideNumber / visibleChildren === 6,
					[s.translateX1d4]:
						totalSlideNumber === 4 &&
						nextSlide === false &&
						prevSlide === false,
					[s.translateX0]: prevSlide,
					[s.translateX1d2]: totalSlideNumber === 4 && nextSlide,
					[s.translateX1d5]:
						totalSlideNumber === 5 &&
						nextSlide === false &&
						prevSlide === false,
					[s.translateX2d5]: totalSlideNumber === 5 && nextSlide,
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

SwiperContainer.defaultProps = {
	autoplay: false,
	visibleChildren: 1,
};

// SwiperContainer.whyDidYouRender = true;

export default SwiperContainer;
