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

type CarouselProps = {
	slides: {id: string; image: string}[];
};

const Carousel = ({slides}: CarouselProps) => (
	<Slider {...settings}>
		{slides.map((sldImage) => (<div key={sldImage.id}>
			<img
				src={sldImage.image}
				alt='eco friendly product'
				className='w-full h-40 lg:h-80'
			/>
		</div>))}
	</Slider>
);

export default Carousel;
