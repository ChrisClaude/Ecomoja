import * as React from 'react';
import { toast } from 'react-toastify';
import { UIContext } from '@/hooks/context/UIContext';
import { createNewWishListItem, isWishListInArray, removeItemAndUpdateWishList, saveProductAndGetNewWishList, storeWishListItemsInLocalStorage, updateLocalStorageWishList } from '@/helpers/main';
import { Product } from '@/types/AppTypes';
import { useContext } from 'react';
import AuthContext, { AuthState } from '@/hooks/context/AuthContext';

type ToggleWishlistIconProps = {
	product: Product;
} & React.HTMLProps<HTMLButtonElement>;

const ToggleWishlistIcon = ({ product, ...props }: ToggleWishlistIconProps) => {
	const { dispatch, wishList } = React.useContext(UIContext);
	const {isAuthenticated ,user } = useContext<AuthState>(AuthContext);
	const auth = isAuthenticated();
	const [isInUsersWishList, setIsInUsersWishList] =
		React.useState<boolean>(true);

	React.useEffect(() => {
		setIsInUsersWishList(isWishListInArray(product, wishList));
	}, [product, wishList]);

	function addToast(){
		toast.info("You've added a new item to your wishlist", {
			position: 'top-right',
			autoClose: 1500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	}

	function removeToast(){
		toast.error("You've removed an item from your wish list", {
			position: 'top-right',
			autoClose: 1500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	}

	function preventRedirect(event){
		event.preventDefault();
		event.stopPropagation();
	}

	function handleSaveWishList(){
		const newWishListItem = createNewWishListItem(wishList, product);
		if(auth){
			if(newWishListItem.length === 0){
				saveProductAndGetNewWishList(product, user, dispatch).then(()=>{
					addToast();
					setIsInUsersWishList(true);
				});
			}
			else{
				removeItemAndUpdateWishList(newWishListItem[0].id, user.id, dispatch).then((res)=>{
					if(res.ok){
						removeToast();
						setIsInUsersWishList(false);
					}
				});
			}
		}
		if(!auth && newWishListItem.length === 0){
			storeWishListItemsInLocalStorage(wishList, product, dispatch, user);
		}
		else{
			updateLocalStorageWishList(product, wishList, dispatch);
		}
	}

	return (
		<button
			{...props}
			onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
				preventRedirect(event); preventRedirect(event); handleSaveWishList()
			}}
			type="button"
		>
			{isInUsersWishList ? (
				<span className="material-icons-round text-3xl text-red-500">
					favorite
				</span>
			) : (
				<span className="material-icons-round text-3xl text-emerald-500">
					favorite_border
				</span>
			)}
		</button>
	);
};

export default ToggleWishlistIcon;
