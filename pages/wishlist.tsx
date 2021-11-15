import * as React from 'react';
import Head from 'next/head';
import { UIContext } from '@/api/context/UIContext';
import WishListItem from '@/components/WishListItem';

const WishList = () => {
	const { dispatch, wishList } = React.useContext(UIContext);

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
				<title>Ecomoja | Wish List</title>
			</Head>
			<div className="px-6 py-8 lg:block lg:px-16 relative">
				<h1 className="mb-6">Wish List</h1>
				{wishList.map((p) => (
					<WishListItem product={p} key={p.id} />
				))}
			</div>
		</>
	);
};

export default WishList;
