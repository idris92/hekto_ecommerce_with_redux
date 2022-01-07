import React, { useEffect,  useState, useContext } from 'react'
import Banner from '../components/Banner'
import TopFilter from '../components/TopFilter'
import GridFrame from '../components/GridFrame'
import SideBar from '../components/SideBar'
import { userContext } from '../context/UserContext';

function ShopGrid() {
const {brandId, setBrandId}= useContext(userContext);
const {filterId, setFilterId}= useContext(userContext);
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

    const Brand = ()=>{
        if (filterId.length !== 0){
            // let filtered = [];
            // for(let i = 0; i<products.length; i++){
                // setProducts(products.filter(product=>product[i].Categories_id.includes(filterId)));
                // console.log(products.filter(product=>product[i].Categories_id.includes(filterId)));
            //     console.log(products[i].Categories_id)
                
            //    console.log(products);
            // }
            
            // for (let i = 0; i <products.length; i++){
            //     for (let j =0; j<brandId.length; j++){

            //         console.log(products.filter(product=>product[i].Brand_id===(brandId[j])));
            //     }
            // }

            var newArray = products.filter(function (el) {
                return el.Categories_id === filterId
                      
              });
              console.log(newArray);
        }
        // const cat = SideBar();
        // console.log(filterId);
    }
//    console.log(products);
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
