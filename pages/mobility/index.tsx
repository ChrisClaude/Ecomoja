import * as React from 'react';
import Head from 'next/head';
import { Banner } from '@/components/layout';
import Catalogue from '@/components/layout/Catalogue';
import FeaturedPartners from '@/components/core/FeaturedPartners';

const slideImages: { id: string, image: string }[] = [
	{
		id: 'home-page1',
		image: '/assets/mobility/Banner_1_GreenMobility.jpg',
	},
	{
		id: 'home-pag2',
		image: '/assets/mobility/Banner_2_GreenMobility.jpg',
	},
	{
		id: 'home-pag3',
		image: '/assets/mobility/up-cycles logo.jpg',
	}
];

const Index = () => (
	<>
		<Head>
			<title>Ecomoja | Mobility | Home</title>
		</Head>
		<Banner slides={slideImages} />
		<Catalogue />
		<FeaturedPartners />
	</>
);

export default Index;
