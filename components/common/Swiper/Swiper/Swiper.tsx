import * as React from 'react';
import SwiperContainer from '../SwiperContainer/SwiperContainer';
import { SwiperProvider } from '../context';
import SwiperItem from '@/components/common/Swiper/SwiperItem/SwiperItem';

type SwiperProps = {
	children: JSX.Element[];
};

const Swiper = ({ children }: SwiperProps) => {
	return (
		<SwiperProvider>
			<SwiperContainer autoplay>{children}</SwiperContainer>
		</SwiperProvider>
	);
};

export default Swiper;
