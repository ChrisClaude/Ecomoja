import * as React from 'react';
import { toast } from 'react-toastify';
import { UIContext } from '@/hooks/context/UIContext';
import { isProductInArray } from '@/helpers/main';
import { Product } from '@/types/AppTypes';

type ToggleWishlistIconProps = {
	product: Product;
} & React.HTMLProps<HTMLButtonElement>;

const ToggleWishlistIcon = ({ product, ...props }: ToggleWishlistIconProps) => {
	const { dispatch, wishList } = React.useContext(UIContext);

	const [isInUsersWishList, setIsInUsersWishList] =
		React.useState<boolean>(true);

	React.useEffect(() => {
		setIsInUsersWishList(isProductInArray(product, wishList));
	}, [wishList]);

	const toggleToWishlist = (event) => {
		event.preventDefault();
		event.stopPropagation();
		if (isInUsersWishList) {
			dispatch({ type: 'REMOVE_PRODUCT_FROM_WISHLIST', payload: product });

			toast.error("You've removed an item from your wish list", {
				position: 'top-right',
				autoClose: 1500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} else {
			dispatch({ type: 'ADD_PRODUCT_TO_WISHLIST', payload: product });

			toast.info("You've added a new item to your wishlist", {
				position: 'top-right',
				autoClose: 1500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});

			setIsInUsersWishList(!isInUsersWishList);
		}
	};

	return (
		<button
			{...props}
			onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
				toggleToWishlist(event)
			}
			type="button"
		>
			{isInUsersWishList ? (
				<span className="material-icons-round text-3xl text-red-500">
					favorite
				</span>
			) : (
				<span className="material-icons-round text-3xl text-emerald-600">
					favorite_border
				</span>
			)}
		</button>
	);
};

export default ToggleWishlistIcon;
