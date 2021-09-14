import React from 'react';
import { getProduct, getProducts } from '@/services/ProductServices';
import { GetStaticPaths, GetStaticProps } from 'next';
import ProductDetails from '@/components/products/ProductDetails';
import { UIContext } from '../../api/context/UIContext';
import Head from 'next/head';
import { Product } from '@/types/Product';
import { CartModal } from '@/components/cart';

const ProductDetail = ({ product }: { product: Product }) => {
	const { dispatch } = React.useContext(UIContext);
	const { name } = product;

	React.useEffect(
		() =>
			dispatch({
				type: 'SET_SHOP_BY_CATEGORY',
				payload: false,
			}),
		[],
	);

	return (
		<>
			<Head>
				<title>Ecomoja | {name}</title>
			</Head>
			<div className="hidden px-2 py-6 lg:flex lg:px-44">
				<div className="flex-1 overflow-hidden">
					<div className="w-full">
						<ProductDetails product={product} />
					</div>
				</div>
			</div>
			<CartModal />
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const products = getProducts();

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
	const product = getProduct(+id);

	return {
		props: {
			product,
		},
	};
};

export default ProductDetail;
