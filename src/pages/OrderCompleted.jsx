import React from 'react'
import Banner from '../components/Banner'
import TopFilter from '../components/TopFilter'
import Button from '../components/Button'
import { useNavigate } from 'react-router'

function OrderCompleted() {
    const navigate = useNavigate();
    const ContinueShopping=()=>{
        navigate('/grid')
    }
    return (
        <div>
            <Banner content="Order Completed" title="Order Completed" />
			<TopFilter />
            <div className="container">
                <div style={{textAlign:'center', position:'relative', width:'100%'}}>
                    
                        <img src='images/Vector16.png' alt="Cloud"/>
                        <img src='images/Vector15.png' alt="Checked" style={{position:'absolute', left:'535px', top:'21px', zIndex:8}}/>
                        <img src='images/Ellipse70.png' alt="Ellipse" style={{position:'absolute', left:'527px', top:'6px'}}/>
                        <img src='images/clock1.png' alt="clock" style={{position:'absolute', left:'65px', top:'60px'}}/>
                        <img src='images/checklist1.png' alt="checklist" style={{position:'absolute', left:'1000px', top:'450px'}}/>
                    
                   
                </div>
                <div style={{textAlign:'center', width:'80%', margin: ' 35px auto', borderBottom:'1px dashed #D2D1D1',borderLeft:'1px dashed #D2D1D1', padding:'9%'}}>
                    <h3 style={{fontFamily:'Roboto', fontSize:'36px', color:'#101750', fontWeight:900}}>Your Order is Completed</h3>
                    <p style={{fontFamily:'Lato', fontSize:'16px', color:'#8D92A7', fontWeight:600, lineHeight:'30px'}}>Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will receive an email confirmation when your order is completed.</p>
                    <Button 
                        border="0"
                        background="#FB2E86"
                        color="#fff"
                        radius="3px"
                        font="Lato"
                        padding="12px 24px"
                        name="Continue Shopping"
                        click={ContinueShopping}
                                        />
                </div>
                
                
            </div>
        </div>
    )
}

export default OrderCompleted
