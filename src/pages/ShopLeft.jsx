import React,{useState, useEffect, useContext} from 'react'
import Banner from '../components/Banner'
import TopFilter from '../components/TopFilter'
import SideBar from '../components/SideBar'
import ListFrame from '../components/ListFrame'
import { userContext } from '../context/UserContext';
import {paginate} from '../utils/paginate';
import Pagination from '../components/Pagination'

function ShopLeft() {
  const [products, setProducts]= useState([]);
  const{payload, setPayload}= useContext(userContext);
  const {updatedFavourite, setUpdatedFavourite}=useContext(userContext);
  const {filterId, setFilterId}= useContext(userContext);
  const [allproducts, setAllProducts]=useState([]);
  const [currentPage, setCurrentPage]=useState(1);
  const {pageSize, setPageSize}= useContext(userContext);


  // this is use to sent the product and page size to the paginate function

  const movies = paginate(products,currentPage,pageSize );


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

    const Brand = ()=>{
      if (filterId.length !== 0){
       
          var newArray = products.filter(function (el) {
              return el.Categories_id === filterId
                    
            });
            setProducts(newArray);
      }else{
          setProducts(allproducts);
      }
   
  }

  //this set the current page of the products in the navigation 
  const handlePage=(page)=>{
    setCurrentPage(page);
 }
  
    useEffect(() => {
        Product()
    }, [updatedFavourite])

    useEffect(() => {
      Brand()
  }, [filterId])
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
              products.map((product)=>(
                <ListFrame key={product.id}  id = {product.id} fav={product.favourites?product.favourites.favourite:'' } name={product.Name} picture={product.Picture_url1} description ={product.Description} price={product.Price} sliced={Math.ceil(product.Price-(product.SlicedPercentage/100 * product.Price))}/>
              ))
            }
            {/* <ListFrame/> */}
            </div>
            <Pagination productCount={products.length} page={pageSize} currentPage={currentPage} onPageChange={handlePage}/>
          </div>
        </div>
      </div>

        </div>
    )
}

export default ShopLeft
