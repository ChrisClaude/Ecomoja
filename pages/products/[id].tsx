import React from 'react';
import Layout from '@/components/layout/Layout';
import { useRouter } from 'next/router';

const ProductDetail = () => {
	const router = useRouter();
	const { id } = router.query;

	return (
		<Layout>
			<div className="hidden px-2 py-2 lg:flex lg:px-44">
				<div className="w-56" />
				<div className="flex-1 ml-5 overflow-hidden">Product Detail {id}</div>
			</div>
		</Layout>
	);
};

export default ProductDetail;
