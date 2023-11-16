import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { UIContext } from '@/hooks/context/UIContext';
import { productCategories } from 'MockData';
import MobileSubCategoryDrawer from './MobileSubCategoryDrawer';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

type ExpandedSubCategoryMenuProps = {
	anchor: Anchor,
};

const ExpandedSubCategoryMenu = ({ anchor }: ExpandedSubCategoryMenuProps) => {
	const {
		isSubCategoryMenuOpen,
	} = React.useContext(UIContext);

	const list = () => (
		<Box
			sx={{ width: 250 }}
			role='presentation'
			className='mt-4'
		>
			<MobileSubCategoryDrawer categories={productCategories} />
			<Divider />
		</Box>
	);

	return <Drawer
        variant="persistent"
		anchor={anchor}
		open={isSubCategoryMenuOpen}
	>
		<Box
			sx={{ width: 250 }}
			role='presentation'
			className='bg-white h-full'
		>
			<Divider />
			{list()}
		</Box>
	</Drawer>;
};

export default ExpandedSubCategoryMenu;
