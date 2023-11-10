import * as React from 'react';
import Head from 'next/head';
import Catalogue from '@/components/layout/Catalogue';
import {UIContext} from '@/hooks/context/UIContext';
import {Banner} from '@/components/layout';
import {Product} from '@/types/AppTypes';
import {getEcoProducts} from '@/helpers/main';
import LoadingSpinner from '@/components/common/Spinner/Loading/LoadingSpinner';
import NewsLetter from '@/components/layout/NewsLetter';
import TrustedCompanies from '@/components/layout/TrustedCompanies';
import { NEXT_URL } from '../config';

export const getServerSideProps = (async (context) => {
	const res = await fetch(`${NEXT_URL}/api/getAllProducts?populate=*`)
	const ecoProducts:Product[] = await getEcoProducts(res);
	return { props: { ecoProducts } }
  })

const slideImages: { id: string; image: string }[] = [
	{
		id: 'home-page1',
		image: '/assets/manonbike.png',
	},
	{
		id: 'home-page3',
		image:
			'/assets/E Bike.png',
	},
	{
		id: 'home-page3',
		image:
			'/assets/PartnerWus.png',
	},
];

export default function Home({ecoProducts}) {
	const {
		dispatch,
		layoutProp,
	} = React.useContext(UIContext);

	React.useEffect(()=>{
		if(ecoProducts){
			dispatch({ type: 'SET_PRODUCTS', payload: ecoProducts });
		}
	},[dispatch, ecoProducts]);

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
			{ecoProducts.length > 0? <>
			<Catalogue catalogue={ecoProducts} title="Eco Specials"/>
			 </>
			  : 
			  <LoadingSpinner/>}
			  <TrustedCompanies/>
			  <NewsLetter/>
		</>
	);
}
