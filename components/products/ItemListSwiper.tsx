import * as React from 'react';
import Slider from 'react-slick';
import { useWindowSize } from '@/hooks/custom';
import { Product } from '@/types/AppTypes';

type ItemListSwiperProps = {
	items: Product[] | any[];
	component: React.ComponentType<any>;
};

const ItemListSwiper = ({ items, component }: ItemListSwiperProps) => {
	const { width: windowWidth } = useWindowSize();
	const [settings, setSettings] = React.useState({
		className: 'center',
		infinite: false,
		centerPadding: '60px',
		slidesToShow: 5,
		swipeToSlide: true,
	});

	React.useEffect(() => {
		if (windowWidth < 768) {
			setSettings({
				className: 'center',
				infinite: true,
				centerPadding: '60px',
				slidesToShow: 2,
				swipeToSlide: true,
			});
		}
	}, [windowWidth]);

	const ItemComponent = component;

	return (
		<div className="flex flex-wrap justify-start">
			{items.map((item) => (
			<div key={item.id}>
				<ItemComponent item={item}/>
			</div>
			))}
		</div>
	);
};

export default ItemListSwiper;
