import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { UIContext } from '@/hooks/context/UIContext';
import ProductDetails from '@/components/products/ProductDetails';
import { Product } from '@/types/AppTypes';

const DynamicCartModal = dynamic(
	() => import('../../components/cart/CartModal/CartModal'),
);

const ProductDetail = ({ product }: { product: Product }) => {
	const router = useRouter();
	const { dispatch, isModalOpen } = React.useContext(UIContext);
	const { name } = product;

	React.useEffect(() => {
		const handleRouteChange = () => {
			dispatch({ type: 'RESET_MODAL' });
		};

		router.events.on('routeChangeStart', handleRouteChange);

		// If the component is unmounted, unsubscribe
		// from the event with the `off` method:
		return () => {
			router.events.off('routeChangeStart', handleRouteChange);
		};
	}, [dispatch, router.events]);

	React.useEffect(
		() =>
			dispatch({
				type: 'SET_SHOP_BY_CATEGORY',
				payload: false,
			}),
		[dispatch],
	);

	return (
		<>
			<Head>
				<title>Ecomoja | {name}</title>
			</Head>
			<div className="flex px-2 py-6 lg:px-44">
				<div className="flex-1 overflow-hidden">
					<div className="w-full">
						<ProductDetails product={product} />
					</div>
				</div>
			</div>
			{isModalOpen && <DynamicCartModal />}
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const products = [{ id: 1, name: "Tomato", description: "Tomato", isInStock: true, categories: [], currentPrice: 45, image: "", vendor: "", isFreeForDelivery: false, oldPrice: 65, numberOfVotes: 45, rating: 4, deliveryFees: 45 }];

	const paths = products.map((product) => ({
		params: { id: product.id.toString() },
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const { id } = context.params;
	const product: Product = { id: 1, name: "Tomato", description: "Tomato", isInStock: true, categories: [], currentPrice: 45, image: "", vendor: "", isFreeForDelivery: false, oldPrice: 65, numberOfVotes: 45, rating: 4, deliveryFees: 45};

	return {
		props: {
			product,
		},
	};
};

export default ProductDetail;
