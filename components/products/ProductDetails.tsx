import * as React from 'react';
import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { Button } from '@/components/common/';
import { UIContext } from '@/hooks/context/UIContext';
import {
	addProductToCart,
	isProductInArray,
	storeCartItemsInLocalStorage,
} from '@/helpers/main';
import { Product } from '@/types/AppTypes';
import AuthContext, { AuthState } from '@/hooks/context/AuthContext';

const showCategories = ({ id, categories }: Product) => {
	const { length } = categories;
	const lastElement = length - 1;
	return (
		<div className="flex py-3 pr-4">
			{categories.map((category, index) => (
				<div key={`${category}`}>
					<Link href="#" className="text-primary" key={`${id}-${category}`}>
							{category}
					</Link>
					{!(length === 1) && index !== lastElement ? (
						<span className="mx-3">/</span>
					) : (
						''
					)}
				</div>
			))}
		</div>
	);
};

const ProductDetails = ({ product }: { product: Product }) => {
	const { dispatch, cartItems, wishList } = React.useContext(UIContext);
	const { user } = useContext<AuthState>(AuthContext);
	
	React.useEffect(() => {
		storeCartItemsInLocalStorage(cartItems);
	}, [cartItems]);

	const handleAddToWishList = () => {
		const check = isProductInArray(product, wishList);

		if (check) {
			toast.warn('The product is already added to your wish list', {
				position: 'top-right',
				autoClose: 1500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			return;
		}

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
	};

	return (
		<div className="flex flex-col w-full">
			<div className="flex">{showCategories(product)}</div>
			<div className="flex flex-col lg:flex-row">
				<div className="flex flex-col w-full bg-white shadow rounded-sm lg:flex-row lg:w-2/3">
					<div className="flex p-5">
						<Image
							loader={() => product.image}
							width={300}
							height={300}
							src={product.image}
							alt={product.name}
							objectFit="cover"
							unoptimized
						/>
					</div>
					<div className="flex-1 p-5">
						<div>
							<h3>{product.name}</h3>
							<div className="mt-1">
								<Link href="#" className="text-primary">{product.vendor}
								</Link>
							</div>
							<div className="mt-1">{product.description}</div>
							<div className="mt-3">{product.rating}</div>
							<div className="flex justify-between border-t-2 border-b-2 border-gray-300 border-solid py-3 mt-4">
								<span className="font-bold">
									{product.isInStock ? 'In stock' : 'Out of Stock'}
								</span>
								<Link href="#" className="text-primary">
									When do I get it?
								</Link>
							</div>
							<div className="mt-3">
								<ul className="list-disc">
									<li className="ml-4">Free Delivery Available</li>
									<li className="ml-4">Eligible for cash on delivery</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-5 w-full bg-white flex flex-col overflow-hidden shadow rounded-sm p-5 h-60 sm:w-1/2 lg:ml-5 lg:w-1/3 lg:mt-0">
					<span className="text-4xl font-bold">R {product.currentPrice}</span>
					<span className="mt-1 font-bold uppercase text-xs">
						Free delivery
					</span>
					<span className="line-through text-gray-400 text-xs mt-4">
						R {product.oldPrice}
					</span>
					<div className="flex flex-col mt-3">
						<Button
							variant="contained"
							secondary
							className="py-3"
							onClick={() => {
								addProductToCart(product, dispatch, user);
								dispatch({ type: 'TOGGLE_MODAL' });
							}}
						>
							<span className="flex items-center justify-center w-full">
								<span className="material-icons-round mr-1 text-base">add</span>
								<span className="material-icons-round mr-2 text-base">
									shopping_cart
								</span>
								<span>Add to Cart</span>
							</span>
						</Button>
						<Button
							variant="contained"
							light
							className="mt-2 py-3"
							onClick={handleAddToWishList}
						>
							<span className="flex items-center justify-center w-full">
								<span className="material-icons-round mr-2 text-base">
									favorite_border
								</span>
								<span>Add to List</span>
							</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
