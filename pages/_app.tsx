import * as React from 'react';
import { AppProps } from 'next/app';
import '@/styles/styles.scss';
import { UIProvider } from '../api/context/UIContext';

const MyApp = ({ Component, pageProps }: AppProps) => (
	<UIProvider>
		<Component {...pageProps} />
	</UIProvider>
);

export default MyApp;
