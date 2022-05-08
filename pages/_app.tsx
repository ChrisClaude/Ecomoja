import '../scripts/wdyr';
import * as React from 'react';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import '@/styles/styles.scss';
import Layout from '@/components/layout/Layout';
import { UIContext, UIProvider } from '@/hooks/context/UIContext';
import 'react-toastify/dist/ReactToastify.min.css';
import Initiate from '@/components/core/Initiate';
import MuiThemeProvider from '@/components/core/MuiThemeProvider';


const InitiateLayout = ({ children }: {children: React.ReactNode}) => {
	const { layoutProp } = React.useContext(UIContext);

	return (
		<Layout showHeader={layoutProp?.showHeader} showFooter={layoutProp?.showFooter}>
			{children}
		</Layout>
	);
};

const MyApp = ({ Component,
	pageProps: {
		session,
		...pageProps
	},
}: AppProps) => (
	<SessionProvider session={session}>
		<UIProvider>
			<MuiThemeProvider>
				<InitiateLayout>
					<Component {...pageProps} />
				</InitiateLayout>
				<Initiate />
			</MuiThemeProvider>
		</UIProvider>
	</SessionProvider>
);

export default MyApp;
