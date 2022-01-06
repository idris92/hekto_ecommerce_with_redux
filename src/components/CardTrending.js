import React from 'react'

export default function CardTrending(prop) {
    return (
        <div className="col-lg-3">
        <div className="card trending-card">
       
           <div className="card-body">
           <div className="image-latest">

           <img src={prop.img} alt="" className="card-img-top " />
         
        </div>
        <div className="card-latest">
           <div className="row">

               <div className="col-lg-12">
               <p id='text-trend'>Comfort Handy Craft</p>
               </div>
               <div className="col-lg-12 trend-price">
               <span id='after-trend'>$37</span>
               <span id='before-trend'>$120</span>
               </div>

               <div className="col-lg-6">
              
               </div>
               <div className="col-lg-6">
             
               </div>
           
           </div>
        </div>
           </div>
        </div>
       
    </div>
    )
}
