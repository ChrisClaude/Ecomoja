import '../scripts/wdyr';
import * as React from 'react';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import '@/styles/styles.scss';
import Layout from '@/components/layout/Layout';
import { UIProvider } from '@/hooks/context/UIContext';
import 'react-toastify/dist/ReactToastify.min.css';
import Initiate from '@/components/core/Initiate';
import MuiThemeProvider from '@/components/core/MuiThemeProvider';

const MyApp = ({ Component,
	pageProps: {
		session,
		...pageProps
	},
}: AppProps) => (
	<SessionProvider session={session}>
		<UIProvider>
			<MuiThemeProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
				<Initiate />
			</MuiThemeProvider>
		</UIProvider>
	</SessionProvider>
);

export default MyApp;
