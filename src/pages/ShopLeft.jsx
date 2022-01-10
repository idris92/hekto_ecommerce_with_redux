import React,{useState, useEffect, useContext} from 'react'
import Banner from '../components/Banner'
import TopFilter from '../components/TopFilter'
import SideBar from '../components/SideBar'
import ListFrame from '../components/ListFrame'
import { userContext } from '../context/UserContext';
import {paginate} from '../utils/paginate';
import Pagination from '../components/Pagination'

function ShopLeft() {
  const {brandId, setBrandId}= useContext(userContext);
  const {filterId, setFilterId}= useContext(userContext);
  const {filterName, setFilterName}= useContext(userContext);
  const [products, setProducts]= useState([]);
  const [allproducts, setAllProducts]=useState([]);
  const [currentPage, setCurrentPage]=useState(1);
  const {pageSize, setPageSize}= useContext(userContext);
  const [categories, setCategories]=useState([]);
  const {searchName, setSearchName}= useContext(userContext);
  
  
  // this is use to sent the product and page size to the paginate function
  
  const movies = paginate(products,currentPage,pageSize );
  
  // this is a function that load up all the product from the database onload with the useEffect help
  
      const Product=()=>{
          fetch("http://127.0.0.1:8000/api/products")
          .then(response => response.json())
          .then(result =>{
             
              setProducts(result.products);
              setAllProducts(result.products);
  
          } )
          .catch(error =>{
              alert("Something went wrong! Please check your internet connection....");
               console.log('error', error)
          
          });
        
      }
  
  const SearchFilter = ()=>{
      if (searchName !== ""){
          
          var newArray = products.filter(function (el) {
              // console.log(el.Name);
              return el.Name.toLowerCase().includes(searchName.toLowerCase())
                      
          });
          // console.log(newArray)
              setProducts(newArray);
      }else{
          setProducts(allproducts);
      }
      // console.log(filterName);
      
  }
  
  //filtering with serach name
  const handleBrand = ()=>{
      if (filterName !== ""){
          
          var newArray = products.filter(function (el) {
              // console.log(el.Name);
              return el.Name.toLowerCase().includes(filterName.toLowerCase())
                    
          });
          // console.log(newArray)
            setProducts(newArray);
      }else{
          setProducts(categories);
      }
      // console.log(filterName);
   
  }
  
  //This is uses to filter name the categories of display items 
      const handleCat = ()=>{
          if (filterId.length !== 0){
           
              var newArray = products.filter(function (el) {
                  return el.Categories_id === filterId
                        
                });
                setCategories(newArray);
                setProducts(newArray);
          }else{
              setProducts(allproducts);
          }
       
      }
 //this set the current page of the products in the navigation 
 const handlePage=(page)=>{
    setCurrentPage(page);
 }
//   This run while the page is loading and call a function that collect all products
 useEffect(() => {
     Product()
 }, [])

//The call teh brand function and this is dependent on the filterId
 useEffect(() => {
     handleCat()
 }, [filterId])

// reload when brand filter name changes
 useEffect(() => {
     handleBrand()
 }, [filterName])
// reload when search filter name changes
useEffect(() => {
 SearchFilter()
}, [searchName])
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
              movies.map((product)=>(
                <ListFrame key={product.id}  id = {product.id} fav={product.favourites?product.favourites.favourite:'' } name={product.Name} picture={product.Picture_url1} description ={product.Description} price={product.Price} sliced={Math.ceil(product.Price-(product.SlicedPercentage/100 * product.Price))}/>
              ))
            }
            {/* <ListFrame/> */}
            <Pagination productCount={products.length} page={pageSize} currentPage={currentPage} onPageChange={handlePage}/>
            </div>
          </div>
        </div>
      </div>

        </div>
    )
}

export default ShopLeft
