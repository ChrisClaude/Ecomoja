import * as React from 'react';
import Slider from 'react-slick';

const settings = {
	infinite: true,
	speed: 2000,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5000,
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
				className='w-full h-45 lg:h-80 object-contain'
			/>
		</div>))}
	</Slider>
);

export default Carousel;
