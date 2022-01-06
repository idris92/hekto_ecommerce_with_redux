import React from 'react'

export default function FeaturedCard(props) {
    return (
        <div className="col-lg-3">
            <div className="card card-feature">
           
                 <div className="image-feature">
                    <div className ="icons-feature">
                    <i className="fas fa-cart-plus item-action" />
                    <i className="far fa-heart item-action" />
                    <i className="fas fa-search-plus item-action" />
                </div>
                    <img src="images/wrist-watch.jpg" alt="" className="card-img-top" />
                    <div id='btn'>
                    
                    <button className="btn-feature">view details</button>             
                    </div>
                 </div>
                 <div className="card-details">
                 <p className="card-title-feature text-center">{props.title}</p>
                 <div className="circled">
                 <span className="sm-circled-feature circle1 " />
                 <span className="sm-circled-feature circle2" />
                 <span className="sm-circled-feature circle3" />
               </div>

                <p className="color-code text-center">Code - Y523201</p>
                 
     
                 <div className="prices-bottom text-center">
                     <span className="card-price">$26.00</span>
                    
                     <br/>
          
                  </div>    
                 </div>
            </div>
           
        </div>
    )
}
