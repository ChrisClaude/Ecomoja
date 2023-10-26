import * as React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import styles from '@/styles/NavBar.module.scss';
import Logo from '@/components/layout/header/Logo';
import { CartNavBarView } from '@/components/cart';
import { UIContext } from '@/hooks/context/UIContext';
import ExpandedMobileMenu from '@/components/layout/header/ExpandedMobileMenu';
import LoginButton from '@/components/core/LoginButton';
import AuthContext, { AuthState } from '@/hooks/context/AuthContext';

const NavBar = () => {
	const { dispatch, cartItems, wishList } = React.useContext(UIContext);
	const { isAuthenticated, user } = React.useContext<AuthState>(AuthContext);

	const toggleDrawer = () => {
		dispatch({ type: 'TOGGLE_MOBILE_MENU' });
	};

	return (
		<nav className="px-2 flex bg-white w-full h-16 lg:px-16">
			<div className="flex w-full">
				{/* Mobile burger menu */}
				<div className="flex items-center lg:hidden">
					<button
						type="button"
						className="hamburger-menu flex w-auto h-full flex-col items-center"
						onClick={toggleDrawer}
					>
						<MenuIcon />
					</button>
				</div>

				<div className="flex">
					<Link href="/" className="flex items-center">
							<Logo width={250} height={65} />
					</Link>
				</div>
				<div className="hidden mx-3 lg:flex-1 lg:flex lg:items-center">
					<input
						type="text"
						placeholder="Search your eco friendly products here"
						className="flex-1 p-2 bg-gray-200 h-12 focus-visible:outline-none"
					/>
					<span className="material-icons-round flex items-center justify-center bg-gray-200 text-xl h-12 px-3 focus:outline-none">
						search
					</span>
				</div>
				<div className="justify-end hidden lg:flex">
					<ul className="flex justify-end items-center">
						<li className="p-2">
							<LoginButton />
						</li>
						<li className="p-2">
							<Link href="#" className="whitespace-nowrap">Orders
							</Link>
						</li>
						<li className="p-2 relative">
							<Link href="#" className="whitespace-nowrap">
									<span>My Ecomoja</span>
									<span className="ml-1">
										<span>
											{/* <FontAwesomeIcon
												icon="sort-down"
												className={styles['sort-down']}
											/> */}
										</span>
										{/* TODO: Add sort up icon */}
										{/* <FontAwesomeIcon icon="sort-up" className={styles['sort-up']} /> */}
									</span>
							</Link>

							<div className={styles['nav-expand']}>
								<ul className="pb-2">
									{
										isAuthenticated() && <li className="py-1 px-3">
											<p>Signed in as {user.username}</p>
										</li>
									}
									<li className="py-1 px-3">
										<a href="#">My Ecomoja</a>
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
						<li className="mr-2">
							<Link href="/wishlist"
									className="flex text-white items-center justify-center rounded-3xl w-12 h-8 text-base bg-red-500 hover:bg-red-600 hover:text-white hover:no-underline"
								>
								<span className="material-icons text-base mr-1">
								favorite
								</span>
								<span>{wishList !== null ? wishList?.length : 0}</span>
							</Link>
						</li>
						<li>
							<CartNavBarView />
						</li>
					</ul>
				</div>
				{/* Mobile Icons */}
				<div className="flex items-center ml-auto lg:hidden">
					<button
						className="h-8 p-1 bg-inherit text-base flex items-center justify-center"
						type="button"
					>
						<span className="material-icons">search</span>
					</button>
					<Link href="/cart"className="h-8 ml-1 p-1 text-base flex items-center justify-center hover:text-gray-700">
							<Badge badgeContent={cartItems.length} color="secondary">
								<ShoppingCartIcon color="action" />
							</Badge>
					</Link>
				</div>
			</div>
			<ExpandedMobileMenu anchor="left" />
		</nav>
	);
};

export default NavBar;
