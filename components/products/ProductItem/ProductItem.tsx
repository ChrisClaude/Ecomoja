/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { default as cn } from 'classnames';
import { useCallback, useContext, useEffect, useMemo } from 'react';
import {
	addNewCartItem,
	createNewCartItem,
	saveCartAndGetNewCart,
	storeCartItemsInLocalStorage,
	updateQuantityIfCartItemExists,
} from '@/helpers/main';
import ToggleWishlistIcon from '@/components/products/ToggleWishlistIcon';
import { UIContext } from '@/hooks/context/UIContext';
import Button from '@/components/common/Button';
import { CartItem, Product } from '@/types/AppTypes';
import AuthContext, { AuthState } from '@/hooks/context/AuthContext';
import { debounce } from 'lodash';
import s from './ProductItem.module.scss';

type ProductProps = { item: Product };

const ProductItem = ({ item }: ProductProps) => {
	const { dispatch, cartItems } = React.useContext(UIContext);
	const { id, name, image, currentPrice, oldPrice, rating, numberOfVotes } =
		item;
	const {isAuthenticated ,user } = useContext<AuthState>(AuthContext);
	const auth = isAuthenticated();
	const [qty, setQty] = React.useState(0);
	const [userCartItem, setUserCartItem] = React.useState<CartItem>();

	const sendQuantityRequest = useCallback(()=>{
		if(user && qty > 0 && userCartItem !== null){
			updateQuantityIfCartItemExists(dispatch, userCartItem, qty);
		}
	}, [dispatch, qty, user, userCartItem]);

	const saveCart = useCallback((theCart?:CartItem) => {
		if(theCart){
			setUserCartItem(theCart);
			setQty(parseInt(theCart.quantity.toString(), 10) + 1);
			sendQuantityRequest();
		}else{
			saveCartAndGetNewCart(item, user, cartItems, dispatch);				
		}
	}, [cartItems, dispatch, item, sendQuantityRequest, user]);

	const handleAddProductToCart = useCallback((event) => {
		event.preventDefault();
		event.stopPropagation();
		toast.success("You've added a new item to your cart", {
			position: 'top-right',
			autoClose: 1500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	
		if (auth) {
			const newCartItem = createNewCartItem(cartItems, item);
			saveCart(newCartItem[0]);
		} else {
			const newCartItems = addNewCartItem(cartItems, item, user);
			dispatch({ type: 'PATCH_CART', payload: newCartItems });
			storeCartItemsInLocalStorage(newCartItems);
		}
	}, [auth, cartItems, dispatch, item, saveCart, user]);

	const propaGateQauntityClick = (event) => {
		event.preventDefault();
		event.stopPropagation();
	}

	const debounceQuantityChange = useMemo((
		) => debounce(handleAddProductToCart, 300)
	, [handleAddProductToCart]);
		
		useEffect(()=>{
			    sendQuantityRequest();
				debounceQuantityChange.cancel();
		}, [debounceQuantityChange, dispatch, qty, sendQuantityRequest, user, userCartItem]);

	return (
		<Link href={`/products/${id}`} className={cn(
			'product-item block hover:text-gray-700 hover:no-underline mx-1 my-2',
			s.ProductItemContainer,
		)}>
				<Card sx={{ maxWidth: 200 }} className="relative">
					<CardMedia
						component="img"
						height="194"
						image={image}
						alt="Paella dish"
					/>
					<CardContent>
						<div className="flex flex-col">
							<div className="w-full  flex-1 whitespace-nowrap truncate sm:text-ellipsis overflow-hidden text-center font-bold text-base ...">
								{name}
							</div>
							<div className="pricing-info-container w-full flex flex-col flex-1 items-center justify-center lg:flex-row">
								<span className="text-base mr-2 font-bold">
									R {currentPrice}
								</span>
								<span className="line-through text-gray-400 mr-2">
									R {oldPrice}
								</span>
								<img
									src="/assets/info-product-item-icon.svg"
									className="w-4 h-4"
									alt="Pricing info icon"
								/>
							</div>
							<div className="w-full flex-1 flex items-center justify-center mt-1">
								<span className="mr-1">
									{/* <FontAwesomeIcon icon="star" className="text-yellow-500" /> */}
								</span>
								<span className="mr-1">{rating}</span>
								<span className="text-muted">({numberOfVotes})</span>
							</div>
						</div>
						<div className="flex flex-col items-center justify-center mt-1 md:flex-row">
							<ToggleWishlistIcon
								product={item}
								className={cn(
									'absolute top-1 right-1 md:block mr-3 bg-transparent',
									s.wishListToggleIcon,
								)}
							/>
							<Button 
								className="border-2 border-secondary bg-inherit focus:border-secondary focus:text-secondary"
								onClick={(event) => {debounceQuantityChange(event); propaGateQauntityClick(event);}}
							>
							<span className="material-icons mr-1 text-xs text-secondary">add_shopping_cart</span>
							 <span className='text-xs'>Add to cart</span>
							</Button>
						</div>
					</CardContent>
				</Card>
		</Link>
	);
};
export default ProductItem;
