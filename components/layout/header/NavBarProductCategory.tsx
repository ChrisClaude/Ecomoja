import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

const ShopCategory = () => (
	<>
		{/*#region Items Category*/}
		<div className="relative">
			<div className="absolute w-56 z-20 overflow-hidden bg-white rounded-md shadow-lg">
				<div className="flex flex-col">
					<div className="w-full">
						<div className="flex items-center justify-between relative text-white bg-ecolap-gray py-2 px-5 hover:bg-ecolap-gray-h">
							Shop by Department
							<span className="">
								<FontAwesomeIcon icon="chevron-down" />
							</span>
						</div>
					</div>
					<div className="w-full">
						<ul className="flex flex-col my-2">
							<li className="py-1 px-5 flex items-center justify-between hover:bg-primary hover:text-white cursor-pointer">
								<span>Cras justo odio</span>
								<span>
									<FontAwesomeIcon icon="chevron-right" />
								</span>
							</li>
							<li className="py-1 px-5 flex items-center justify-between hover:bg-primary hover:text-white cursor-pointer">
								<span>Dapibus ac facilisis in</span>
								<span>
									<FontAwesomeIcon icon="chevron-right" />
								</span>
							</li>
							<li className="py-1 px-5 flex items-center justify-between hover:bg-primary hover:text-white cursor-pointer">
								<span>Morbi leo risus</span>
								<span>
									<FontAwesomeIcon icon="chevron-right" />
								</span>
							</li>
							<li className="py-1 px-5 flex items-center justify-between hover:bg-primary hover:text-white cursor-pointer">
								<span>Porta ac consectetur ac</span>
								<span>
									<FontAwesomeIcon icon="chevron-right" />
								</span>
							</li>
							<li className="py-1 px-5 flex items-center justify-between hover:bg-primary hover:text-white cursor-pointer">
								<span>Vestibulum at eros</span>
								<span>
									<FontAwesomeIcon icon="chevron-right" />
								</span>
							</li>
							<li className="py-1 px-5 flex items-center justify-between hover:bg-primary hover:text-white cursor-pointer">
								<span>Cras justo odio</span>
								<span>
									<FontAwesomeIcon icon="chevron-right" />
								</span>
							</li>
							<li className="py-1 px-5 flex items-center justify-between hover:bg-primary hover:text-white cursor-pointer">
								<span>Dapibus ac facilisis in</span>
								<span>
									<FontAwesomeIcon icon="chevron-right" />
								</span>
							</li>
							<li className="py-1 px-5 flex items-center justify-between hover:bg-primary hover:text-white cursor-pointer">
								<span>Morbi leo risus</span>
								<span>
									<FontAwesomeIcon icon="chevron-right" />
								</span>
							</li>
							<li className="py-1 px-5 flex items-center justify-between hover:bg-primary hover:text-white cursor-pointer">
								<span>Porta ac consectetur ac</span>
								<span>
									<FontAwesomeIcon icon="chevron-right" />
								</span>
							</li>
							<li className="py-1 px-5 flex items-center justify-between hover:bg-primary hover:text-white cursor-pointer">
								<span>Vestibulum at eros</span>
								<span>
									<FontAwesomeIcon icon="chevron-right" />
								</span>
							</li>
							<li className="py-1 px-5 flex items-center justify-between hover:bg-primary hover:text-white cursor-pointer">
								<span>Cras justo odio</span>
								<span>
									<FontAwesomeIcon icon="chevron-right" />
								</span>
							</li>
							<li className="py-1 px-5 flex items-center justify-between hover:bg-primary hover:text-white cursor-pointer">
								<span>Dapibus ac facilisis in</span>
								<span>
									<FontAwesomeIcon icon="chevron-right" />
								</span>
							</li>
							<li className="py-1 px-5 flex items-center justify-between hover:bg-primary hover:text-white cursor-pointer">
								<span>Morbi leo risus</span>
								<span>
									<FontAwesomeIcon icon="chevron-right" />
								</span>
							</li>
							<li className="py-1 px-5 flex items-center justify-between hover:bg-primary hover:text-white cursor-pointer">
								<span>Porta ac consectetur ac</span>
								<span>
									<FontAwesomeIcon icon="chevron-right" />
								</span>
							</li>
							<li className="py-1 px-5 flex items-center justify-between hover:bg-primary hover:text-white cursor-pointer">
								<span>Vestibulum at eros</span>
								<span>
									<FontAwesomeIcon icon="chevron-right" />
								</span>
							</li>
						</ul>
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
		{/*#endregion */}
	</>
);

const SearchContainer = () => (
	<>
		{/*#region Search Container */}
		<div className="search-container">
			<div className="bg-white flex">
				<div className="w-3/6">
					<label htmlFor="search-product" className="w-full">
						<input
							type="text"
							className="w-full"
							placeholder="Search for products, brands..."
						/>
					</label>
				</div>
				<div className="w-2/6">
					<label htmlFor="select-department" className="w-100 mb-0">
						<select className="form-control form-control-sm">
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
				<div className="w-1/6">
					<button className="btn btn-ecolap-gray w-full h-full" type="button">
						<span>
							<FontAwesomeIcon icon="search" />
						</span>
					</button>
				</div>
			</div>
			<div className="bg-white overflow-hidden rounded mt-2">
				<ul className="flex">
					<li
						className="flex-1 bg-gray-200 cursor-pointer truncate text-center hover:bg-gray-300 py-2 px-3"
						title="Clearance store"
					>
						Clearance store
					</li>
					<li
						className="flex-1 bg-gray-200 cursor-pointer truncate text-center hover:bg-gray-300 py-2 px-3"
						title="Shop Local"
					>
						Shop local
					</li>
					<li
						className="flex-1 bg-gray-200 cursor-pointer truncate text-center hover:bg-gray-300 py-2 px-3"
						title="Winter"
					>
						Winter
					</li>
					<li
						className="flex-1 bg-gray-200 cursor-pointer truncate text-center hover:bg-gray-300 py-2 px-3"
						title="Fashion Outlet"
					>
						Fashion outlet
					</li>
					<li
						className="flex-1 bg-gray-200 cursor-pointer truncate text-center hover:bg-gray-300 py-2 px-3"
						title="brand store"
					>
						Brand store
					</li>
					<li
						className="flex-1 bg-gray-200 cursor-pointer truncate text-center hover:bg-gray-300 py-2 px-3"
						title="Exclusive"
					>
						Exclusive
					</li>
				</ul>
			</div>
		</div>
		{/*#endregion */}
	</>
);

const NavBarProductCategory = () => (
	<>
		{/*#region Mobile daily deals */}
		<div className="px-2 flex items-center h-12 justify-between bg-ecolap-green md:px-32 lg:hidden">
			<div>
				<FontAwesomeIcon icon={['far', 'clock']} className="text-white mr-1" />
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
		<div className="hidden px-2 py-2 bg-ecolap-blue lg:flex lg:px-44">
			<div className="w-56">
				<ShopCategory />
			</div>

			<div className="flex-1 ml-5 overflow-hidden">
				<SearchContainer />
			</div>
		</div>
		{/*#endregion */}
	</>
);

export default NavBarProductCategory;
