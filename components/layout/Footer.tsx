import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
	<footer className="footer">
		<div className="bg-white">
			<div className="container py-4">
				<div className="d-flex flex-column justify-content-md-between flex-md-row">
					<div>
						<h5 className="text-md-left">Shop</h5>
						<ul className="list-style-none">
							<li className="mb-1 text-md-left">
								<a href="#">Daily Deals</a>
							</li>
							<li className="mb-1 text-md-left">
								<a href="#">App Only Deals</a>
							</li>
							<li className="mb-1 text-md-left">
								<a href="#">Clearance Sale</a>
							</li>
							<li className="  text-md-left">
								<a href="#">Gift Vouchers</a>
							</li>
						</ul>
					</div>
					<div className="mt-4 mt-md-0">
						<h5 className="text-md-left">Account</h5>
						<ul className="list-style-none">
							<li className="mb-1 text-md-left">
								<a href="#">My Account</a>
							</li>
							<li className="mb-1 text-md-left">
								<a href="#">Track Order</a>
							</li>
							<li className="mb-1 text-md-left">
								<a href="#">Exchanges & Returns</a>
							</li>
							<li className="mb-1 text-md-left">
								<a href="#"> Personal Details</a>
							</li>
							<li className="mb-1 text-md-left">
								<a href="#">Invoices</a>
							</li>
							<li className="text-md-left">
								<a href="#">Digital Library</a>
							</li>
						</ul>
					</div>
					<div className="mt-4 mt-md-0">
						<h5 className="text-md-left">Help</h5>
						<ul className="list-style-none">
							<li className="mb-1 text-md-left">
								<a href="#">Help</a>
							</li>
							<li className="mb-1 text-md-left">
								<a href="#">Contact Us</a>
							</li>
							<li className="mb-1 text-md-left">
								<a href="#">Submit an Idea</a>
							</li>
							<li className="mb-1 text-md-left">
								<a href="#">Suggest a Product</a>
							</li>
							<li className="mb-1 text-md-left">
								<a href="#">Shipping & Delivery</a>
							</li>
							<li className="mb-1 text-md-left">
								<a href="#">Eco Pickup Points</a>
							</li>
							<li className="mb-1 text-md-left">
								<a href="#">Exchanges & Returns</a>
							</li>
							<li className="text-md-left">
								<a href="#">Directions to Warehouse</a>
							</li>
						</ul>
					</div>
					<div className="mt-4 mt-md-0">
						<h5 className="text-md-left">Company</h5>
						<ul className="list-style-none">
							<li className="mb-1 text-md-left">
								<a href="#">About Us</a>
							</li>
							<li className="mb-1 text-md-left">
								<a href="#">Careers</a>
							</li>
							<li className="mb-1 text-md-left">
								<a href="#">Sell on Eco</a>
							</li>
							<li className="mb-1 text-md-left">
								<a href="#">Deliver for Eco</a>
							</li>
							<li className="mb-1 text-md-left">
								<a href="#">Press & News</a>
							</li>
							<li className="mb-1 text-md-left">
								<a href="#">Press & News</a>
							</li>
							<li className="mb-1 text-md-left">
								<a href="#">Competitions</a>
							</li>
							<li className="text-md-left">
								<a href="#">Terms & Conditions</a>
							</li>
						</ul>
					</div>
					<div className="social-icon-container mt-4 mt-md-0">
						<h5 className="text-md-left">Follow us</h5>
						<ul className="list-style-none d-flex justify-content-md-between m-0 pl-0 overflow-hidden">
							<li className="mr-2 mr-md-0">
								<a href="#" className="inline-block w-8">
									<FontAwesomeIcon icon={['fab', 'facebook']} />
								</a>
							</li>
							<li className="mr-2 mr-md-0">
								<a href="#" className="inline-block w-8">
									<FontAwesomeIcon icon={['fab', 'twitter-square']} />
								</a>
							</li>
							<li className="mr-2 mr-md-0">
								<a href="#" className="inline-block w-8">
									<FontAwesomeIcon icon={['fab', 'instagram-square']} />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div className="bg-primary text-white">
			<div className="container py-4  text-md-left">
				&copy; Crazee-evironmental 2021
			</div>
		</div>
	</footer>
);

export default Footer;
