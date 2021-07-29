import * as React from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProp = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProp) => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Header />
			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
