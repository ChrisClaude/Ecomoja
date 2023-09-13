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
	return { props: { allProducts } }
  })

const slideImages: { id: string; image: string }[] = [
	{
		id: 'home-page1',
		image: '/assets/HomePage_1.png',
	},
	{
		id: 'home-pag2',
		image: '/assets/HomePage_2.png',
	},
	{
		id: 'home-page3',
		image:
			'https://images.unsplash.com/photo-1564419320408-38e24e038739?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
	},
	{
		id: 'home-page4',
		image:
			'https://images.pexels.com/photos/4792666/pexels-photo-4792666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
	},
];

export default function Home({allProducts}) {
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
		[dispatch],
	);

	const [products, setProducts] = React.useState<Product[]>([]);

	React.useEffect(()=>{
	const ecoProducts:Product[] = getEcoProducts(allProducts);
	setProducts(ecoProducts);
	},[])

	return (
		<>
			<Head>
				<title>Ecomoja | Shopping | Home</title>
			</Head>
			<Banner slides={slideImages}/>
			{products? <Catalogue catalogue={products} title="Groceries"/> : ""}
			<FeaturedPartners/>
		</>
	);
}
