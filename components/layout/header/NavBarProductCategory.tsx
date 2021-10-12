/* eslint-disable spaced-comment */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { ProductCategory } from '@/types/ProductCategory';
import { UIContext } from '../../../api/context/UIContext';
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

const SearchContainer = () => (
	<div className="search-container rounded-sm overflow-hidden bg-white flex h-8">
		<div className="flex-1">
			<label htmlFor="search-product" className="w-full">
				<input
					type="text"
					className="w-full"
					placeholder="Search for products, brands..."
				/>
			</label>
		</div>
		<div className="w-40 flex">
			<label
				htmlFor="select-department"
				className="inline-block flex flex-1 mb-0"
			>
				<select className="w-full">
					<option>All Departments</option>
					<option>Baby and Toddler</option>
					<option>Beauty</option>
					<option>Books</option>
					<option>Cameras</option>
					<option>Camping & Outdoors</option>
					<option>Cellphones & Wearables</option>
					<option>Computers & Tablets</option>
					<option>Fashion</option>
					<option>Gaming</option>
				</select>
			</label>
		</div>
		<div className="w-12 flex">
			<button
				className="btn btn-ecolap-gray w-full flex items-center justify-center"
				type="button"
			>
				<span>
					<FontAwesomeIcon icon="search" />
				</span>
			</button>
		</div>
	</div>
);

const NavBarProductCategory = () => {
	const { isShopByCategoryCollapsed } = React.useContext(UIContext);

	return (
		<>
			{/*#region Mobile daily deals */}
			<div className="px-2 flex items-center h-12 justify-between bg-green-600 md:px-32 lg:hidden">
				<div>
					<FontAwesomeIcon
						icon={['far', 'clock']}
						className="text-white mr-1"
					/>
					<a href="#" className="text-white">
						<span className="text-uppercase">Daily Deals</span>
					</a>
				</div>
				<a href="#" className="text-white font-weight-bold">
					View More
				</a>
			</div>
			{/*#endregion */}
			{/*#region Desktop daily deals */}
			<div className="hidden px-2 py-4 h-16 bg-white lg:flex lg:flex-col lg:px-16 justify-center bg-green-600">
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
};

export default NavBarProductCategory;
