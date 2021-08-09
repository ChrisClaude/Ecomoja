import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
	<footer className="footer">
		<div className="px-2 py-4 bg-white md:px-32 lg:px-44">
			<div className="flex flex-col lg:justify-between lg:flex-row">
				<div>
					<h5 className="mb-2 font-semibold">Shop</h5>
					<ul>
						<li className="mb-1">
							<a href="#">Daily Deals</a>
						</li>
						<li className="mb-1">
							<a href="#">App Only Deals</a>
						</li>
						<li className="mb-1">
							<a href="#">Clearance Sale</a>
						</li>
						<li>
							<a href="#">Gift Vouchers</a>
						</li>
					</ul>
				</div>
				<div className="mt-4 lg:mt-0">
					<h5 className="mb-2 font-semibold">Account</h5>
					<ul>
						<li className="mb-1">
							<a href="#">My Account</a>
						</li>
						<li className="mb-1">
							<a href="#">Track Order</a>
						</li>
						<li className="mb-1">
							<a href="#">Exchanges & Returns</a>
						</li>
						<li className="mb-1">
							<a href="#"> Personal Details</a>
						</li>
						<li className="mb-1">
							<a href="#">Invoices</a>
						</li>
						<li className="mb-2">
							<a href="#">Digital Library</a>
						</li>
					</ul>
				</div>
				<div className="mt-4 lg:mt-0">
					<h5 className="mb-2 font-semibold">Help</h5>
					<ul>
						<li className="mb-1">
							<a href="#">Help</a>
						</li>
						<li className="mb-1">
							<a href="#">Contact Us</a>
						</li>
						<li className="mb-1">
							<a href="#">Submit an Idea</a>
						</li>
						<li className="mb-1">
							<a href="#">Suggest a Product</a>
						</li>
						<li className="mb-1">
							<a href="#">Shipping & Delivery</a>
						</li>
						<li className="mb-1">
							<a href="#">Eco Pickup Points</a>
						</li>
						<li className="mb-1">
							<a href="#">Exchanges & Returns</a>
						</li>
						<li className="mb-2">
							<a href="#">Directions to Warehouse</a>
						</li>
					</ul>
				</div>
				<div className="mt-4 lg:mt-0">
					<h5 className="mb-2 font-semibold">Company</h5>
					<ul>
						<li className="mb-1">
							<a href="#">About Us</a>
						</li>
						<li className="mb-1">
							<a href="#">Careers</a>
						</li>
						<li className="mb-1">
							<a href="#">Sell on Eco</a>
						</li>
						<li className="mb-1">
							<a href="#">Deliver for Eco</a>
						</li>
						<li className="mb-1">
							<a href="#">Press & News</a>
						</li>
						<li className="mb-1">
							<a href="#">Press & News</a>
						</li>
						<li className="mb-1">
							<a href="#">Competitions</a>
						</li>
						<li className="mb-2">
							<a href="#">Terms & Conditions</a>
						</li>
					</ul>
				</div>
				<div className="overflow-hidden mt-4 md:w-28 lg:mt-0">
					<h5 className="mb-2 font-semibold">Follow us</h5>
					<ul className="list-style-none d-flex justify-content-md-between m-0 pl-0 overflow-hidden">
						<li className="mr-2 mr-md-0">
							<a href="#" className="inline-block w-8 text-3xl">
								<FontAwesomeIcon icon={['fab', 'facebook']} />
							</a>
						</li>
						<li className="mr-2 mr-md-0">
							<a href="#" className="inline-block w-8 text-3xl">
								<FontAwesomeIcon icon={['fab', 'twitter-square']} />
							</a>
						</li>
						<li className="mr-2 mr-md-0">
							<a href="#" className="inline-block w-8 text-3xl">
								<FontAwesomeIcon icon={['fab', 'instagram-square']} />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div className="bg-primary text-white px-2 py-4 md:px-32 lg:px-44">
			<div>&copy; Crazee-evironmental 2021</div>
		</div>
	</footer>
);

export default Footer;
