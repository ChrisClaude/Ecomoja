import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Header = () => (
	<header>
		<Head>
			<title>Ecomoja</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<nav
			id="top_page"
			className="navbar navbar-expand-lg navbar-light bg-light accounts"
		>
			<div className="container">
				<div className="row w-100 no-gutters">
					<div className="col-1 d-flex align-items-center d-sm-none">
						<button
							type="button"
							className="hamburger-menu btn d-flex w-auto h-100 flex-column align-items-center"
							id="toggle-mobile-nav"
						>
							<span className="bar1" />
							<span className="bar2" />
							<span className="bar3" />
						</button>
					</div>

					<div className="col-8 col-sm-6 col-md-6 d-flex flex-row justify-content-center justify-content-sm-start align-items-sm-center px-0">
						<Link href="/">
							<a>
								<img
									className="logo mr-3"
									src="https://crazeenvironmental.com/wp-content/uploads/2020/10/cropped-Web-Grey-logo-with-WB-160x101.png"
									alt="logo"
								/>
							</a>
						</Link>

						<ul className="d-none d-sm-flex list-group list-group-horizontal-md align-items-sm-center">
							<li className="list-group-item bg-transparent border-0 border-right">
								<a href="#" className="py-1 px-3">
									Help
								</a>
							</li>
							<li className="list-group-item bg-transparent border-0 p-0 d-sm-none d-md-inline-block">
								<a href="#" className="py-1 px-3">
									Sell on Eco
								</a>
							</li>
						</ul>
					</div>
					<div className="col-sm-6 col-md-6 d-none d-sm-flex align-items-center justify-content-end px-0">
						<ul className="navbar-nav ml-md-auto d-none d-lg-flex eco-ml-md-0">
							<li className="nav-item mr-2 border-right">
								<a id="login_link" href="#" className="nav-link py-1 px-3">
									Login or register
								</a>
							</li>
							<li className="nav-item mr-2 border-right">
								<a id="login_link" href="#" className="nav-link py-1 px-3">
									Orders
								</a>
							</li>
							<li className="nav-item mr-2 position-relative">
								<a id="login_link" href="#" className="nav-link py-1 px-3">
									My Account
									<i className="fas fa-sort-down nav-icon" />
									<i className="fas fa-sort-up nav-icon" />
								</a>

								<div className="nav-expand-links-container">
									<ul>
										<li>
											<a href="#">My Account</a>
										</li>
										<li>
											<a href="#">Track Order</a>
										</li>
										<li>
											<a href="#">Log Return</a>
										</li>
										<li>
											<a href="#">Credit & Refunds</a>
										</li>
										<li>
											<a href="#">Invoices</a>
										</li>
										<li>
											<a href="#">Personal Details</a>
										</li>
										<li>
											<a href="#">Digital Library</a>
										</li>
										<li>
											<a href="#">Help</a>
										</li>
									</ul>
								</div>
							</li>
						</ul>
						<ul className="shop-icons-list">
							<li className="nav-item mr-2 d-lg-none">
								<a id="login_link" href="#" className="nav-link py-1 px-3">
									My Account
									<i className="fas fa-sort-down nav-icon" />
								</a>
							</li>
							<li className="nav-item mr-2 position-relative w-12">
								<a
									id="login_link"
									href="#"
									className="nav-link wishlist-btn py-1 px-3"
								>
									{/* <i className="fas fa-heart" /> */}
									<FontAwesomeIcon icon="heart" />
								</a>
							</li>
							<li className="nav-item position-relative w-24">
								<a
									id="login_link"
									href="#"
									className="nav-link checkout-btn py-1 px-3"
								>
									{/* <i className="fas fa-shopping-cart mr-2" /> */}
									<FontAwesomeIcon icon="shopping-cart" className="w-6" />
								</a>
							</li>
						</ul>
					</div>

					<div className="col-3 d-flex align-items-center d-sm-none">
						<button
							className="btn d-flex align-items-center justify-content-center h-100"
							type="button"
						>
							{/* <i className="fas fa-search" /> */}
							<FontAwesomeIcon icon="search" />
						</button>
						<button
							className="btn d-flex align-items-center justify-content-center h-100"
							type="button"
						>
							{/* <i className="fas fa-shopping-cart" /> */}
							<FontAwesomeIcon icon="shopping-cart" />
						</button>
					</div>
				</div>
			</div>
		</nav>
	</header>
);

export default Header;
