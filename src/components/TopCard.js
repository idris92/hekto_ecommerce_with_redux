import React from 'react'
import { useNavigate } from 'react-router'

export default function TopCard({color, size, price, key, id, picture, name, sliced}) {
    const navigate = useNavigate();
    const handleSingle =()=>{
        navigate(`/details/${id}`)
    }
    return (
        <div className="col-lg-3 Top-Card">
            <div className="shadow-top">
                <div className="top-card" style={{borderRadius:"50%", overflow:'hidden'}}>

                     <img  onClick={handleSingle} src={`http://127.0.0.1:8000/images/${picture}`} alt={name} style={{maxWidth:'260px', height:'260px'}}  />
     
                 </div>
            </div>
            <div className="bottom-card">
                 <h1 className="bottom-card-text">{name}</h1>
                 <h3 className="bottom-card-price">${sliced}</h3>
            </div>
           
            
        </div>
    )
}
