import * as React from 'react';
import { useContext } from 'react';
import Link from 'next/link';
import AuthContext, { AuthState } from '@/hooks/context/AuthContext';

const LoginButton = () => {
	const { isAuthenticated } = useContext<AuthState>(AuthContext);
	return (<>
		{isAuthenticated ? (
			<Link href='/login'>
				<a>
					Login
				</a>
			</Link>) : (
			<button type="button">
				Log out
			</button>
		)}
	</>);
};

export default LoginButton;
