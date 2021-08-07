import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import * as React from 'react';
import Link from 'next/link';
import styles from '@/styles/Header.module.scss';

const NavBarProductCategory = () => (
	<>
		{/* #region Mobile daily deals */}
		<div className="daily-deals d-flex align-items-center d-md-none">
			<div>
				<FontAwesomeIcon icon={['far', 'clock']} />
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

const Logo = () => {
	const src =
		'https://crazeenvironmental.com/wp-content/uploads/2020/10/cropped-Web-Grey-logo-with-WB-160x101.png';
	return (
		<Image width={85} loader={() => src} height={45} src={src} alt="logo" />
	);
};

const Header = () => (
	<header>
		<nav className="flex px-44 bg-white w-full h-16">
			<div className="flex w-full">
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

				<div className="flex w-1/4">
					<Link href="/">
						<a className="flex items-center">
							<Logo />
						</a>
					</Link>

					<ul className="flex items-center ml-5">
						<li className="p-2">
							<Link href="#">
								<a>Help</a>
							</Link>
						</li>
						<li className="p-2">
							<Link href="#">
								<a>Sell on Eco</a>
							</Link>
						</li>
					</ul>
				</div>

				<div className="flex w-3/4 justify-end">
					<ul className="flex w-3/4 justify-end items-center">
						<li className="p-2">
							<Link href="#">
								<a>Login or register</a>
							</Link>
						</li>
						<li className="p-2">
							<Link href="#">
								<a>Orders</a>
							</Link>
						</li>
						<li className="p-2 relative">
							<Link href="#">
								<a>
									<span>My Account</span>
									<span className="ml-1">
										<span>
											<FontAwesomeIcon
												icon="sort-down"
												className={styles['sort-down']}
											/>
										</span>
										{/* <FontAwesomeIcon icon="sort-up" className={styles['sort-up']} /> */}
									</span>
								</a>
							</Link>

							<div className={styles['nav-expand']}>
								<ul className="pb-2">
									<li className="py-1 px-3">
										<a href="#">My Account</a>
									</li>
									<li className="py-1 px-3">
										<a href="#">Track Order</a>
									</li>
									<li className="py-1 px-3">
										<a href="#">Log Return</a>
									</li>
									<li className="py-1 px-3">
										<a href="#">Credit & Refunds</a>
									</li>
									<li className="py-1 px-3">
										<a href="#">Invoices</a>
									</li>
									<li className="py-1 px-3">
										<a href="#">Personal Details</a>
									</li>
									<li className="py-1 px-3">
										<a href="#">Digital Library</a>
									</li>
									<li className="py-1 px-3">
										<a href="#">Help</a>
									</li>
								</ul>
							</div>
						</li>
					</ul>
					<ul className="flex items-center ml-1">
						<li className="mr-1">
							<a href="#" className="wishlist-btn">
								<FontAwesomeIcon icon="heart" />
							</a>
						</li>
						<li>
							<a href="#" className="checkout-btn">
								<FontAwesomeIcon icon="shopping-cart" className="w-6" />
							</a>
						</li>
					</ul>
				</div>
				{/* Mobile Icons */}
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
		</nav>
		<NavBarProductCategory />
	</header>
);

export default Header;
