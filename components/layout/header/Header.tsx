import * as React from 'react';
import NavBarProductCategory from '@/components/layout/header/NavBarProductCategory';
import NavBar from '@/components/layout/header/NavBar';

const Header = () => (
	<header>
		<NavBar />
		<NavBarProductCategory />
	</header>
);

export default Header;
