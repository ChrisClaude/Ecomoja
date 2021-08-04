import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import Link from 'next/link';

const NavBarProductCategory = () => (
	<>
		{/* #region Mobile daily deals */}
		<div className="daily-deals d-flex align-items-center d-md-none">
			<div>
				<FontAwesomeIcon icon="clock" />
				<a href="#" className="text-white">
					<span className="text-uppercase">Daily Deals</span>
				</a>
			</div>
			<a href="#" className="text-white font-weight-bold ml-auto">
				View More
			</a>
		</div>
		{/* #endregion */}

		{/* #region Desktop daily deals */}
		<div className="banner">
			<div className="container position-relative py-2">
				<div className="row">
					<div className="col-md-12">
						<div className="d-md-flex">
							<div className="items-category-container">
								<div className="items-category">
									<div className="row no-gutters">
										<div className="col-md-12 items-category-header">
											Shop by Department
											<span>
												<FontAwesomeIcon icon="chevron-down" />
											</span>
										</div>
										<div className="col-md-12">
											<ul className="list-group">
												<li className="list-group-item">
													<span>Cras justo odio</span>
													<span>
														<FontAwesomeIcon icon="chevron-right" />
													</span>
												</li>
												<li className="list-group-item">
													<span>Dapibus ac facilisis in</span>
													<span>
														<FontAwesomeIcon icon="chevron-right" />
													</span>
												</li>
												<li className="list-group-item">
													<span>Morbi leo risus</span>
													<span>
														<FontAwesomeIcon icon="chevron-right" />
													</span>
												</li>
												<li className="list-group-item">
													<span>Porta ac consectetur ac</span>
													<span>
														<FontAwesomeIcon icon="chevron-right" />
													</span>
												</li>
												<li className="list-group-item">
													<span>Vestibulum at eros</span>
													<span>
														<FontAwesomeIcon icon="chevron-right" />
													</span>
												</li>
												<li className="list-group-item">
													<span>Cras justo odio</span>
													<span>
														<FontAwesomeIcon icon="chevron-right" />
													</span>
												</li>
												<li className="list-group-item">
													<span>Dapibus ac facilisis in</span>
													<span>
														<FontAwesomeIcon icon="chevron-right" />
													</span>
												</li>
												<li className="list-group-item">
													<span>Morbi leo risus</span>
													<span>
														<FontAwesomeIcon icon="chevron-right" />
													</span>
												</li>
												<li className="list-group-item">
													<span>Porta ac consectetur ac</span>
													<span>
														<FontAwesomeIcon icon="chevron-right" />
													</span>
												</li>
												<li className="list-group-item">
													<span>Vestibulum at eros</span>
													<span>
														<FontAwesomeIcon icon="chevron-right" />
													</span>
												</li>
												<li className="list-group-item">
													<span>Cras justo odio</span>
													<span>
														<FontAwesomeIcon icon="chevron-right" />
													</span>
												</li>
												<li className="list-group-item">
													<span>Dapibus ac facilisis in</span>
													<span>
														<FontAwesomeIcon icon="chevron-right" />
													</span>
												</li>
												<li className="list-group-item">
													<span>Morbi leo risus</span>
													<span>
														<FontAwesomeIcon icon="chevron-right" />
													</span>
												</li>
												<li className="list-group-item">
													<span>Porta ac consectetur ac</span>
													<span>
														<FontAwesomeIcon icon="chevron-right" />
													</span>
												</li>
												<li className="list-group-item">
													<span>Vestibulum at eros</span>
													<span>
														<FontAwesomeIcon icon="chevron-right" />
													</span>
												</li>
											</ul>
											<a href="#" className="daily-deals">
												<span>
													<FontAwesomeIcon icon={['far', 'clock']} />
												</span>
												<span className="text-uppercase">Daily Deals</span>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="search-container">
								<div className="bg-white row no-gutters">
									<div className="col-md-8">
										<label htmlFor="search-product" className="w-100 mb-0">
											<input
												type="text"
												className="w-100"
												placeholder="Search for products, brands..."
											/>
										</label>
									</div>
									<div className="col-md-3">
										<label htmlFor="select-department" className="w-100 mb-0">
											<select className="form-control form-control-sm">
												<option>All Departments</option>
												<option>Baby and Toddler</option>
												<option>Beauty</option>
												<option>Books</option>
												<option>Cameras</option>
												<option>Camping & Outdoors</option>
												<option>Cellphones & Wearables</option>
												<option>Computers & Tablets</option>
												<option>Fashion</option>
												<option>Gaming</option>
											</select>
										</label>
									</div>
									<div className="col-md">
										<button
											className="btn btn-ecolap-gray w-100 h-100"
											type="button"
										>
											<span>
												<FontAwesomeIcon icon="search" />
											</span>
										</button>
									</div>
								</div>
								<div className="swiper-container mt-2">
									<ul className="list-group list-group-horizontal row">
										<li className="list-group-item col-sm-2 text-center swiper-item">
											Clearance store
										</li>
										<li className="list-group-item col-sm-2 text-center swiper-item">
											Shop local
										</li>
										<li className="list-group-item col-sm-1 text-center swiper-item">
											Winter
										</li>
										<li className="list-group-item col-sm-2 text-center swiper-item">
											Fashion outlet
										</li>
										<li className="list-group-item col-sm-2 text-center swiper-item">
											Brand store
										</li>
										<li className="list-group-item col-sm-3 text-center swiper-item">
											Exclusive to craze environmental
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* #endregion */}
	</>
);

const Header = () => (
	<header>
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
									<FontAwesomeIcon icon="heart" />
								</a>
							</li>
							<li className="nav-item position-relative w-24">
								<a
									id="login_link"
									href="#"
									className="nav-link checkout-btn py-1 px-3"
								>
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
							<FontAwesomeIcon icon="search" />
						</button>
						<button
							className="btn d-flex align-items-center justify-content-center h-100"
							type="button"
						>
							<FontAwesomeIcon icon="shopping-cart" />
						</button>
					</div>
				</div>
			</div>
		</nav>
		<NavBarProductCategory />
	</header>
);

export default Header;
