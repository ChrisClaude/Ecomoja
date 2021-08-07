import * as React from 'react';
import Layout from '@/components/layout/Layout';
import Catalogue from '@/components/layout/Catalogue';
import Carousel from '@/components/layout/Carousel';

const Banner = () => (
	<section className="px-2 py-8 flex flex-col bg-white md:px-32 lg:px-44">
		<div className="flex w-full">
			<div className="w-2/5" />
			<div className="w-3/5">
				<div className="w-full">
					<Carousel />
				</div>
			</div>
		</div>

		<div className="flex w-full">
			<div className="w-2/5" />
			<div className="w-3/5">
				<div className="w-full overflow-hidden">
					<h4 className="pb-2">Feature Brands</h4>
					<div className="feature-brands-swiper" />
				</div>
			</div>
		</div>
	</section>
);

export default function Home() {
	return (
		<Layout>
			<Banner />
			<Catalogue />
		</Layout>
	);
}
