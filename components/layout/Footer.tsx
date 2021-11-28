import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
	<footer className="footer">
		<div className="bg-footer-img bg-center bg-cover px-2 py-6 bg-white md:px-32 lg:px-44">
			<div className="flex flex-col lg:justify-between lg:flex-row">
				<div>
					<h5 className="mb-2 font-semibold">Company</h5>
					<ul>
						<li className="mb-1">
							<a href="#">About Us</a>
						</li>
						<li className="mb-1">
						</li>
						<li className="mb-1">
							<a href="#">Deliver for Ecomoja</a>
						</li>
						<li className="mb-2">
							<a href="#">Terms & Conditions</a>
						</li>
						<li className="mb-2">
							<a href="#">Privacy</a>
						</li>
					</ul>
				</div>

				<div className="mt-4 lg:mt-0">
					<h5 className="mb-2 font-semibold">Account</h5>
					<ul>
						<li className="mb-1">
							<a href="#">My Ecomoja</a>
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
					</ul>
				</div>
				<div className="mt-4 lg:mt-0">
					<h5 className="mb-2 font-semibold">Help</h5>
					<ul>
						<li className="mb-1">
							<a href="#">Contact Us</a>
						</li>
						<li className="mb-1">
							<a href="#">Recommendation</a>
						</li>
						<li className="mb-1">
							<a href="#">Shipping & Delivery</a>
						</li>
					</ul>
				</div>
				<div className="overflow-hidden mt-4 md:w-28 lg:mt-0">
					<h5 className="mb-2 font-semibold">Follow us</h5>
					<ul className="flex lg:justify-between m-0 pl-0 overflow-hidden">
						<li className="mr-2 mr-md-0">
							<a href="#" className="inline-block w-8 text-3xl">
								<FontAwesomeIcon icon={['fab', 'facebook']} />
							</a>
						</li>
						<li className="mr-2 mr-md-0">
							<a href="#" className="inline-block w-8 text-3xl">
								<FontAwesomeIcon icon={['fab', 'instagram-square']} />
							</a>
						</li>
						<li className="mr-2 mr-md-0">
							<a href="#" className="inline-block w-8 text-3xl">
								<FontAwesomeIcon icon={['fab', 'twitter-square']} />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div className="bg-white px-2 py-4 md:px-32 lg:px-44">
			<p className="text-center font-semibold text-base">
				&copy; Craze-evironmental 2021
			</p>
		</div>
	</footer>
);

export default Footer;
