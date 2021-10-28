import '../scripts/wdyr';
import * as React from 'react';
import { AppProps } from 'next/app';
import '@/styles/styles.scss';
import Layout from '@/components/layout/Layout';
import { UIProvider } from '@/api/context/UIContext';
import 'react-toastify/dist/ReactToastify.min.css';
import Initiate from '@/components/Initiate';

const MyApp = ({ Component, pageProps }: AppProps) => (
	<UIProvider>
		<Layout>
			<Component {...pageProps} />
		</Layout>
		<Initiate />
	</UIProvider>
);

export default MyApp;
