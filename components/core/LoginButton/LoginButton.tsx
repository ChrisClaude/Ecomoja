import * as React from 'react';
import { useContext } from 'react';
import Link from 'next/link';
import AuthContext, { AuthState } from '@/hooks/context/AuthContext';

const LoginButton = () => {
	const { isAuthenticated } = useContext<AuthState>(AuthContext);
	return (<>
		{isAuthenticated() ? (
			<button type='button'>
				Log out
			</button>
		) : (
			<Link href='/login'>
				<a>
					Log in
				</a>
			</Link>
		)}
	</>);
};

export default LoginButton;
