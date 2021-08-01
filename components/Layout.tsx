import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	fab,
	faFacebook,
	faInstagramSquare,
	faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import Footer from './Footer';

type LayoutProp = {
	children: React.ReactNode;
};

library.add(fab, faFacebook, faTwitterSquare, faInstagramSquare, faCoffee);

const Layout = ({ children }: LayoutProp) => (
	<div>
		<Header />
		<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
			{children}
		</main>
		<Footer />
	</div>
);

export default Layout;
