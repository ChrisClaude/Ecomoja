import * as React from 'react';
import NavBarProductCategory from '@/components/layout/header/NavBarProductCategory';
import NavBar from '@/components/layout/header/NavBar';
import {default as cn} from 'classnames';
import { UIContext } from '@/hooks/context/UIContext';

const Header = () => {
	const [isHeaderSticky, setIsHeaderSticky] = React.useState(false);
	const {dispatch} = React.useContext(UIContext);
	
	React.useEffect(() => {
		const handleScroll = () => {
			const checkOffset = 150;
			
			const yOffset = window.pageYOffset;
			if (yOffset >= checkOffset) {
				if (isHeaderSticky === false) {
					setIsHeaderSticky(true);
					dispatch({
						type: 'SET_SHOP_BY_CATEGORY',
						payload: false,
					});
				}
			} else if (yOffset < checkOffset) {
				if (isHeaderSticky === true) {
					setIsHeaderSticky(false);
					dispatch({
						type: 'SET_SHOP_BY_CATEGORY',
						payload: true,
					});	
				}
			}
		};
		
		window.addEventListener('scroll', handleScroll);
		
		return () => window.removeEventListener('scroll', handleScroll);
	}, [isHeaderSticky]);
	
	return (
		<header className={cn('z-10 w-full', {'fixed': isHeaderSticky})}>
			<NavBar />
			<NavBarProductCategory />
		</header>
	);
}

export default Header;
