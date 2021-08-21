import * as React from 'react';
import { Product } from '@/types/Product';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/core/Button';

const showCategories = ({ id, categories }: Product) => {
	const { length } = categories;
	const lastElement = length - 1;
	return (
		<div className="flex py-3 pr-4">
			{categories.map((category, index) => (
				<div key={`${category}`}>
					<Link href="#">
						<a className="text-primary" key={`${id}-${category}`}>
							{category}
						</a>
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
	return (
		<div className="flex flex-col w-full">
			<div className="flex">{showCategories(product)}</div>
			<div className="flex">
				<div className="bg-white shadow rounded-sm w-2/3 bg-yellow-300 flex">
					<div>
						<Image
							loader={() => product.image}
							width={300}
							height={300}
							src={product.image}
							alt={product.name}
						/>
					</div>
					<div className="flex-1 p-5">
						<div>
							<h3>{product.name}</h3>
							<div className="mt-1">
								<Link href="#">
									<a className="text-primary">{product.vendor}</a>
								</Link>
							</div>
							<div className="mt-1">{product.description}</div>
							<div className="mt-3">{product.rating}</div>
							<div className="flex justify-between border-t-2 border-b-2 border-gray-300 border-solid py-3 mt-4">
								<span className="font-bold">
									{product.isInStock ? 'In stock' : 'Out of Stock'}
								</span>
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
				<div className="bg-white w-1/3 flex flex-col shadow rounded-sm ml-5 p-5 h-60 overflow-hidden">
					<span className="text-4xl font-bold">R {product.currentPrice}</span>
					<span className="mt-1 font-bold uppercase text-xs">
						Free delivery
					</span>
					<span className="line-through text-gray-400 text-xs mt-4">
						R {product.oldPrice}
					</span>
					<div className="flex flex-col mt-3">
						<Button variant="contained" primary>
							Add to Cart
						</Button>
						<Button variant="contained" secondary className="mt-2">
							Add to List
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
