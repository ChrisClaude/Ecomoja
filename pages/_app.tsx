import * as React from 'react';
import { AppProps } from 'next/app';
import '@/styles/styles.scss';
import Layout from '@/components/layout/Layout';
import { UIProvider } from '@/api/context/UIContext';

const MyApp = ({ Component, pageProps }: AppProps) => (
	<UIProvider>
		<Layout>
			<Component {...pageProps} />
		</Layout>
	</UIProvider>
);

export default MyApp;
