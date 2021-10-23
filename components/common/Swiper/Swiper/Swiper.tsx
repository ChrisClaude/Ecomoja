import * as React from 'react';
import { JSX } from '@babel/types';
import SwiperContainer from '../SwiperContainer/SwiperContainer';
import { SwiperProvider } from '../context';

type SwiperProps = {
	children: JSX.Element[];
	visibleChildren?: number;
};

const Swiper = ({ children, visibleChildren }: SwiperProps) => (
	<SwiperProvider>
		<SwiperContainer autoplay visibleChildren={visibleChildren}>
			{children}
		</SwiperContainer>
	</SwiperProvider>
);

Swiper.defaultProps = {
	visibleChildren: 1,
};

export default Swiper;
