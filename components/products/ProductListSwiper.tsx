import * as React from 'react';
import ProductItem from '@/components/products/ProductItem';
import { Product } from '@/types/Product';
import Slider from 'react-slick';
import { useWindowSize } from '@/hooks/custom';

type ProductListSwiperProps = {
	products: Product[];
};

const ProductListSwiper = ({ products }: ProductListSwiperProps) => {
	const {width: windowWidth} = useWindowSize();
	const [settings, setSettings] = React.useState({
		className: 'center',
		infinite: true,
		centerPadding: '60px',
		slidesToShow: 5,
		swipeToSlide: true,
	})
	
	React.useEffect(() => {
		if (windowWidth < 768) {
			setSettings({
				className: 'center',
				infinite: true,
				centerPadding: '60px',
				slidesToShow: 1,
				swipeToSlide: true,
			});
		}	
	}, [windowWidth]);

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
