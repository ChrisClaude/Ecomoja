import * as React from 'react';
import { AppProps } from 'next/app';
import '@/styles/styles.scss';
import { UIProvider } from '../api/context/UIContext';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => (
	<UIProvider>
		<Layout>
			<Component {...pageProps} />
		</Layout>
	</UIProvider>
);

export default MyApp;
