import * as React from 'react';
import { useContext } from 'react';
import Link from 'next/link';
import AuthContext, { AuthState } from '@/hooks/context/AuthContext';
import { UIContext } from '@/hooks/context/UIContext';

const LoginButton = () => {
	const { isAuthenticated, logout} = useContext<AuthState>(AuthContext);
	const { cartItems, wishList } = React.useContext(UIContext);
	
	return (<>
		{isAuthenticated() ? (
			<button type='button' className='bg-transparent' onClick={event => {
				 logout(cartItems, wishList);
				 }}>
				Log out
			</button>
		) : (
			<Link href='/login'>
					Log in
			</Link>
		)}
	</>);
};

export default LoginButton;
