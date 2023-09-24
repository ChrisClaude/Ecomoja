import Head from 'next/head';
import * as React from 'react';
import { useContext, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { UIContext } from '@/hooks/context/UIContext';
import Logo from '@/components/layout/header/Logo';
import AuthContext, { AuthState } from '@/hooks/context/AuthContext';

const Login = () => {
	const {
		dispatch,
		layoutProp,
	} = useContext(UIContext);

	const { login } = useContext<AuthState>(AuthContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		dispatch({
			type: 'SET_LOADING',
			payload: true,
		});
		login(data.email, data.password)
			.then(() => {
				dispatch({
					type: 'SET_LOADING',
					payload: false,
				});
			});
	};

	useEffect(() => {
		if (layoutProp == null || layoutProp.showHeader || layoutProp.showFooter) {
			dispatch({
				type: 'UPDATE_LAYOUT',
				payload: {
					...layoutProp,
					showHeader: false,
					showFooter: false,
				},
			});
		}
	}, []);

	return (
		<>
			<Head>
				<title>Ecomoja | Login</title>
			</Head>
			<div className='flex h-screen'>
				<div className='flex flex-1 bg-gray-600 items-center justify-center'>
					<Link href="/">
							<Logo width={250} height={65} />
					</Link>
				</div>
				<div className='flex-1 flex items-center'>
					<section className='pt-8 pb-8 pl-8 w-full md:pr-32 lg:pr-48'>
						<div className='mb-4'>
							<h1 className="mb-2">Log in</h1>
							<p className="">or <Link href='/register'>create an account</Link></p>
						</div>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className='mb-4'>
								<TextField
									error={!!errors.email}
									fullWidth
									id='email'
									label='Email'
									variant='standard'
									helperText={errors.email && 'Email is required'}
									{...register('email', { required: true })}
								/>
							</div>
							<div className='mb-6'>
								<TextField
									error={!!errors.password}
									fullWidth
									id='password'
									label='Password'
									variant='standard'
									type='password'
									helperText={errors.password && 'Incorrect entry.'}
									{...register('password', { required: true })}
								/>
							</div>
							<div>
								<Button variant="contained" type="submit">Log in</Button>
							</div>
						</form>
					</section>
				</div>
			</div>
		</>
	);
}

export default Login;
