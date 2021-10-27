import * as React from 'react';
import Image from 'next/image';
import Carousel from '@/components/layout/Carousel';

const HomeBanner = () => {
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
		<section className="px-2 py-6 hidden flex-col bg-white md:px-32 lg:px-16 lg:flex">
			<div className="flex w-full">
				<div className="w-56" />
				<div className="flex-1 ml-5 overflow-hidden">
					<div className="w-3/4 h-80">
						<Carousel />
					</div>
				</div>
			</div>

			<div className="flex w-full mt-8">
				<div className="w-56" />
				<div className="flex-1 ml-5 overflow-hidden">
					<div className="w-3/4">
						<h4 className="pb-2">Featured Partners</h4>
						<div className="flex justify-between w-full h-24">
							{partners.map((p) => (
								<div key={p.id}>
									<Image
										loader={() => p.src}
										width={150}
										height={150}
										src={p.src}
										alt={p.description}
										objectFit="cover"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default HomeBanner;
