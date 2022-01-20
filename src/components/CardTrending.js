import React from 'react'
import { useNavigate } from 'react-router'

export default function CardTrending({id,picture, sliced, price, product_name}) {
    const navigate = useNavigate();
    const handleSingle =()=>{
        navigate(`/details/${id}`)
    }
    return (
        <div className="col-lg-3">
        <div className="card trending-card">
       
           <div className="card-body">
           <div className="image-latest">
            <div style={{maxWidth:"244px", height:'247px', overflow:'hidden'}}>
           <img onClick={handleSingle} src={`http://127.0.0.1:8000/images/${picture}`} alt="" className="card-img-top " />
           </div>
         
        </div>
        <div className="card-latest">
           <div className="row">

               <div className="col-lg-12" style={{paddingLeft:"12px", paddingRight:'12px', overflow:'hidden'}} >
                        <p id='text-trend' style={{fontSize:'14px', textAlign:'center', whiteSpace:'nowrap'}}>{product_name}</p>
               </div>
               <div className="col-lg-12 trend-price">
               <span id='after-trend'>${sliced}</span>
               <span id='before-trend'>${price}</span>
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
