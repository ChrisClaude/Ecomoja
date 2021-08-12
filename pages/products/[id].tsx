import React from 'react';
import Layout from '@/components/layout/Layout';
import { getProduct, getProducts } from '@/services/ProductServices';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import ProductDetails from '@/components/products/ProductDetails';

const ProductDetail = ({ product }) => {
	return (
		<Layout>
			<div className="hidden px-2 py-6 lg:flex lg:px-44">
				<div className="w-56" />
				<div className="flex-1 ml-5 overflow-hidden">
					<div className="w-full h-80">
						<ProductDetails product={product} />
					</div>
				</div>
			</div>
		</Layout>
	);
};

export async function getStaticPaths() {
	const products = getProducts();

	const paths = products.map((product) => ({
		params: { id: product.id.toString() },
	}));

	return { paths, fallback: false };
}

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
