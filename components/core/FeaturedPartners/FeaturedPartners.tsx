import * as React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { useWindowSize } from '@/hooks/custom';

const FeaturedPartners = () => {
	const {width: windowWidth} = useWindowSize();
	const [settings, setSettings] = React.useState({
		className: 'center',
		infinite: true,
		centerPadding: '60px',
		slidesToShow: 3,
		swipeToSlide: true,
		autoPlay: true,
		autoplaySpeed: 2000,
		speed: 500,
		slidesToScroll: 1,
	});

	React.useEffect(() => {
		if (windowWidth < 768) {
			setSettings({
				className: 'center',
				infinite: true,
				centerPadding: '60px',
				slidesToShow: 2,
				swipeToSlide: true,
				autoPlay: true,
				autoplaySpeed: 2000,
				speed: 500,
				slidesToScroll: 1,
			});
		}
	}, [windowWidth]);

	const partners: {
		id: number;
		name: string;
		description: string;
		src: string;
	}[] = [
		{
			id: 1,
			name: 'Partner 1',
			description: 'Partner 1',
			src: '/assets/partners/Partner_1.jpg',
		},
		{
			id: 2,
			name: 'Partner 2',
			description: 'Partner 2',
			src: '/assets/partners/Partner_2.jpg',
		},
		{
			id: 3,
			name: 'Partner 3',
			description: 'Partner 3',
			src: '/assets/partners/Partner_3.jpg',
		},
		{
			id: 4,
			name: 'Partner 4',
			description: 'Partner 4',
			src: '/assets/partners/Partner_4.jpg',
		},
		{
			id: 5,
			name: 'Partner 5',
			description: 'Partner 5',
			src: '/assets/partners/Partner_5.jpg',
		},
	];

	return (
		<div className='w-full bg-white py-8 px-4'>
			<h3 className='pb-2 text-center mb-4'>Featured Partners</h3>
			<div className='w-full flex justify-center overflow-hidden'>
				<div className='w-4/5 lg:w-3/5'>
					<Slider {...settings}>
						{partners.map((p) => (
							<div key={p.id} className='lg:mr-6 lg:last:mr-0'>
								<Image
									loader={() => p.src}
									width={150}
									height={130}
									src={p.src}
									alt={p.description}
									objectFit='cover'
								/>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</div>);
};

export default FeaturedPartners;
