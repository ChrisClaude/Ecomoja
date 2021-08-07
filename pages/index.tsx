import * as React from 'react';
import Layout from '@/components/Layout';
import Catalogue from '@/components/Catalogue';
import Carousel from '@/components/Carousel';

const Banner = () => (
	<section className="px-20 pb-5 pt-3 bg-white">
		<div className="row">
			<div className="col-md-9">
				<div className="d-md-flex">
					<div className="layout-spacer" />
					<div className="slideshow-container">
						<Carousel />
					</div>
				</div>
			</div>
		</div>

		<div className="row mt-4">
			<div className="col-md-9">
				<div className="d-md-flex">
					<div className="layout-spacer" />
					<div className="feature-brands-container">
						<h4 className="pb-2">Feature Brands</h4>
						<div className="feature-brands-swiper" />
					</div>
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
