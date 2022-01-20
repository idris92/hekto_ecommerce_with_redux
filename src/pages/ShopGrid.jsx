import React, { useEffect,  useState, useContext } from 'react'
import Banner from '../components/Banner'
import TopFilter from '../components/TopFilter'
import GridFrame from '../components/GridFrame'
import SideBar from '../components/SideBar'
import Pagination from '../components/Pagination'
import { userContext } from '../context/UserContext';
import {paginate} from '../utils/paginate';
import { getRequest } from '../functions/GetRequests'

function ShopGrid() {
const {brandId, setBrandId}= useContext(userContext);
const {filterId, setFilterId}= useContext(userContext);
const {filterName, setFilterName}= useContext(userContext);
const [products, setProducts]= useState([]);
const [allproducts, setAllProducts]=useState([]);
const [currentPage, setCurrentPage]=useState(1);
const {pageSize, setPageSize}= useContext(userContext);
const [categories, setCategories]=useState([]);
const {searchName, setSearchName}= useContext(userContext);
const {filterPrice, setFilterPrice}= useContext(userContext);


// this is use to sent the product and page size to the paginate function

const movies = paginate(products,currentPage,pageSize );


//function filter with price
const handlePrice = ()=>{
    // if (filterPrice.length !== 0){
     
    //     var newArray = products.filter(function (el) {
    //         return el.Price === filterPrice;
                  
    //       });
    //       setCategories(newArray);
    //       setProducts(newArray);
    // }else{
    //     setProducts(allproducts);
    // }
    console.log(filterPrice);
 
}


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
// This call the price filter function while price filter changes

useEffect(() => {
   handlePrice()
}, [filterPrice])
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
            <Banner content="Shop Grid Default" title="Shop List"/>
            <TopFilter/>
            <div className="container">
                <div className="row">
                    <SideBar/>
                    <div className='col-lg-9'>
                        <div className='row'>
                        {
                            movies.map((product)=>(
                                <GridFrame key={product.id} product={product} color={product.Color} size={product.Size} id = {product.id} fav={product.favourites?product.favourites.favourite:'' } name={product.Name} picture={product.Picture_url1} price={product.Price} sliced={Math.ceil(product.Price-(product.SlicedPercentage/100 * product.Price))} />
                            ))
                        }
                     
                        </div>
                        <Pagination productCount={products.length} page={pageSize} currentPage={currentPage} onPageChange={handlePage}/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ShopGrid
