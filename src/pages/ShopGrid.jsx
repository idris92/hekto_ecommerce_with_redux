import React, { useEffect,  useState } from 'react'
import Banner from '../components/Banner'
import TopFilter from '../components/TopFilter'
import GridFrame from '../components/GridFrame'
import SideBar from '../components/SideBar'

function ShopGrid() {
const [products, setProducts]= useState([]);
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
   console.log(products);
    useEffect(() => {
        Product()
    }, [])
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
                                <GridFrame key={product.id} product={product} color={product.Color} size={product.Size} id = {product.id} fav={product.favourites.favourite} name={product.Name} picture={product.Picture_url1} price={product.Price} sliced={Math.ceil(product.Price-(product.SlicedPercentage/100 * product.Price))} />
                            ))
                        }
                     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopGrid
