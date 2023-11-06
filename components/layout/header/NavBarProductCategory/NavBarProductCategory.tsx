/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable spaced-comment */
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import Link from 'next/link';
import { default as cn } from 'classnames';
import { ProductCategory } from '@/types/ProductCategory';
import { UIContext } from '@/hooks/context/UIContext';
import FontAwesomeIcon from '@/components/common/FontAwesomeIcon/FontAwesomeIcon';
import s from './NavBarProductCategory.module.scss';
import { productCategories } from '../../../../MockData';

const ProductCategoryList = ({
	categoryList,
}: {
	categoryList: ProductCategory[];
}) => (
	<ul className="flex flex-col bg-white">
		{categoryList.map((category) => (
			<li
				key={category.id}
				className={cn(
					'py-1 px-5 flex items-center justify-between cursor-pointer hover:bg-secondary hover:text-white',
					s.category,
				)}
			>
				<span>{category.name}</span>
				<span className="ml-auto material-icons-outlined">chevron_right</span>
				{category.subcategories.length > 0 && (
					<>
						<ul
							className={cn(
								'absolute bg-slate-50 w-52 h-52 text-black top-0 left-full shadow-lg',
								s.subcategories,
							)}
						>
							<li className="py-1 px-5 mb-2 font-semibold text-base">
								{category.name}
							</li>
							{category.subcategories.map((subCategory) => (
								<li
									key={subCategory.id}
									className="py-1 px-5 flex items-center justify-between cursor-pointer hover:bg-secondary"
								>
									{subCategory.name}
								</li>
							))}
						</ul>
					</>
				)}
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
				<div className="absolute w-56 z-20 bg-white shadow">
					<div className="flex flex-col">
						<div className="w-full">
							<div className="flex items-center justify-between cursor-pointer relative text-white bg-zinc-950 py-3 px-5 hover:bg-ecolap-gray-h font-bold">
								Shop by Department
									{isShopByCategoryCollapsed ? (
										<FontAwesomeIcon
										toggle={toggleShopBuCategory}
										className="material-icons-outlined cursor-pointer"
										icon="expand_more"
										/>
									) : (
										<FontAwesomeIcon
										toggle={toggleShopBuCategory}
										className="material-icons-outlined cursor-pointer"
										icon="chevron_right"
										/>
									)}
							</div>
						</div>
						<div
							className={
								isShopByCategoryCollapsed ? 'relative inline-block bg-white cursor-pointer hover:bg-secondary' : 'hidden'
							}
						>
							<ProductCategoryList categoryList={productCategories} />
							<a
								href="#"
								className="w-full flex block py-3 px-5 bg-zinc-950 text-white hover:no-underline hover:text-white"
							>
								<span className="material-icons-outlined mr-1 text-base">watch_later</span>
								<span className="text-uppercase text-base font-bold">
									Promotions
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
			<div className="px-2 flex items-center h-12 justify-between bg-secondary lg:px-16 lg:hidden">
				<div>
					{/* <FontAwesomeIcon
						icon={['far', 'clock']}
						className="text-white mr-1"
					/> */}
					<a
						href="#"
						className="text-white hover:no-underline hover:text-white"
					>
						<span className="text-uppercase">Promotions</span>
					</a>
				</div>
				<Link href="/" className="text-white font-weight-bold hover:no-underline hover:text-white">
						View More
				</Link>
			</div>
			{/*#endregion */}
			{/*#region Desktop daily deals */}
			<div className="hidden px-2 py-4 bg-slate-50 h-16 lg:flex lg:flex-col lg:px-16 justify-center">
				<div className="pb-2 lg:flex">
					<div className="w-56 mr-5">
						<ShopCategory />
					</div>
					<div className="hidden mx-3 lg:flex-1 lg:flex lg:items-center">
					<input
						type="text"
						placeholder="Search your eco friendly products here"
						className="flex-1 p-2 bg-white h-10 focus-visible:outline-none shadow"
					/>
					<span className="material-icons-round cursor-pointer flex items-center justify-center text-white bg-zinc-950 text-xl h-10 px-3 focus:outline-none">
						search
					</span>
				</div>
				</div>
			</div>
			{/*#endregion */}
		</>
	);

export default NavBarProductCategory;
