import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';

SwiperCore.use([Autoplay, Pagination, Navigation]);
// TODO: Update Carousel to use Image component from Next JS
const Carousel = () => (
	<div className="h-80 w-full">
		<Swiper
			spaceBetween={30}
			centeredSlides
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			pagination={{
				clickable: true,
			}}
			navigation
			className="mySwiper"
		>
			<SwiperSlide>
				<img
					src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
					alt="eco friendly product"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="https://images.unsplash.com/photo-1563391506244-af91a410fcc9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
					alt="eco friendly product"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="https://images.unsplash.com/photo-1564419320408-38e24e038739?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
					alt="eco friendly product"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="https://images.pexels.com/photos/4792666/pexels-photo-4792666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
					alt="eco friendly product"
				/>
			</SwiperSlide>
		</Swiper>
	</div>
);

export default Carousel;
