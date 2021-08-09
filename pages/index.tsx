import * as React from 'react';
import Layout from '@/components/layout/Layout';
import Catalogue from '@/components/layout/Catalogue';
import Carousel from '@/components/layout/Carousel';

const Banner = () => (
	<section className="px-2 py-6 flex flex-col bg-white md:px-32 lg:px-44">
		<div className="flex w-full">
			<div className="w-56" />
			<div className="flex-1 ml-5 overflow-hidden">
				<div className="w-3/4">
					<Carousel />
				</div>
			</div>
		</div>

		<div className="flex w-full mt-8">
			<div className="w-56" />
			<div className="flex-1 ml-5 overflow-hidden">
				<div className="w-3/4">
					<h4 className="pb-2">Featured Brands</h4>
					<div className="w-full bg-gray-300 h-24" />
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
