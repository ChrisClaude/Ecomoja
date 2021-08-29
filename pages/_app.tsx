import * as React from 'react';
import { AppProps } from 'next/app';
import '@/styles/styles.scss';
import { UIContextProvider } from '@/utils/context/UIContext';

const MyApp = ({ Component, pageProps }: AppProps) => (
	<UIContextProvider>
		<Component {...pageProps} />
	</UIContextProvider>
);

export default MyApp;
