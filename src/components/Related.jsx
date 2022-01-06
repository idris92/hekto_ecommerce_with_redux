import React from 'react'

function Related() {
    return (
        <div className="col-lg-3" style={{width:'270px', height:'340px', marginRight:'15px', marginBottom:'125px'}} >
            <img src="/images/Rectangle128.png" alt="related products"/>
            <div style={{width:'270px'}}>
                <p style={{fontFamily:'Josefin Sans', color:'#151875', marginTop:'20px', }}>Mens Fashion Wear
                    <span>
                            <i className="far fa-star" style={{ marginLeft: '5px',color: 'yellow'}} />
                            <i className="far fa-star" style={{ marginLeft: '5px', color:'yellow' }} />
                            <i className="far fa-star" style={{ marginLeft: '5px', color:'yellow' }} />
                            <i className="far fa-star" style={{ marginLeft: '5px', color:'yellow' }} />
                            <i className="far fa-star" style={{ marginLeft: '5px', color:'yellow' }} />
                    </span>
                </p>
                <p style={{color:'#151875', fontFamily:'Josefin Sans'}}>$23.00</p>
            </div>
        </div>
    )
}

export default Related
