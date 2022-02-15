import React,{useState, useEffect, useContext} from 'react'
import Banner from '../components/Banner'
import TopFilter from '../components/TopFilter'
import SideBar from '../components/SideBar'
import ListFrame from '../components/ListFrame'
import { userContext } from '../context/UserContext';
import {paginate} from '../utils/paginate';
import Pagination from '../components/Pagination'
import { useSelector } from 'react-redux'
import { Product } from '../redux/action';
import { useDispatch } from 'react-redux'

function ShopLeft() {
  const dispatch = useDispatch();
	const [ currentPage, setCurrentPage ] = useState(1);


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
 

  
  //filtering with serach name
  // const handleBrand = ()=>{
  //     if (filterName !== ""){
          
  //         var newArray = products.filter(function (el) {
  //             // console.log(el.Name);
  //             return el.Name.toLowerCase().includes(filterName.toLowerCase())
                    
  //         });
  //         // console.log(newArray)
  //           setProducts(newArray);
  //     }else{
  //         setProducts(categories);
  //     }
  //     // console.log(filterName);
   
  // }
  
 
 //this set the current page of the products in the navigation 
 const handlePage=(page)=>{
    setCurrentPage(page);
 }
//   This run while the page is loading and call a function that collect all products
 useEffect(() => {
     dispatch(Product())
 }, [])


    return (
        <div>
            <Banner content="Shop Left Sidebar" title="Shop Left Sidebar" />
			<TopFilter />
        <div className="container">
        <div className="main">
          <div className="row">
            <SideBar/>
            <div className="col-lg-9">
            {
              _products?.map((product)=>(
                <ListFrame key={product.id}  id = {product.id} fav={product.favourites?product.favourites.favourite:'' } name={product.Name} picture={product.Picture_url1} description ={product.Description} price={product.Price} sliced={Math.ceil(product.Price-(product.SlicedPercentage/100 * product.Price))}/>
              ))
            }
            {/* <ListFrame/> */}
            <Pagination productCount={products.length} page={pageState} currentPage={currentPage} onPageChange={handlePage}/>
            </div>
          </div>
        </div>
      </div>

        </div>
    )
}

export default ShopLeft
