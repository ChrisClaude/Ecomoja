import * as React from 'react';
import Head from 'next/head';
import Catalogue from '@/components/layout/Catalogue';
import { UIContext } from '@/hooks/context/UIContext';
import { Banner } from '@/components/layout';
import FeaturedPartners from '@/components/core/FeaturedPartners';

export default function Home() {
	const { dispatch } = React.useContext(UIContext);

	React.useEffect(
		() =>
			dispatch({
				type: 'SET_SHOP_BY_CATEGORY',
				payload: true,
			}),
		[dispatch],
	);

	return (
		<>
			<Head>
				<title>Ecomoja | Home</title>
			</Head>
			<Banner />
			<Catalogue />
			<FeaturedPartners />
		</>
	);
}
