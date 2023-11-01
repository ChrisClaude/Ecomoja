import React, { useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { UIContext } from '@/hooks/context/UIContext';
import ProductDetails from '@/components/products/ProductDetails';
import { Product } from '@/types/AppTypes';
import {useSearchParams} from 'next/navigation';

const DynamicCartModal = dynamic(
	() => import('../../components/cart/CartModal/CartModal'),
);

const ProductDetail = ({ product }: { product: Product }) => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const { products, dispatch, isModalOpen } = React.useContext(UIContext);
	const [selectedProduct, setSelectedproduct] = useState<Product>();

	React.useEffect(() => {

		const getSelectedProduct = ()=> {
			const id:number = parseInt(searchParams.get('id'), 10);
			let userSelectedItem:Product;
			if(products){
				const selectedItem:Product[] = products.filter((item) => item.id === id);
				const productItem = selectedItem[0];
				userSelectedItem = productItem;
			}
			return userSelectedItem;
		};

		const selectedItemProduct:Product = getSelectedProduct();
		if(selectedItemProduct){
			setSelectedproduct(selectedItemProduct);
		}
	}, [products, searchParams]);

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
				<title>Ecomoja | {`${'Product'}`}</title>
			</Head>
			<div className="flex px-2 py-6 lg:px-44">
				<div className="flex-1 overflow-hidden">
					<div className="w-full">
						{selectedProduct? <ProductDetails product={selectedProduct} /> : ""}
					</div>
				</div>
			</div>
			{isModalOpen && <DynamicCartModal />}
		</>
	);
};

export default ProductDetail;
