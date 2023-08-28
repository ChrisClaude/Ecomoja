import * as React from 'react';
import { default as cn } from 'classnames';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { toast } from 'react-toastify';
import { Bike } from '@/types/AppTypes';
import { UIContext } from '@/hooks/context/UIContext';
import { handleAddBikeToCart} from '@/helpers/main';
import Link from 'next/link';
import s from '@/components/products/ProductItem/ProductItem.module.scss';
import Button from '../../common/Button';

type BikeProps = { item: Bike };

const BikeItem = ({ item }: BikeProps) => {
	const {dispatch } = React.useContext(UIContext);
	const currentPrice = 985;
	return (
		<Link href={`/mobility/bikes/${item.id}`}
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
						className="h-52 bg-cover"
					/>
					<CardContent>
						<div className="flex flex-col">
							<div className="w-full flex-1 whitespace-nowrap truncate text-center font-bold text-base">
								{item.name}
							</div>
							<div className="text-center">BMW</div>
							<div className="pricing-info-container w-full flex flex-col flex-1 mt-1 items-center justify-center lg:flex-row">
								<span className="text-xs mr-1">From</span>
								<span className="text-base mr-2 font-bold">
									R {currentPrice}
								</span>
							</div>
						</div>
						<div className="flex flex-col items-center justify-center mt-1 md:flex-row">
							<Button
								secondary
								className="w-24"
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
									handleAddBikeToCart(item, dispatch);
									// const newCartItems = addNewCartItem(cartItems, item);
									// storeCartToLocalStorage(newCartItems);
								}}
							>
								Rent
							</Button>
						</div>
					</CardContent>
				</Card>
		</Link>
	);
};

export default BikeItem;
