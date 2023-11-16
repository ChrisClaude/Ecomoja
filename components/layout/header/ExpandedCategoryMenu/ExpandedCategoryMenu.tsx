import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { UIContext } from '@/hooks/context/UIContext';
import { productCategories } from 'MockData';
import MobileCategoryDrawer from './MobileCategoryDrawer';
import ExpandedSubCategoryMenu from '../ExpandedSubCategoryMenu/ExpandedSubCategoryMenu';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

type ExpandedaCategoryMenuProps = {
	anchor: Anchor,
};

const ExpandedCategoryMenu = ({ anchor }: ExpandedaCategoryMenuProps) => {
	const {
		isCategoryMenuOpen,
	} = React.useContext(UIContext);

	const list = () => (
		<Box
			sx={{ width: 250 }}
			role='presentation'
			className='mt-4'
		>
			<MobileCategoryDrawer categories={productCategories} />
			<Divider />
		</Box>
	);

	return <><Drawer
        variant="persistent"
		anchor={anchor}
		open={isCategoryMenuOpen}
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
	<ExpandedSubCategoryMenu anchor='left' />
	</>
};

export default ExpandedCategoryMenu;
