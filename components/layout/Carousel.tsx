import * as React from 'react';
import Slider from "react-slick";
import Image from 'next/image';

const settings = {
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
};

const Carousel = () => (
	<Slider {...settings}>
		<div className="">
			<Image
				src="/assets/HomePage_1.png"
				alt="eco friendly product"
				className="w-full h-full"
				width={100}
				height={100}
			/>
		</div>
		<div>
			<img
				src="/assets/HomePage_2.png"
				alt="eco friendly product"
				className="w-full h-full"
			/>
		</div>
		<div>
			<img
				src="https://images.unsplash.com/photo-1564419320408-38e24e038739?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
				alt="eco friendly product"
				className="w-full h-full"
			/>
		</div>
		<div>
			<img
				src="https://images.pexels.com/photos/4792666/pexels-photo-4792666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				alt="eco friendly product"
				className="w-full h-full"
			/>
		</div>
	</Slider>
);

export default Carousel;
