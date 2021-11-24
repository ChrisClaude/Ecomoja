import * as React from 'react';
import Slider from 'react-slick';

const settings = {
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
};

const slideImages: { id: string, src: string }[] = [
	{
		id: 'home-page1',
		src: '/assets/HomePage_1.png',
	},
	{
		id: 'home-pag2',
		src: '/assets/HomePage_2.png',
	},
	{
		id: 'home-page3',
		src: 'https://images.unsplash.com/photo-1564419320408-38e24e038739?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
	},
	{
		id: 'home-page4',
		src: 'https://images.pexels.com/photos/4792666/pexels-photo-4792666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
	},
];

const Carousel = () => (
	<Slider {...settings}>
		{slideImages.map((sldImage) => (<div key={sldImage.id}>
			<img
				src={sldImage.src}
				alt='eco friendly product'
				className='w-full h-40 lg:h-80'
			/>
		</div>))}
	</Slider>
);

export default Carousel;
