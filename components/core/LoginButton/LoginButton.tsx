import * as React from 'react';
import Link from 'next/link';

const LoginButton = () => (
	<Link href='/login'>
		<a>
			Login
		</a>
	</Link>);

export default LoginButton;
