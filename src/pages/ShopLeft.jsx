import React,{useState, useEffect, useContext} from 'react'
import Banner from '../components/Banner'
import TopFilter from '../components/TopFilter'
import SideBar from '../components/SideBar'
import ListFrame from '../components/ListFrame'
import { userContext } from '../context/UserContext';

function ShopLeft() {
  const [products, setProducts]= useState([]);
  const{payload, setPayload}= useContext(userContext);
  const {updatedFavourite, setUpdatedFavourite}=useContext(userContext);

    const Product=()=>{
        fetch("http://127.0.0.1:8000/api/products")
        .then(response => response.json())
        .then(result =>{
            setProducts(result.products);

        } )
        .catch(error =>{
            alert("Something went wrong! Please check your internet connection....");
             console.log('error', error)
        
        });
    }

   
  
    useEffect(() => {
        Product()
    }, [updatedFavourite])
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
                <ListFrame key={product.id}  id = {product.id} fav={product.favourites.favourite} name={product.Name} picture={product.Picture_url1} description ={product.Description} price={product.Price} sliced={Math.ceil(product.Price-(product.SlicedPercentage/100 * product.Price))}/>
              ))
            }
            {/* <ListFrame/> */}
            </div>
          </div>
        </div>
      </div>

        </div>
    )
}

export default ShopLeft
