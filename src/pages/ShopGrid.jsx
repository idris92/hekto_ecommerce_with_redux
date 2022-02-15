import React, { useEffect, useState, useContext } from 'react';
import Banner from '../components/Banner';
import TopFilter from '../components/TopFilter';
import GridFrame from '../components/GridFrame';
import SideBar from '../components/SideBar';
import Pagination from '../components/Pagination';
import { userContext } from '../context/UserContext';
import { paginate } from '../utils/paginate';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { allproducts, searchFilter } from '../redux/action';
import { Product } from '../redux/action';

function ShopGrid() {
	const dispatch = useDispatch();
	const [ currentPage, setCurrentPage ] = useState(1);
	const { filterPrice, setFilterPrice } = useContext(userContext);

	//clicked category
	const clickCat = useSelector((state) => state.categoryReducer.clickedCat);
	//clicked brand
	const clickBrand = useSelector((state) => state.categoryReducer.clickBrand);

	// using a useSelector and  function for filtering product based on categories
	const copiedproducts = useSelector((state) => state.productReducer);
	const products = clickCat===''
	?
	[...copiedproducts]
    :
   clickBrand === ''
   ?
    copiedproducts.filter((product)=>product.Categories_id === clickCat)
  :
  copiedproducts.filter((product)=>product.Brand_id === clickBrand && product.Categories_id === clickCat )

  
	

	//number of item on a page from reducer
	const pageState = useSelector((state) => state.pageReducer);

	

	// this is use to sent the product and page size to the paginate function
	const _products = paginate(products, currentPage, pageState);


	const handlePage = (page) => {
		setCurrentPage(page);
	};
	//   This run while the page is loading and call a function that collect all products
	useEffect(() => {
		dispatch(Product());
	}, []);

	return (
		<div>
			<Banner content="Shop Grid Default" title="Shop List" />
			<TopFilter />
			<div className="container">
				<div className="row">
					<SideBar />
					<div className="col-lg-9">
						<div className="row">
							{_products?.map((product) => (
								<GridFrame
									key={product.id}
									product={product}
									color={product.Color}
									size={product.Size}
									id={product.id}
									fav={product.favourites ? product.favourites.favourite : ''}
									name={product.Name}
									picture={product.Picture_url1}
									price={product.Price}
									sliced={Math.ceil(product.Price - product.SlicedPercentage / 100 * product.Price)}
								/>
							))}
						</div>
						<Pagination
							productCount={products.length}
							page={pageState}
							currentPage={currentPage}
							onPageChange={handlePage}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ShopGrid;
