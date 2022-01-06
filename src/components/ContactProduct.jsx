import React from 'react'

function ContactProduct({name, picture, color, size, amount, incart}) {
    return (
        <div style={{marginBottom:'8px'}}>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <div style={{display:'flex'}}>
                        <div style={{width:'83px', height:'87px', position:'relative'}}>
                            <img src={`http://127.0.0.1:8000/images/${picture}`} style={{width:'83px', height:'87px'}} alt='product'/>
                        </div>
                        <div style={{marginLeft: '17px', paddingTop:'17px'}}>
                            <p style={{marginBottom:'0px', fontFamily:'Josefin Sans', color: '#000'}}>{name}</p>
                            <p style={{marginBottom:'0px', color: '#A1A8C1', fontFamily:'Josefin Sans', fontSize:'12px'}}>Color: <span>{color}</span></p>
                            <p style={{marginBottom:'0px' , color: '#A1A8C1', fontFamily:'Josefin Sans', fontSize:'12px'}}>Size: <span>{size}</span></p>
                        </div>
                </div>
                <div>
                    <p style={{fontFamily:'Josefin Sans', fontSize:'14px', color:'#15245E', paddingTop:'18px'}}>${amount * incart}</p>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default ContactProduct
