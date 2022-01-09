import React, { useEffect, useState, useContext } from 'react'
import { userContext } from '../context/UserContext';
import { useNavigate } from 'react-router'
import { funcCart } from '../functions/AddToCart';

export default function FeaturedCard({picture, name, sliced, id,color, size, price}) {
    const {cart, setCart}= useContext(userContext);
    const navigate = useNavigate();
    const handleSingle =()=>{
        navigate(`/details/${id}`)
    }

    const handleCart = () => {
		let output = funcCart(id, picture, name, color, size, price, sliced);
        setCart(output);
	};
    

    return (
        <div className="col-lg-3">
            <div className="card card-feature">
           
                 <div className="image-feature">
                    <div className ="icons-feature">
                    <i className="fas fa-cart-plus item-action" onClick={handleCart}/>
                    <i className="far fa-heart item-action" />
                    <i className="fas fa-search-plus item-action" />
                </div>
                    <div style={{maxWidth:"270px", height:"236px", overflow:'hidden'}}>
                        <img src={`http://127.0.0.1:8000/images/${picture}`} alt="" className="card-img-top" style={{maxWidth:"270px"}} />
                    </div>
                    <div id='btn'>
                    
                    <button className="btn-feature" onClick={handleSingle}>view details</button>             
                    </div>
                 </div>
                 <div className="card-details">
                 <p className="card-title-feature text-center">{name}</p>
                 <div className="circled">
                 <span className="sm-circled-feature circle1 " />
                 <span className="sm-circled-feature circle2" />
                 <span className="sm-circled-feature circle3" />
               </div>

                <p className="color-code text-center">Code - Y523201</p>
                 
     
                 <div className="prices-bottom text-center">
                     <span className="card-price">${sliced}</span>
                    
                     <br/>
          
                  </div>    
                 </div>
            </div>
           
        </div>
    )
}
