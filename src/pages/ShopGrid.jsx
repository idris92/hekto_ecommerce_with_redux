import React, { useEffect,  useState, useContext } from 'react'
import Banner from '../components/Banner'
import TopFilter from '../components/TopFilter'
import GridFrame from '../components/GridFrame'
import SideBar from '../components/SideBar'
import Pagination from '../components/Pagination'
import { userContext } from '../context/UserContext';

function ShopGrid() {
const {brandId, setBrandId}= useContext(userContext);
const {filterId, setFilterId}= useContext(userContext);
const [products, setProducts]= useState([]);
const [allproducts, setAllProducts]=useState([]);
const [currentPage, setCurrentPage]=useState(1);
const {pageSize, setPageSize}= useContext(userContext);
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

    const handlePage=(page)=>{
       setCurrentPage(page);
    }
//    console.log(products.length);
    useEffect(() => {
        Product()
    }, [])

    useEffect(() => {
        Brand()
    }, [filterId])


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
                            products.map((product)=>(
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
