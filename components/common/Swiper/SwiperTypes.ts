import * as React from 'react';
import { JSX } from '@babel/types';

export type SwiperState = {
	nextSlide: boolean;
	prevSlide: boolean;
	isActionButtonsDisabled: boolean;
	canTransition: boolean;
	slides: JSX.Element[];
	totalSlideNumber: number;
};

type NextSlide = {
	type: 'NEXT_SLIDE';
	payload?: {};
};

type PrevSlide = {
	type: 'PREV_SLIDE';
	payload?: {};
};

type ToggleActionButtons = {
	type: 'TOGGLE_ACTION_BUTTONS';
	payload?: {};
};

type ResetSlide = {
	type: 'RESET_SLIDE';
	payload?: {};
};

type InitializeSwiper = {
	type: 'INITIALIZE_SWIPER';
	payload: JSX.Element[];
};

type PrependLastElement = {
	type: 'PREPEND_LAST_ELEMENT';
	payload: JSX.Element[];
};

type AppendLastElement = {
	type: 'APPEND_FIRST_ELEMENT';
	payload: JSX.Element[];
};

type SetCanTransition = {
	type: 'SET_CAN_TRANSITION';
	payload: boolean;
};

export type SwiperAction =
	| NextSlide
	| PrevSlide
	| ToggleActionButtons
	| InitializeSwiper
	| ResetSlide
	| PrependLastElement
	| AppendLastElement
	| SetCanTransition;

export type SwiperContextType = SwiperState & {
	dispatch: React.Dispatch<SwiperAction>;
};
