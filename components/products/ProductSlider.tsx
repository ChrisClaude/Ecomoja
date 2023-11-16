import * as React from 'react';
import Slider from 'react-slick';
import { useWindowSize } from '@/hooks/custom';
import { Product } from '@/types/AppTypes';

type ProductSlderProps = {
	items: Product[] | any[];
	component: React.ComponentType<any>;
};

const ProductSlider = ({ items, component }: ProductSlderProps) => {
	const { width: windowWidth } = useWindowSize();
	const [settings, setSettings] = React.useState({
		className: 'center',
		infinite: true,
		centerPadding: '60px',
		slidesToShow: 6,
		swipeToSlide: true,
	});

	React.useEffect(() => {
		if (windowWidth < 768) {
			setSettings({
				className: 'center',
				infinite: true,
				centerPadding: '50px',
				slidesToShow: 2,
				swipeToSlide: true,
			});
		}
        if (windowWidth >= 768) {
			setSettings({
				className: 'center',
				infinite: true,
				centerPadding: '60px',
				slidesToShow: 4,
				swipeToSlide: true,
			});
		}
        if (windowWidth >= 993) {
			setSettings({
				className: 'center',
				infinite: true,
				centerPadding: '60px',
				slidesToShow: 5,
				swipeToSlide: true,
			});
		}
        if (windowWidth >= 1190) {
			setSettings({
				className: 'center',
				infinite: true,
				centerPadding: '60px',
				slidesToShow: 6,
				swipeToSlide: true,
			});
		}
        
	}, [windowWidth]);

	const ItemComponent = component;

	return (
		<div>
			<Slider {...settings}>
				{items.map((item) => (
					<div key={item.id} className='mx-4'>
						<ItemComponent item={item} />
					</div>
				))}
			</Slider>
		</div>
	);
};

export default ProductSlider;