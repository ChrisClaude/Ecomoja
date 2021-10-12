import * as React from 'react';
import SwiperContainer from '../SwiperContainer/SwiperContainer';
import { SwiperProvider } from '@/components/common/Swiper/context';

const Swiper = () => {
	return (
		<SwiperProvider>
			<SwiperContainer totalSlideNumber={4} />
		</SwiperProvider>
	);
};

export default Swiper;
