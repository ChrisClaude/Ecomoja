import * as React from 'react';
import Head from 'next/head';
import { UIContext } from '@/hooks/context/UIContext';
import WishListItem from '@/components/WishListItem';
import { CartModal } from '@/components/cart';
import { default as cn } from 'classnames';

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
						<div
							className={cn(
								{ hidden: wishList.length > 0 },
								'h-80 bg-white flex items-center justify-center text-lg',
							)}
						>
							<p className="animate-bounce">Your wish list is empty!</p>
						</div>
						<div className={cn({hidden: wishList.length < 1})}>
							<h3 className="mb-6">Wish List</h3>
							{wishList.map((p) => (
								<div className="mb-4" key={p.id}>
									<WishListItem product={p} key={p.id} />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<CartModal />
		</>
	);
};

export default WishList;
