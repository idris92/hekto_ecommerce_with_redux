import React, {useState, useEffect} from 'react'
import Banner from '../components/Banner'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import { useNavigate } from 'react-router'
import {Link} from 'react-router-dom'


function Register() {
    const navigate = useNavigate();
    const [payload, setPayload] = useState({
        email:"",
        password:""
    })

    const handleChange = (e) =>{
        setPayload({...payload, [e.target.id]: e.target.value})
    }
    // console.log(payload.email, payload.password);
    const handleSubmit = () =>{
        var myHeaders = new Headers();
        console.log(myHeaders);
        myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Authorization","Bearer" + JSON.parse(localStorage.getItem('jwt')));

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(payload),
        redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/api/register", requestOptions)
        .then(response => response.json())
        .then(result =>{
            if(result){
                localStorage.setItem("jwt", JSON.stringify(result.token));
                // console.log('register_result',result);
                navigate('/left');
            }
            
            }
         )
        .catch(error =>{
            alert("Something went wrong! Please check your internet connection....");
             console.log('error', error)
        
        });
    }

    const checkUser=()=>{
        if(localStorage.getItem('jwt')){
            navigate('/left');
        }
    }
    
    useEffect(() => {
        checkUser()
      }, [])
    return (
        <div>
             <Banner content="My Account" title="My Account"/>
            {/* <TopFilter/> */}
            <div className="container" style={{textAlign:'center'}}>
                <h3 style={{fontFamily:'Roboto', fontWeight:900, fontSize:'32px'}}>Register</h3>
                <p style={{ color:'#9096B2'}}>Please login using account detail below.</p>
            <div style={{width: '30%', margin:'auto'}}>
                <InputBox id='email' value={payload.email} change={handleChange} text="text" location="Email Address" brd="1px solid #C2C5E1" bgcolor="transparent" clr="#000" padding="8px 12px " btnbottom="1px solid #C7CEE4" width="100%" mgn="24px" font="Josefin Sans" radius='2px' />
                <InputBox id='password' value={payload.password} change={handleChange} text="password" location="Password" brd="1px solid #C2C5E1" bgcolor="transparent" clr="#000" padding="8px 12px " btnbottom="1px solid #C7CEE4" width="100%" mgn="8px" font="Josefin Sans" radius='2px' />
                <p style={{textAlign:'left', fontSize:'14px',fontFamily:'lato', color:'#9096B2'}}>Forget Your Password</p>
                <Button click={handleSubmit} border="0" background="#FB2E86" color="#fff" radius="3px" font="Lato" padding="12px 24px" name="Register" width='100%' />
                <p style={{fontFamily:'lato', fontSize:'14px', color:'#9096B2', marginTop:'9px'}}>Already have an Account? <Link to='/login'>Login</Link></p>
            </div>
            </div>
        </div>
    )
}

export default Register
