import * as React from 'react';
import { UIContext } from '@/api/context/UIContext';
import WhishlistProductItem from '../WhishlistProductItem';

const WishListItem = () => {
	const { dispatch, wishListItem } = React.useContext(UIContext);

	React.useEffect(
		() =>
			dispatch({
				type: 'SET_SHOP_BY_CATEGORY',
				payload: false,
			}),
		[dispatch],
	);

	return (
		<section className="px-6 py-8 lg:block lg:px-16 relative">
			<h1 className="mb-6">Wishlist Item(s)</h1>
			<div>
				{wishListItem.map((p) => (
					<WhishlistProductItem product={p} key={p.id} />
				))}
			</div>
		</section>
	);
};

export default WishListItem;