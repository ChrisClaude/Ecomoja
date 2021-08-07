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
	faSortDown,
	faSortUp,
	faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Header from './header/Header';
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
	faSortDown,
	faSortUp,
);

const Layout = ({ children }: LayoutProp) => (
	<>
		<Header />
		<main>{children}</main>
		<Footer />
	</>
);

export default Layout;
