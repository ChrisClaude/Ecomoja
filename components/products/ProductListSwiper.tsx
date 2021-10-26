import React, { useState } from 'react';
import SwiperCore, { Virtual } from 'swiper';
import ProductItem from '@/components/products/ProductItem';
import { Product } from '@/types/Product';
import Slider from 'react-slick';
// TODO: Take this styling to the global scss file
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

type ProductListSwiperProps = {
	products: Product[];
};

SwiperCore.use([Virtual]);
const ProductListSwiper = ({ products }: ProductListSwiperProps) => {
	/* eslint-disable no-unused-vars */
	const [swiperRef, setSwiperRef] = useState(null);
	const settings = {
		className: 'center',
		infinite: true,
		centerPadding: '60px',
		slidesToShow: 5,
		swipeToSlide: true,
		afterChange: function (index) {
			console.log(
				`Slider Changed to: ${index + 1}, background: #222; color: #bada55`,
			);
		},
	};

	return (
		<div className="h-96 pt-2 pb-4">
			<Slider {...settings}>
				{products.map((product) => (
					<div key={product.id}>
						<ProductItem product={product} />
					</div>
				))}
			</Slider>
		</div>
	);
};

export default ProductListSwiper;
