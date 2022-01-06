import React from 'react'

export default function LateCard(prop) {
    return (
        <div className="col-lg-4">
        <div className="latest-card">
       
             <div className="image-latest">
                <div className ="icons-latest">
                    <i className="fas fa-cart-plus item-action" />
                    <i className="far fa-heart item-action" />
                    <i className="fas fa-search-plus item-action" />
                </div>

                <img src={prop.img} alt="" className="card-img-top img-late" />
              
             </div>
             <div className="card-latest">
                <div className="row">

                    <div className="col-lg-7">
                    <p id='text-l'>Comfort Handy Craft</p>
                    </div>
                    <div className="col-lg-1">
                    <p id='after'>$37</p>
                    </div>
                    <div className="col-lg-1">
                    <p id='before'>$120</p>
                    </div>
                
                </div>
             </div>
        </div>
       
    </div>
    )
}
