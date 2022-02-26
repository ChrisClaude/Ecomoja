import * as React from 'react';
import { default as cn } from 'classnames';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import Link from 'next/link';
import Button from '../../common/Button';
import s from '@/components/products/ProductItem/ProductItem.module.scss';
import { Bike } from '@/types/AppTypes';

type BikeProps = { item: Bike };

const BikeItem = ({ item }: BikeProps) => {
	const [currentPrice, oldPrice, rating, numberOfVotes] = [985, 1220, 5, 15];
	return (
		<Link href={`/bikes/${item.id}`}>
			<a
				className={cn(
					'product-item block hover:text-gray-700 hover:no-underline',
					s.ProductItemContainer,
				)}
			>
				<Card sx={{ maxWidth: 345 }} className="relative">
					<CardMedia
						component="img"
						height="194"
						image={item.image}
						alt="My new bike"
					/>
					<CardContent>
						<div className="flex flex-col">
							<div className="w-full flex-1 whitespace-nowrap truncate text-center font-bold text-base">
								{item.name}
							</div>
							<div className="pricing-info-container w-full flex flex-col flex-1 mt-1 items-center justify-center lg:flex-row">
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
									<FontAwesomeIcon icon="star" className="text-yellow-500" />
								</span>
								<span className="mr-1">{rating}</span>
								<span className="text-muted">({numberOfVotes})</span>
							</div>
						</div>
						<div className="flex flex-col items-center justify-center mt-1 md:flex-row">
							<button type="button">
								<span className="material-icons-round text-3xl text-gray-500">
									favorite_border
								</span>
							</button>
							<Button
								secondary
								onClick={(event) => {
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
									// handleAddProductToCart(item, dispatch);
									// const newCartItems = addNewCartItem(cartItems, item);
									// storeCartToLocalStorage(newCartItems);
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

export default BikeItem;
