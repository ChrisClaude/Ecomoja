import '../scripts/wdyr';
import * as React from 'react';
import { AppProps } from 'next/app';
import '@/styles/styles.scss';
import Layout from '@/components/layout/Layout';
import { UIProvider } from '@/hooks/context/UIContext';
import 'react-toastify/dist/ReactToastify.min.css';
import Initiate from '@/components/core/Initiate';
import MuiThemeProvider from '@/components/core/MuiThemeProvider';

const MyApp = ({ Component, pageProps }: AppProps) => (
	<UIProvider>
		<MuiThemeProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
			<Initiate />
		</MuiThemeProvider>
	</UIProvider>
);

export default MyApp;
