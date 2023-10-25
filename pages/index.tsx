import * as React from 'react';
import Head from 'next/head';
import Catalogue from '@/components/layout/Catalogue';
import {UIContext} from '@/hooks/context/UIContext';
import {Banner} from '@/components/layout';
import FeaturedPartners from '@/components/core/FeaturedPartners';
import {Product} from '@/types/AppTypes';
import {getEcoProducts} from '@/helpers/main';
import { NEXT_URL } from '../config';

export const getServerSideProps = (async (context) => {
	const res = await fetch(`${NEXT_URL}/api/getAllProducts?populate=*`)
	const allProducts = await res.json()
	const ecoProducts:Product[] = getEcoProducts(allProducts);
	return { props: { ecoProducts } }
  })

const slideImages: { id: string; image: string }[] = [
	{
		id: 'home-page1',
		image: '/assets/manonbike.png',
	},
	{
		id: 'home-pag2',
		image: '/assets/EBIKE.png',
	},
	{
		id: 'home-page3',
		image:
			'/assets/recycle_image.jpg',
	},
];

export default function Home({ecoProducts}) {
	const {
		dispatch,
		layoutProp,
	} = React.useContext(UIContext);

	React.useEffect(
		() => {
			dispatch({
				type: 'SET_SHOP_BY_CATEGORY',
				payload: true,
			});

			if (layoutProp != null && !(layoutProp.showHeader || layoutProp.showFooter)) {
				dispatch({
					type: 'UPDATE_LAYOUT',
					payload: {
						...layoutProp,
						showHeader: true,
						showFooter: true,
					},
				});
			}
		},
		[dispatch, layoutProp],
	);


	return (
		<>
			<Head>
				<title>Ecomoja | Shopping | Home</title>
			</Head>
			<Banner slides={slideImages}/>
			{ecoProducts? <Catalogue catalogue={ecoProducts} title="Groceries"/> : ""}
			<FeaturedPartners/>
		</>
	);
}
