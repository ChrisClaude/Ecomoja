import * as React from 'react';
import NavBarProductCategory from '@/components/layout/header/NavBarProductCategory';
import NavBar from '@/components/layout/header/NavBar';
import {default as cn} from 'classnames';
import { UIContext } from '@/hooks/context/UIContext';
import { useWindowSize } from '@/hooks/custom';

const Header = () => {
	const {dispatch, isShopByCategoryCollapsed} = React.useContext(UIContext);
	const {width: windowWidth} = useWindowSize();
	
	React.useEffect(() => {
		const handleScroll = () => {
			const checkOffset = 150;
			
			const yOffset = window.pageYOffset;
			if (yOffset >= checkOffset) {
				if (isShopByCategoryCollapsed) {
					dispatch({
						type: 'SET_SHOP_BY_CATEGORY',
						payload: false,
					});
				}
			} else if (yOffset < checkOffset) {
				if (!isShopByCategoryCollapsed) {
					dispatch({
						type: 'SET_SHOP_BY_CATEGORY',
						payload: true,
					});	
				}
			}
		};
		
		window.addEventListener('scroll', handleScroll);
		
		return () => window.removeEventListener('scroll', handleScroll);
	}, [isShopByCategoryCollapsed, dispatch]);
	
	return (
		<header className={cn('z-10 w-full sticky top-0')}>
			<NavBar />
			<NavBarProductCategory />
		</header>
	);
}

export default Header;
