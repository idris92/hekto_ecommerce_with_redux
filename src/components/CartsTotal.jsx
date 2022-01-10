import React, {useContext, useState, useEffect} from 'react'
import Button from './Button'
import { userContext } from '../context/UserContext';
import { useNavigate } from 'react-router';
import { usePaystackPayment } from "react-paystack";
import { toast } from 'react-toastify';

function CartsTotal({contactEmail=null}) {
    const {cartTotal, setCartTotal}= useContext(userContext); 
    const {cart, setCart}= useContext(userContext);
    const [total, setTotal]= useState(JSON.parse(localStorage.getItem('Total')))
    const [emails, setEmails]=useState('')
    const navigate = new useNavigate();
   
    let references = (new Date()).getTime().toString()
    const [config, setConfig] = useState({
        reference:references,
		email: contactEmail,
		amount:(total+50) * 100,
		publicKey: "pk_test_0cf400c602268d06bbba26454b61c1a4f858f698",
	});

    const initializePayment= usePaystackPayment (config);

    const onSuccess =(reference)=>{
       
        
        let payload = {
            "status" :"success",
           "ref_id":references,
           "transaction_id":reference.trans
        }
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Authorization","Bearer" + JSON.parse(localStorage.getItem('jwt')));

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(payload),
        redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/api/paymentup", requestOptions)
        .then(response => response.json())
        .then(response =>{
            console.log('paystack result', response);
                if(response.response){
                    toast.success('payment successfull');
                    setCartTotal(0);
                    setTotal(0);
                    setCart(0);
                    localStorage.removeItem('productsInCart');
                    localStorage.removeItem('Total');
                    navigate('/complete')
                    
                }
                
            }
         )
        .catch(error =>{
            alert("Something went wrong! Please check your internet connection....");
             console.log('error', error)
        
        });

        // console.log(all_product);
        // console.log(reference);
        
    }

    const onClose=()=>{
        alert('Opps, Payment not completed');
    }


    function payWithPaystack(){
        
        // console.log(emails);
        initializePayment(onSuccess, onClose);

    }
   
    const handleProceed=()=>{
        let all_product= JSON.parse(localStorage.getItem('productsInCart'))
        let user = JSON.parse(localStorage.getItem('user_id'))

        // console.log(reference);
        for(let i =0; i<all_product.length; i++){
            all_product[i]['status'] = 'pending';
            all_product[i]['ref_id'] = references;
            // all_product[i]['transaction_id']= reference.trans;
            all_product[i]['user_id'] = user;
            all_product[i]['quantity'] = all_product[i]['inCart'];
            delete all_product[i]['inCart'];
            delete all_product[i]['product_picture'];
        }
        
        let payload = {
            "products" :all_product,
        }
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Authorization","Bearer" + JSON.parse(localStorage.getItem('jwt')));

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(payload),
        redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/api/payment", requestOptions)
        .then(response => response.json())
        .then(response =>{
            // console.log('paystack result', response);
                if(response.msg === 'saved'){
                    payWithPaystack()
                    
                }
                
            }
         )
        .catch(error =>{
            alert("Something went wrong! Please check your internet connection....");
             console.log('error', error)
        
        });
        
    
    }

    const handleContact=()=>{
        navigate('/contact')
    }

    
//    console.log(config.amount);
    return (
        <div style={{ width: '371px', height: 'auto', backgroundColor: '#F4F4FC' }}>
        <div style={{ padding: '23px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p
                    style={{
                        color: '#1D3178',
                        fontFamily: 'Lato',
                        fontSize: '18px',
                        fontWeight: 600
                    }}
                >
                    SubTotals:
                </p>
                <p
                    style={{
                        color: '#1D3178',
                        fontFamily: 'Lato',
                        fontSize: '18px',
                        fontWeight: 600
                    }}
                >
                    ${cartTotal ? cartTotal : 0}
                </p>
            </div>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p
                    style={{
                        color: '#1D3178',
                        fontFamily: 'Lato',
                        fontSize: '18px',
                        fontWeight: 600
                    }}
                >
                    Totals:
                </p>
                <p
                    style={{
                        color: '#1D3178',
                        fontFamily: 'Lato',
                        fontSize: '18px',
                        fontWeight: 600
                    }}
                >
                    ${contactEmail !==null && cartTotal ? cartTotal+50 : cartTotal}
                </p>
            </div>
            <hr />
        </div>
        <div class="form-check">
            <input type="checkbox" checked />
            <label
                class="form-check-label"
                for="flexCheckChecked"
                style={{ fontFamily: 'lato', fontWeight: 400, fontSize: '12px' }}
            >
                <span style={{ paddingLeft: '8px' }}>Shipping & taxes calculated at checkout</span>
            </label>
        </div>
        <div className="container">
            <Button
                border="0"
                background="#19D16F"
                color="#fff"
                radius="3px"
                font="Lato"
                padding="11px"
                name="Proceed to Checkout"
                width="100%"
                margin="35px auto"
                click={contactEmail !== null ? handleProceed : handleContact}
            />
        </div>
    </div>
    )
}

export default CartsTotal
