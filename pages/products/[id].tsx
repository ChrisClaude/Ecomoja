import React from 'react';
import Layout from '@/components/layout/Layout';
import { getProduct, getProducts } from '@/services/ProductServices';
import { GetStaticProps, GetStaticPaths } from 'next';
import ProductDetails from '@/components/products/ProductDetails';
import { UIContext } from '@/utils/context/UIContext';

const ProductDetail = ({ product }) => {
	const { dispatch } = React.useContext(UIContext);

	React.useEffect(
		() =>
			dispatch({
				type: 'SET_SHOP_BY_CATEGORY',
				payload: false,
			}),
		[],
	);

	return (
		<Layout>
			<div className="hidden px-2 py-6 lg:flex lg:px-44">
				<div className="flex-1 overflow-hidden">
					<div className="w-full">
						<ProductDetails product={product} />
					</div>
				</div>
			</div>
		</Layout>
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
