import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

const NavBarProductCategory = () => (
	<>
		{/* #region Mobile daily deals */}
		<div className="daily-deals d-flex align-items-center d-md-none">
			<div>
				<FontAwesomeIcon icon={['far', 'clock']} />
				<a href="#" className="text-white">
					<span className="text-uppercase">Daily Deals</span>
				</a>
			</div>
			<a href="#" className="text-white font-weight-bold ml-auto">
				View More
			</a>
		</div>
		{/* #endregion */}

		{/* #region Desktop daily deals */}
		<div className="banner">
			<div className="container position-relative py-2">
				<div className="row">
					<div className="col-md-12">
						<div className="d-md-flex">
							<div className="items-category-container">
								<div className="items-category">
									<div className="row no-gutters">
										<div className="col-md-12">
											<div className=" items-category-header">
												Shop by Department
												<span className="ml-auto">
													<FontAwesomeIcon icon="chevron-down" />
												</span>
											</div>
										</div>
										<div className="col-md-12">
											<ul className="list-group">
												<li className="list-group-item">
													<span>Cras justo odio</span>
													<span>
														<FontAwesomeIcon icon="chevron-right" />
													</span>
												</li>
												<li className="list-group-item">
													<span>Dapibus ac facilisis in</span>
													<span>
														<FontAwesomeIcon icon="chevron-right" />
													</span>
												</li>
												<li className="list-group-item">
													<span>Morbi leo risus</span>
													<span>
														<FontAwesomeIcon icon="chevron-right" />
													</span>
												</li>
												<li className="list-group-item">
													<span>Porta ac consectetur ac</span>
													<span>
														<FontAwesomeIcon icon="chevron-right" />
													</span>
												</li>
												<li className="list-group-item">
													<span>Vestibulum at eros</span>
													<span>
														<FontAwesomeIcon icon="chevron-right" />
													</span>
												</li>
												<li className="list-group-item">
													<span>Cras justo odio</span>
													<span>
														<FontAwesomeIcon icon="chevron-right" />
													</span>
												</li>
												<li className="list-group-item">
													<span>Dapibus ac facilisis in</span>
													<span>
														<FontAwesomeIcon icon="chevron-right" />
													</span>
												</li>
												<li className="list-group-item">
													<span>Morbi leo risus</span>
													<span>
														<FontAwesomeIcon icon="chevron-right" />
													</span>
												</li>
												<li className="list-group-item">
													<span>Porta ac consectetur ac</span>
													<span>
														<FontAwesomeIcon icon="chevron-right" />
													</span>
												</li>
												<li className="list-group-item">
													<span>Vestibulum at eros</span>
													<span>
														<FontAwesomeIcon icon="chevron-right" />
													</span>
												</li>
												<li className="list-group-item">
													<span>Cras justo odio</span>
													<span>
														<FontAwesomeIcon icon="chevron-right" />
													</span>
												</li>
												<li className="list-group-item">
													<span>Dapibus ac facilisis in</span>
													<span>
														<FontAwesomeIcon icon="chevron-right" />
													</span>
												</li>
												<li className="list-group-item">
													<span>Morbi leo risus</span>
													<span>
														<FontAwesomeIcon icon="chevron-right" />
													</span>
												</li>
												<li className="list-group-item">
													<span>Porta ac consectetur ac</span>
													<span>
														<FontAwesomeIcon icon="chevron-right" />
													</span>
												</li>
												<li className="list-group-item">
													<span>Vestibulum at eros</span>
													<span>
														<FontAwesomeIcon icon="chevron-right" />
													</span>
												</li>
											</ul>
											<a href="#" className="daily-deals">
												<span>
													<FontAwesomeIcon icon={['far', 'clock']} />
												</span>
												<span className="text-uppercase">Daily Deals</span>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="search-container">
								<div className="bg-white row no-gutters">
									<div className="col-md-8">
										<label htmlFor="search-product" className="w-100 mb-0">
											<input
												type="text"
												className="w-100"
												placeholder="Search for products, brands..."
											/>
										</label>
									</div>
									<div className="col-md-3">
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
									<div className="col-md">
										<button
											className="btn btn-ecolap-gray w-100 h-100"
											type="button"
										>
											<span>
												<FontAwesomeIcon icon="search" />
											</span>
										</button>
									</div>
								</div>
								<div className="swiper-container mt-2">
									<ul className="list-group list-group-horizontal row">
										<li className="list-group-item col-sm-2 text-center swiper-item">
											Clearance store
										</li>
										<li className="list-group-item col-sm-2 text-center swiper-item">
											Shop local
										</li>
										<li className="list-group-item col-sm-1 text-center swiper-item">
											Winter
										</li>
										<li className="list-group-item col-sm-2 text-center swiper-item">
											Fashion outlet
										</li>
										<li className="list-group-item col-sm-2 text-center swiper-item">
											Brand store
										</li>
										<li className="list-group-item col-sm-3 text-center swiper-item">
											Exclusive to craze environmental
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* #endregion */}
	</>
);

export default NavBarProductCategory;
