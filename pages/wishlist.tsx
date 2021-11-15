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
			<div>
				<div className="px-6 py-8 grid lg:gap-y-3 lg:grid-cols-5 lg:px-16 relative">
					<div className="md:hidden lg:block">Menu</div>
					<div className="col-span-3">
						<h3 className="mb-6">Wish List</h3>
						{wishList.map((p) => (
							<div className="mb-4">
								<WishListItem product={p} key={p.id} />
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default WishList;
