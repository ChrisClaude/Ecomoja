/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addNewCartItem, handleAddProductToCart, storeCartToLocalStorage } from '@/helpers/main';
import { Product } from '@/types/Product';
import ToggleWishlistIcon from '@/components/products/ToggleWishlistIcon';
import { UIContext } from '@/hooks/context/UIContext';
import { Button } from '../common';

type ProductProps = { product: Product };

const ProductItem = ({ product }: ProductProps) => {
	const {
		dispatch,
		cartItems,
	} = React.useContext(UIContext);
	const {
		id,
		name,
		image,
		currentPrice,
		oldPrice,
		rating,
		numberOfVotes,
	} =
		product;

	return (
		<Link href={`/products/${id}`}>
			<a className='product-item block hover:text-gray-700 hover:no-underline'>
				<Card sx={{ maxWidth: 345 }} className='relative'>
					<CardMedia
						component='img'
						height='194'
						image={image}
						alt='Paella dish'
					/>
					<CardContent>
						<div className='flex flex-col'>
							<div
								className='w-full flex-1 whitespace-nowrap truncate text-center font-bold text-base'>{name}</div>
							<div
								className='pricing-info-container w-full flex flex-col flex-1 mt-1 items-center justify-center lg:flex-row'>
								<span className='text-base mr-2 font-bold'>R {currentPrice}</span>
								<span className='line-through text-gray-400 mr-2'>R {oldPrice}</span>
								<img
									src='/assets/info-product-item-icon.svg'
									className='w-4 h-4'
									alt='Pricing info icon'
								/>
							</div>
							<div className='w-full flex-1 flex items-center justify-center mt-1'>
								<span className='mr-1'>
									<FontAwesomeIcon icon='star' className='text-yellow-500' />
								</span>
								<span className='mr-1'>{rating}</span>
								<span className='text-muted'>({numberOfVotes})</span>
							</div>
						</div>
						<div className='flex flex-col items-center justify-center mt-1 md:flex-row'>
							<ToggleWishlistIcon
								product={product}
								className='absolute top-1 right-1 md:block mr-3'
							/>
							<Button
								secondary
								onClick={(event) => {
									event.preventDefault();
									event.stopPropagation();
									toast.success('You\'ve added a new item to your cart', {
										position: 'top-right',
										autoClose: 1500,
										hideProgressBar: false,
										closeOnClick: true,
										pauseOnHover: true,
										draggable: true,
										progress: undefined,
									});
									handleAddProductToCart(product, dispatch);
									const newCartItems = addNewCartItem(cartItems, product);
									storeCartToLocalStorage(newCartItems);
								}}
							>
								Add to cart
							</Button>
						</div>
					</CardContent>
				</Card>
			</a>
		</Link>
	);
};
export default ProductItem;
