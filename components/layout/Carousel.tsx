import * as React from 'react';
import { Swiper } from '@/components/common';
import SwiperItem from '@/components/common/Swiper/SwiperItem';

// TODO: Update Carousel to use Image component from Next JS
const Carousel = () => (
	<Swiper visibleChildren={1}>
		<SwiperItem>
			<img
				src="/assets/HomePage_1.png"
				alt="eco friendly product"
				className="w-full h-full"
			/>
		</SwiperItem>
		<SwiperItem>
			<img
				src="/assets/HomePage_2.png"
				alt="eco friendly product"
				className="w-full h-full"
			/>
		</SwiperItem>
		<SwiperItem>
			<img
				src="https://images.unsplash.com/photo-1564419320408-38e24e038739?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
				alt="eco friendly product"
				className="w-full h-full"
			/>
		</SwiperItem>
		<SwiperItem>
			<img
				src="https://images.pexels.com/photos/4792666/pexels-photo-4792666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				alt="eco friendly product"
				className="w-full h-full"
			/>
		</SwiperItem>
	</Swiper>
);

export default Carousel;
