import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/common/';
import { Bike } from '@/types/AppTypes';

const BikeDetails = ({ bike }: { bike: Bike }) => (
	<div className="flex flex-col w-full">
		<div className="flex flex-col lg:flex-row">
			<div className="flex flex-col w-full bg-white shadow rounded-sm lg:flex-row lg:w-2/3">
				<div className="flex p-5">
					<Image
						loader={() => bike.image}
						width={300}
						height={300}
						src={bike.image}
						alt={bike.name}
						objectFit="cover"
					/>
				</div>
				<div className="flex-1 p-5">
					<div>
						<h3>{bike.name}</h3>
						<div className="mt-1">
							<Link href="#">
								<a className="text-primary">BMW</a>
							</Link>
						</div>
						<div className="mt-1">bike.description</div>
						<div className="mt-3">bike.rating</div>
						<div className="flex justify-between border-t-2 border-b-2 border-gray-300 border-solid py-3 mt-4">
							<span className="font-bold">Available</span>
							<Link href="#">
								<a className="text-primary">When do I get it?</a>
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
				<div className="flex">
					<span className="mr-1 relative top-1">From</span>
					<span className="text-4xl font-bold">R 700</span>
				</div>
				<span className="mt-1 font-bold uppercase text-xs">Free delivery</span>
				<div className="flex flex-col mt-3">
					<Button
						variant="contained"
						secondary
						className="py-3"
						/* onClick={() => {
								handleAddBikeToCart(bike, dispatch);
								dispatch({ type: 'TOGGLE_MODAL' });
							}} */
					>
						<span className="flex items-center justify-center w-full">
							<span className="material-icons-round mr-1 text-base">add</span>
							<span className="material-icons-round mr-2 text-base">
								shopping_cart
							</span>
							<span>Rent</span>
						</span>
					</Button>
					<Button
						variant="contained"
						light
						className="mt-2 py-3"
						// onClick={handleAddToWishList}
					>
						<span className="flex items-center justify-center w-full">
							<span className="material-icons-round mr-2 text-base">
								favorite_border
							</span>
							<span>Rent</span>
						</span>
					</Button>
				</div>
			</div>
		</div>
	</div>
);
export default BikeDetails;
