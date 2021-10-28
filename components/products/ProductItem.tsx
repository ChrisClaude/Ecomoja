/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Product } from '@/types/Product';
import Link from 'next/link';
import { Button } from '@/components/common';
import { UIContext } from '@/api/context/UIContext';
import {
	handleAddProductToCart,
	storeCartToLocalStorage,
} from '@/helpers/main';
import { toast } from 'react-toastify';

type ProductProps = { product: Product };

const ProductItem = ({ product }: ProductProps) => {
	const { dispatch, cartItems } = React.useContext(UIContext);
	const { id, name, image, currentPrice, oldPrice, rating, numberOfVotes } =
		product;

	React.useEffect(() => {
		storeCartToLocalStorage(cartItems);
	}, [cartItems]);

	return (
		<Link href={`/products/${id}`}>
			<a className="product-item block hover:text-gray-700 hover:no-underline">
				<div className="flex justify-center items-center w-full h-52 overflow-hidden p-2.5">
					<img src={image} alt="product" />
				</div>
				<div className="flex flex-col w-full p-2.5 h-32">
					<div className="w-full pt-1 flex-1">{name}</div>
					<div className="pricing-info-container w-full flex items-center flex-1">
						<span className="text-base mr-2">R {currentPrice}</span>
						<span className="line-through text-gray-400 mr-2">
							R {oldPrice}
						</span>
						<img
							src="/assets/info-product-item-icon.svg"
							className="w-4 h-4"
							alt="Pricing info icon"
						/>
					</div>
					<div className="w-full flex-1 flex items-center">
						<span className="mr-1">
							<FontAwesomeIcon icon="star" className="text-yellow-500" />
						</span>
						<span className="mr-1">{rating}</span>
						<span className="text-muted">({numberOfVotes})</span>
						<Button
							secondary
							className="ml-auto"
							onClick={(event) => {
								event.preventDefault();
								event.stopPropagation();
								toast.success("You've added a new item to your cart", {
									position: 'top-right',
									autoClose: 3000,
									hideProgressBar: false,
									closeOnClick: true,
									pauseOnHover: true,
									draggable: true,
									progress: undefined,
								});
								handleAddProductToCart(product, dispatch);
							}}
						>
							Add to cart
						</Button>
					</div>
				</div>
			</a>
		</Link>
	);
};
export default ProductItem;
