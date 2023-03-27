import * as React from 'react';
import Head from 'next/head';
import axios from 'axios';
import Catalogue from '@/components/layout/Catalogue';
import { UIContext } from '@/hooks/context/UIContext';
import { Banner } from '@/components/layout';
import FeaturedPartners from '@/components/core/FeaturedPartners';
import { products } from '../MockData';

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

export default function Home() {

	//
	const [initialProducts, setProducts] = React.useState([]);

	//Fetching data from Strapi API
	React.useEffect(()=>{
		axios.get("http://localhost:1337/api/products/").then((response)=>{
			setProducts(response.data.data)
		})
	}, []);

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

	return (
		<>
			<Head>
				<title>Ecomoja | Shopping | Home</title>
			</Head>
			<Banner slides={slideImages} />
			<Catalogue catalogue={products} title="Groceries" />
			
			{/* map method used to display products */}
			<div>
				<h1>Products</h1>
				{initialProducts.length > 0 ? initialProducts.map(product =>(
					<p key={product.id}>{product.attributes.name}</p>
				)): <p>not an array</p>}
			</div>
			<FeaturedPartners />
		</>
	);
}
