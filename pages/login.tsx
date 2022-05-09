import Head from 'next/head';
import * as React from 'react';
import { useContext, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import Link from 'next/link';
import { UIContext } from '@/hooks/context/UIContext';
import Logo from '@/components/layout/header/Logo';

const Login = () => {
	const {
		dispatch,
		layoutProp,
	} = useContext(UIContext);

	useEffect(() => {
		dispatch({
			type: 'UPDATE_LAYOUT',
			payload: {
				...layoutProp,
				showHeader: false,
				showFooter: false,
			},
		});
	}, []);

	return (
		<>
			<Head>
				<title>Ecomoja | Login</title>
			</Head>
			<div className='flex h-screen'>
				<div className='flex flex-1 bg-gray-600 items-center justify-center'>
					<Link href="/">
						<a>
							<Logo width={250} height={65} />
						</a>
					</Link>
				</div>
				<div className='flex-1 flex items-center'>
					<section className='pt-8 pb-8 pl-8 w-full md:pr-32 lg:pr-48'>
						<h1 className='mb-4'>Log in</h1>
						<form>
							<div className='mb-4'>
								<TextField fullWidth id='email' label='Email' variant='standard' required />
							</div>
							<div className='mb-6'>
								<TextField fullWidth id='password' label='Password' variant='standard' required />
							</div>
							<div>
								<Button variant="contained">Log in</Button>
							</div>
						</form>
					</section>
				</div>
			</div>
		</>
	);
}

export default Login;
