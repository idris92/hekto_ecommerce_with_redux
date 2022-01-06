import React, {useState, useEffect} from 'react';
import Banner from '../components/Banner';
import TopFilter from '../components/TopFilter';
import Details from '../components/Details';
import Description from '../components/Description';
import Related from '../components/Related';
import { useParams } from "react-router-dom";


function ProductDetails() {
    const {id} = useParams();
    const [products, setProducts]= useState({});
    const Product=()=>{
        fetch(`http://127.0.0.1:8000/api/products/${id}`)
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
    }, [])
    console.log(products)
	return (
		<div >
			<Banner content="Product Details" title="Product Details" />
			{/* <TopFilter /> */}
			<div className="container" style={{marginTop:'64px'}}>
				<Details description={products.Description} picture1={products.Picture_url1} picture2={products.Picture_url2} picture3={products.Picture_url3} picture4={products.Picture_url4} sliced={products.Price-(Math.ceil((products.SlicedPercentage/100) *products.Price))} product_name={products.Name} color={products.Color} size={products.Size} price={products.Price} inCart={products.inCart}/>
                <Description description={products.Description} info ={products['Additional Info']} video={products.Video_id} review={products.Review_id}/>
                <div style={{marginTop:'148px'}}>
                    <p style={{fontFamily:'Roboto', fontWeight:'900', fontSize:'36px', color: '#101750'}}>Related Products</p>
                    <div className='row'>
                        <Related/> 
                        <Related/>
                        <Related/>
                        <Related/>   
                    </div>
                </div>
			</div>
            
		</div>
	);
}

export default ProductDetails;
