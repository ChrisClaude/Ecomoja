import * as React from 'react';
import { AppProps } from 'next/app';
import '@/styles/styles.scss';
import { AppContextProvider } from '@/utils/context/AppContext';

const MyApp = ({ Component, pageProps }: AppProps) => (
	<AppContextProvider>
		<Component {...pageProps} />
	</AppContextProvider>
);

export default MyApp;
