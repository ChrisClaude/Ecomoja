import * as React from 'react';
import Catalogue from '@/components/layout/Catalogue';
import Carousel from '@/components/layout/Carousel';
import Head from 'next/head';
import { UIContext } from '@/api/context/UIContext';
import { Swiper } from '@/components/common';

const Banner = () => (
	<section className="px-2 py-6 hidden flex-col bg-white md:px-32 lg:px-16 lg:flex">
		<div className="flex w-full">
			<div className="w-56" />
			<div className="flex-1 ml-5 overflow-hidden">
				<div className="w-3/4 h-80">
					{/*<Carousel />*/}
					<Swiper />
				</div>
			</div>
		</div>

		<div className="flex w-full mt-8">
			<div className="w-56" />
			<div className="flex-1 ml-5 overflow-hidden">
				<div className="w-3/4">
					<h4 className="pb-2">Featured Partners</h4>
					<div className="w-full bg-gray-300 h-24" />
				</div>
			</div>
		</div>
	</section>
);

export default function Home() {
	const { dispatch } = React.useContext(UIContext);

	React.useEffect(
		() =>
			dispatch({
				type: 'SET_SHOP_BY_CATEGORY',
				payload: true,
			}),
		[dispatch],
	);

	return (
		<>
			<Head>
				<title>Ecomoja | Home</title>
			</Head>
			<Banner />
			<Catalogue />
		</>
	);
}
