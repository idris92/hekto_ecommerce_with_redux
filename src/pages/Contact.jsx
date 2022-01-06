import React,{useContext, useEffect, useState} from 'react'
import ContactForm from '../components/ContactForm';
import CartsTotal from '../components/CartsTotal'
import ContactProduct from '../components/ContactProduct'
import { userContext } from '../context/UserContext';


function Contact() {
    const {cartTotal, setCartTotal}= useContext(userContext); 
    const [products, setProducts]= useState([]);
    let cartItems = JSON.parse(localStorage.getItem('productsInCart'));
    let cartTotals = JSON.parse(localStorage.getItem('Total'));
    useEffect(() => {
        // if(cartTotal){
            setCartTotal(cartTotals)
        // }
	}, [cartTotal])

    // console.log(products[0].product_color)
    return (
        <div >
        <div className="header">
            <div className="container">
            <h1 id="title">Contact Address</h1>
            </div>
        </div>
        <div className='container' style={{marginTop:'32px', borderRadius:'3px'}}>
            <div className=' row '>
                <ContactForm/>
                <div className='col-lg-4'>
                    <div>
                        {
                            cartItems?
                            cartItems.map((product, index)=>(
                            //    console.log(product.product_picture)
                                <ContactProduct key={index} amount = {product.product_price} incart= {product.inCart} picture={product.product_picture} name={product.product_name} color={product.product_color} size={product.product_size}/> 
                            ))
                            
                            :
                            
                            ''
                        }
                        
                        {/* <ContactProduct key={index} picture={product.product_picture} name={product.product_name} color={product.product_color} size={product.product_size}/> */}
                    </div>
                    <div>
                        <CartsTotal/>
                    </div>
                </div>
            </div>
        </div>
      
      </div>
    )

}

export default Contact
