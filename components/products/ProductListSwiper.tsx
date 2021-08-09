import React, { useState } from 'react';
import SwiperCore, { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductItem from '@/components/products/ProductItem';
import { Product } from '@/types/Product';

// TODO: Take this styling to the global scss file
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

type ProductListSwiperProps = {
	products: Product[];
};

SwiperCore.use([Virtual]);
const ProductListSwiper = ({ products }: ProductListSwiperProps) => {
	const [swiperRef, setSwiperRef] = useState(null);
	return (
		<div className="h-96">
			<Swiper
				onSwiper={setSwiperRef}
				slidesPerView={4}
				centeredSlides
				spaceBetween={30}
				pagination={{
					type: 'fraction',
				}}
				navigation
				virtual
				className="pt-2 pb-4"
			>
				{products.map((product) => (
					<SwiperSlide key={product.id} virtualIndex={product.id}>
						<ProductItem product={product} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default ProductListSwiper;
