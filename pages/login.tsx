import Head from 'next/head';
import * as React from 'react';
import { useContext, useEffect } from 'react';
import { UIContext } from '@/hooks/context/UIContext';

const Login = () => {
	const {dispatch, layoutProp} = useContext(UIContext);

	useEffect(() => {
		dispatch({type: 'UPDATE_LAYOUT', payload: {...layoutProp, showHeader: false, showFooter: false}});
	}, []);
	
	return (
		<>
			<Head>
				<title>Ecomoja | Login</title>
			</Head>
			<div className='hidden px-2 py-6 lg:flex lg:px-44'>
				<div className='w-56' />
				<div className='flex-1 ml-5 overflow-hidden'>Log In</div>
			</div>
		</>
	);
}

export default Login;
