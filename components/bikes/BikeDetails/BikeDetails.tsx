import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Paper from '@mui/material/Paper';
import { Button } from '@/components/common/';
import { Bike } from '@/types/AppTypes';

const BikeDetails = ({ bike }: { bike: Bike }) => (
	<div className="flex flex-col w-full">
		<div className="flex flex-col lg:flex-row">
			<div className="flex flex-col w-full bg-white shadow rounded-sm lg:flex-row lg:w-2/3">
				<div className="flex p-5">
					<Image
						loader={() => bike.image}
						width={400}
						height={300}
						src={bike.image}
						alt={bike.name}
						objectFit="cover"
						unoptimized
					/>
				</div>
				<div className="flex-1 p-5">
					<div>
						<h3>{bike.name}</h3>
						<div className="mt-1">
							<Link href="#" className="text-primary">BMW
							</Link>
						</div>
						<div className="mt-1">
							description Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Inventore, sunt!
						</div>
						<div className="mt-3">
							<span className="material-icons-round mr-1 text-lg text-yellow-400">
								star
							</span>
							<span className="material-icons-round mr-1 text-lg text-yellow-400">
								star
							</span>
							<span className="material-icons-round mr-1 text-lg text-yellow-400">
								star
							</span>
							<span className="material-icons-round mr-1 text-lg text-yellow-400">
								star
							</span>
							<span className="material-icons-round mr-1 text-lg text-yellow-400">
								star_half
							</span>
						</div>
						<div className="flex justify-between border-t-2 border-b-2 border-gray-300 border-solid py-3 mt-4">
							<span className="font-bold">Available</span>
							<Link href="#" className="text-primary">When do I get it?
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
				<div className="flex flex-col mt-3">
					<div className="flex mb-3 justify-between">
						<Paper variant="outlined" square>
							<div className="w-16 h-16 flex items-center justify-center cursor-pointer">
								3 hours
							</div>
						</Paper>
						<Paper
							variant="outlined"
							square
							className="border-secondary border-2"
						>
							<div className="w-16 h-16 flex items-center justify-center cursor-pointer">
								Half day
							</div>
						</Paper>
						<Paper variant="outlined" square>
							<div className="w-16 h-16 flex items-center justify-center cursor-pointer">
								Full day
							</div>
						</Paper>
					</div>
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
							<span className="material-icons-round mr-1 text-base">
								directions_bike
							</span>
							<span>Rent and ride</span>
						</span>
					</Button>
				</div>
			</div>
		</div>
	</div>
);
export default BikeDetails;
