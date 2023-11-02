import React, { useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { UIContext } from '@/hooks/context/UIContext';
import ProductDetails from '@/components/products/ProductDetails';
import { Product } from '@/types/AppTypes';
import {useSearchParams} from 'next/navigation';
import { NEXT_URL } from '@/config/index';
import { getEcoProducts } from '@/helpers/main';
import LoadingSpinner from '@/components/common/Spinner/Loading/LoadingSpinner';

export const getServerSideProps = (async (context) => {
	const res = await fetch(`${NEXT_URL}/api/getAllProducts?populate=*`)
	const ecoProducts:Product[] = await getEcoProducts(res);
	return { props: { ecoProducts } }
  })

const DynamicCartModal = dynamic(
	() => import('../../components/cart/CartModal/CartModal'),
);

const ProductDetail = ({ ecoProducts }) => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const { dispatch, isModalOpen } = React.useContext(UIContext);
	const [selectedProduct, setSelectedproduct] = useState<Product>();

	React.useEffect(() => {

		const getSelectedProduct = ()=> {
			const id:number = parseInt(searchParams.get('id'), 10);
			let userSelectedItem:Product;
			if(ecoProducts.length > 0){
				const selectedItem:Product[] = ecoProducts.filter((item) => item.id === id);
				const productItem = selectedItem[0];
				userSelectedItem = productItem;
			}
			return userSelectedItem;
		};

		const selectedItemProduct:Product = getSelectedProduct();
		if(selectedItemProduct){
			setSelectedproduct(selectedItemProduct);
		}
	}, [ecoProducts, searchParams]);

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
						{selectedProduct? <ProductDetails product={selectedProduct} /> : <LoadingSpinner/>}
					</div>
				</div>
			</div>
			{isModalOpen && <DynamicCartModal />}
		</>
	);
};

export default ProductDetail;
