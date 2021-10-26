import * as React from 'react';
import ProductItem from '@/components/products/ProductItem';
import { Product } from '@/types/Product';
import Slider from 'react-slick';

type ProductListSwiperProps = {
	products: Product[];
};

const ProductListSwiper = ({ products }: ProductListSwiperProps) => {
	const settings = {
		className: 'center',
		infinite: true,
		centerPadding: '60px',
		slidesToShow: 5,
		swipeToSlide: true,
	};

	return (
		<div className="h-96">
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
