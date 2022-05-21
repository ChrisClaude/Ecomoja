/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Modal } from '@/components/common';
import { UIContext } from '@/hooks/context/UIContext';

const CartModal = () => {
	const { dispatch, cartItems } = React.useContext(UIContext);
	const cartItem = cartItems[cartItems.length - 1];
	const handleCloseModal = () => {
		dispatch({ type: 'TOGGLE_MODAL' });
	};

	return (
		<Modal>
			<div className="w-full h-full flex justify-end">
				<div
					className="bg-gray-200 w-4/5 lg:w-1/2"
					onClick={(event) => event.stopPropagation()}
				>
					<div className="flex bg-white">
						<span className="py-4 px-2 flex-1 text-xl text-center font-semibold">
							Added to cart
						</span>
						<button onClick={handleCloseModal}>
							<span className="material-icons-round p-4">close</span>
						</button>
					</div>
					<div className="pt-8 px-5">
						{cartItem && (
							<div className="bg-white">
								<div className="flex flex-col px-5 py-4 shadow lg:flex-row">
									<div className="flex justify-center items-center border border-gray-400">
										<Image
											loader={() => cartItem.product.image}
											width={100}
											height={100}
											src={cartItem.product.image}
											alt={cartItem.product.name}
											objectFit="cover"
											className="w-full object-cover"
											unoptimized
										/>
									</div>
									<div className="mt-2 flex flex-col flex-1 justify-between lg:mt-0 lg:ml-6">
										<div>
											<div className="text-base font-semibold">
												{cartItem.product.name}
											</div>
										</div>
										<div className="flex">
											<Link href="/cart" passHref>
												<Button
													dark
													className="w-40"
													onClick={handleCloseModal}
												>
													<span className="material-icons-round mr-2">
														arrow_forward
													</span>
													Go to cart
												</Button>
											</Link>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default CartModal;
