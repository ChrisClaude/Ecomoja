import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { UIContext } from '@/hooks/context/UIContext';
import Logo from '@/components/layout/header/Logo';
import Link from 'next/link';
import { Paper } from '@mui/material';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

type ExpandedMobileMenuProps = {
	anchor: Anchor,
};

const ExpandedMobileMenu = ({ anchor }: ExpandedMobileMenuProps) => {
	const {isMobileMenuOpen, dispatch} = React.useContext(UIContext);
	
	const toggleDrawer = () => (event: React.KeyboardEvent | React.MouseEvent) => {
		console.log('toggle');
		if (
			event.type === 'keydown' &&
			((event as React.KeyboardEvent).key === 'Tab' ||
				(event as React.KeyboardEvent).key === 'Shift')
		) {
			return;
		}

		dispatch({ type: 'TOGGLE_MOBILE_MENU' });
	};
	
	const list = () => (
		<Box
			sx={{ width: 250 }}
			role='presentation'
			onClick={toggleDrawer}
			onKeyDown={toggleDrawer}
		>
			<List>
				{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{['All mail', 'Trash', 'Spam'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</Box>
	);

	return <Drawer
		anchor={anchor}
		open={isMobileMenuOpen}
		onClose={toggleDrawer()}
	>
		<Box
			sx={{ width: 250 }}
			role='presentation'
			onClick={toggleDrawer}
			onKeyDown={toggleDrawer}
			className="bg-gray-200 h-full"
		>
			<div className='bg-white py-1'>
				<Link href="/">
					<a className="flex items-center">
						<Logo width={120} height={30} />
					</a>
				</Link>
			</div>
		</Box>
	</Drawer>;
};

export default ExpandedMobileMenu;
