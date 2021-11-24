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
	faChevronUp,
	faHeart,
	faSearch,
	faShoppingCart,
	faSortDown,
	faSortUp,
	faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { default as cn } from 'classnames';
import { UIContext } from '@/hooks/context/UIContext';
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
	faChevronUp,
	faClock,
	faChevronRight,
	faSortDown,
	faSortUp,
);

const Layout = ({ children }: LayoutProp) => {
	const { isModalOpen } = React.useContext(UIContext);
	return (
		<div
			className={cn('relative', {
				'h-screen w-screen overflow-hidden': isModalOpen,
			})}
		>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
