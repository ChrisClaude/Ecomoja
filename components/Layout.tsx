import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	fab,
	faFacebook,
	faInstagramSquare,
	faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import {
	faChevronDown,
	faChevronRight,
	faHeart,
	faSearch,
	faShoppingCart,
	faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Header from './Header';
import Footer from './Footer';

type LayoutProp = {
	children: React.ReactNode;
};

library.add(
	fab,
	faFacebook,
	faTwitterSquare,
	faInstagramSquare,
	faShoppingCart,
	faSearch,
	faHeart,
	faStar,
	faChevronDown,
	faClock,
	faChevronRight,
);

const Layout = ({ children }: LayoutProp) => (
	<div className="w-full">
		<Header />
		<main>{children}</main>
		<Footer />
	</div>
);

export default Layout;
