import Head from 'next/head';
import * as React from 'react';
import { useContext, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { UIContext } from '@/hooks/context/UIContext';
import Logo from '@/components/layout/header/Logo';
import AuthContext, { AuthState } from '@/hooks/context/AuthContext';

const Register = () => {
	const {
		dispatch,
		layoutProp,
	} = useContext(UIContext);

	const { register } = useContext<AuthState>(AuthContext);

	const {
		register: registerForm,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => register(data.username, data.email, data.password);

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
				<title>Ecomoja | Register</title>
			</Head>
			<div className='flex h-screen'>
				<div className='flex-1 flex items-center'>
					<section className='pt-8 pb-8 pl-8 w-full md:pr-32 lg:pr-48'>
						<div className='mb-4'>
							<h1 className="mb-2">Create an account</h1>
							<p className="">or <Link href='/login'><a>log in to your account</a></Link></p>
						</div>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className='mb-4'>
								<TextField
									error={errors.username}
									fullWidth
									id='username'
									label='Username'
									variant='standard'
									helperText={errors.username && 'Username is required'}
									{...registerForm('username', { required: true })}
								/>
							</div>
							<div className='mb-4'>
								<TextField
									error={errors.email}
									fullWidth
									id='email'
									label='Email'
									variant='standard'
									helperText={errors.email && 'Email is required'}
									{...registerForm('email', { required: true })}
								/>
							</div>
							<div className='mb-6'>
								<TextField
									error={errors.password}
									fullWidth
									id='password'
									label='Password'
									variant='standard'
									helperText={errors.password && 'Incorrect entry.'}
									type="password"
									{...registerForm('password', { required: true })}
								/>
							</div>
							<div>
								<Button variant="contained" type="submit">Register</Button>
							</div>
						</form>
					</section>
				</div>
				<div className='flex flex-1 bg-gray-600 items-center justify-center'>
					<Link href="/">
						<a>
							<Logo width={250} height={65} />
						</a>
					</Link>
				</div>
			</div>
		</>
	);
}

export default Register;
