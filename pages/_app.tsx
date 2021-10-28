import '../scripts/wdyr';
import * as React from 'react';
import { AppProps } from 'next/app';
import '@/styles/styles.scss';
import Layout from '@/components/layout/Layout';
import { UIProvider } from '@/api/context/UIContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
	<UIProvider>
		<Layout>
			<Component {...pageProps} />
		</Layout>
		<ToastContainer />
	</UIProvider>
);

export default MyApp;
