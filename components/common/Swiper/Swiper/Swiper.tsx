import * as React from 'react';
import { JSX } from '@babel/types';
import SwiperContainer from '../SwiperContainer/SwiperContainer';
import { SwiperProvider } from '../context';

type SwiperProps = {
	children: JSX.Element[];
};

const Swiper = ({ children }: SwiperProps) => (
	<SwiperProvider>
		<SwiperContainer autoplay>{children}</SwiperContainer>
	</SwiperProvider>
);

export default Swiper;
