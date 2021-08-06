import * as React from 'react';
import Layout from '@/components/Layout';
import Catalogue from '@/components/Catalogue';

const Banner = () => (
	<section className="px-20 pb-5 pt-3 bg-white">
		<div className="row">
			<div className="col-md-9">
				<div className="d-md-flex">
					<div className="layout-spacer" />
					<div className="slideshow-container">
						<div className="slideshow-inner-container">
							<div className="slides">
								<img
									src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
									alt="eco friendly product"
								/>
							</div>

							<div className="slides">
								<img
									src="https://images.unsplash.com/photo-1563391506244-af91a410fcc9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
									alt="eco friendly product"
								/>
							</div>

							<div className="slides">
								<img
									src="https://images.unsplash.com/photo-1564419320408-38e24e038739?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
									alt="eco friendly product"
								/>
							</div>
							<div className="slides">
								<img
									src="https://images.pexels.com/photos/4792666/pexels-photo-4792666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
									alt="eco friendly product"
								/>
							</div>
						</div>
						<a className="prev">&#10094;</a>
						<a className="next">&#10095;</a>
						{/* TODO: Add dot click action */}
						<div className="dots-container">
							<div className="dots active" />
							<div className="dots" />
							<div className="dots" />
							<div className="dots" />
						</div>
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
