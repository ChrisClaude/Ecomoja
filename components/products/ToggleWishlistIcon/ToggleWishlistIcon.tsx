import * as React from 'react';
import { Button } from '@/components/common';
import { toast } from 'react-toastify';

const ToggleWishlistIcon = ({
	isInUsersWishList,
}: {
	isInUsersWishList: boolean;
}) => {
	const [checkInUsersWishlist, setCheckInUsersWishlist] =
		React.useState(isInUsersWishList);

	const toggleToWishlist = (event) => {
		event.preventDefault();
		event.stopPropagation();
		if (isInUsersWishList) {
			toast.error("You've removed an item from your cart", {
				position: 'top-right',
				autoClose: 1500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} else {
			toast.info("You've added a new item to your wishlist", {
				position: 'top-right',
				autoClose: 1500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});

			setCheckInUsersWishlist(!isInUsersWishList);
		}
	};

	return (
		<Button
			onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
				toggleToWishlist(event)
			}
		>
			{checkInUsersWishlist ? (
				<span className="material-icons-round text-3xl text-red-500">
					favorite
				</span>
			) : (
				<span className="material-icons-round text-3xl">favorite_border</span>
			)}
		</Button>
	);
};

export default ToggleWishlistIcon;
