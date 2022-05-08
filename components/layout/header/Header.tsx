import * as React from 'react';
import {default as cn} from 'classnames';
import NavBarProductCategory from '@/components/layout/header/NavBarProductCategory/NavBarProductCategory';
import NavBar from '@/components/layout/header/NavBar';
import { UIContext } from '@/hooks/context/UIContext';

type HeaderProps = {
	className: string,
};

const Header = ({className}: HeaderProps) => {
	const {dispatch, isShopByCategoryCollapsed} = React.useContext(UIContext);
	
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
		<header className={cn('z-10 w-full sticky top-0', className)}>
			<NavBar />
			<NavBarProductCategory />
		</header>
	);
}

export default Header;
