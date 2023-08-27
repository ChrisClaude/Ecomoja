import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
// import {
// 	fab,
// 	faFacebook,
// 	faInstagramSquare,
// 	faTwitterSquare,
// } from '@fortawesome/free-brands-svg-icons';
// import {
// 	faChevronDown,
// 	faChevronRight,
// 	faChevronUp,
// 	faHeart,
// 	faSearch,
// 	faShoppingCart,
// 	faSortDown,
// 	faSortUp,
// 	faStar,
// } from '@fortawesome/free-solid-svg-icons';
import { LayoutProp } from '@/types/AppTypes';
// import { faClock } from '@fortawesome/free-regular-svg-icons';
import { default as cn } from 'classnames';
import { UIContext } from '@/hooks/context/UIContext';
import Spinner from '@/components/common/Spinner';
import Header from './header/Header';
import Footer from './Footer';

// library.add(
// 	fab,
// 	faFacebook,
// 	faTwitterSquare,
// 	faInstagramSquare,
// 	faShoppingCart,
// 	faSearch,
// 	faHeart,
// 	faStar,
// 	faChevronDown,
// 	faChevronUp,
// 	faClock,
// 	faChevronRight,
// 	faSortDown,
// 	faSortUp,
// );

const Layout = ({ children, showFooter, showHeader }: LayoutProp) => {
	const { isModalOpen } = React.useContext(UIContext);
	return (
		<div
			className={cn('relative', {
				'h-screen w-screen overflow-hidden': isModalOpen,
			})}
		>
			<Header className={cn({'hidden': !showHeader})} />
			<main>{children}</main>
			<Footer className={cn({'hidden': !showFooter})} />
			<Spinner />
		</div>
	);
};

Layout.defaultProps = {
	showFooter: true,
	showHeader: true
};

export default Layout;
