import * as React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '@/styles/NavBar.module.scss';
import Logo from '@/components/layout/header/Logo';

const NavBar = () => (
	<nav className="px-2 flex bg-white w-full h-16 md:px-32 lg:px-44">
		<div className="flex w-full">
			{/* Mobile burger menu */}
			{/* TODO: Implement burger menu with http://negomi.github.io/react-burger-menu/ */}
			<div className="flex items-center lg:hidden">
				<button
					type="button"
					className="hamburger-menu flex w-auto h-full flex-col items-center"
				>
					<span className="bar1" />
					<span className="bar2" />
					<span className="bar3" />
				</button>
			</div>

			<div className="flex lg:w-2/5">
				<Link href="/">
					<a className="flex items-center">
						<Logo />
					</a>
				</Link>

				<ul className="hidden items-center ml-5 lg:flex ">
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

			<div className="w-3/5 justify-end hidden lg:flex ">
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
									{/* TODO: Add sort up icon */}
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
			<div className="flex items-center ml-auto lg:hidden">
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
);

export default NavBar;
