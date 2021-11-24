/* eslint-disable spaced-comment */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { ProductCategory } from '@/types/ProductCategory';
import { UIContext } from '@/hooks/context/UIContext';
import Link from 'next/link';
import { productCategories } from '../../../Products';

const ProductCategoryList = ({
	categoryList,
}: {
	categoryList: ProductCategory[];
}) => (
	<ul className="flex flex-col my-2">
		{categoryList.map((category) => (
			<li
				key={category.id}
				className="py-1 px-5 flex items-center justify-between hover:bg-primary hover:text-white cursor-pointer"
			>
				<span>{category.name}</span>
				<span>
					<FontAwesomeIcon icon="chevron-right" />
				</span>
			</li>
		))}
	</ul>
);

const ShopCategory = () => {
	const { isShopByCategoryCollapsed, dispatch } = React.useContext(UIContext);

	const toggleShopBuCategory = () => {
		dispatch({
			type: 'SET_SHOP_BY_CATEGORY',
			payload: !isShopByCategoryCollapsed,
		});
	};

	return (
		<>
			<div className="relative">
				<div className="absolute w-56 z-20 overflow-hidden bg-white rounded-md shadow-lg">
					<div className="flex flex-col">
						<div className="w-full">
							<div className="flex items-center justify-between relative text-white bg-ecolap-gray py-3 px-5 hover:bg-ecolap-gray-h">
								Shop by Department
								<span>
									{isShopByCategoryCollapsed ? (
										<FontAwesomeIcon
											icon="chevron-up"
											onClick={toggleShopBuCategory}
											className="cursor-pointer"
										/>
									) : (
										<FontAwesomeIcon
											icon="chevron-down"
											onClick={toggleShopBuCategory}
											className="cursor-pointer"
										/>
									)}
								</span>
							</div>
						</div>
						<div
							className={isShopByCategoryCollapsed ? 'inline-block' : 'hidden'}
						>
							<ProductCategoryList categoryList={productCategories} />
							<a
								href="#"
								className="w-full block py-3 px-5 bg-ecolap-green text-white hover:no-underline hover:text-white"
							>
								<span className="mr-1 text-base">
									<FontAwesomeIcon icon={['far', 'clock']} />
								</span>
								<span className="text-uppercase text-base font-bold">
									Daily Deals
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
const NavBarProductCategory = () => (
	<>
		{/*#region Mobile daily deals */}
		<div className='px-2 flex items-center h-12 justify-between bg-secondary md:px-32 lg:hidden'>
			<div>
				<FontAwesomeIcon icon={['far', 'clock']} className='text-white mr-1' />
				<a href='#' className='text-white hover:no-underline hover:text-white'>
					<span className='text-uppercase'>Daily Deals</span>
				</a>
			</div>
			<Link href='/'>
				<a className='text-white font-weight-bold hover:no-underline hover:text-white'>
					View More
				</a>
			</Link>
		</div>
		{/*#endregion */}
		{/*#region Desktop daily deals */}
		<div className="hidden px-2 py-4 bg-secondary h-16 lg:flex lg:flex-col lg:px-16 justify-center">
			<div className="pb-2 lg:flex">
				<div className="w-56 mr-5">
					<ShopCategory />
				</div>

				<div className="rounded-lg shadow-lg p-3 bg-gray-300 cursor-pointer">
					Promotions
				</div>
			</div>
		</div>
		{/*#endregion */}
	</>
);

export default NavBarProductCategory;
