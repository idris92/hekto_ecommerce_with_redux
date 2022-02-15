import React,{useEffect, useState, useContext} from 'react'
import Banner from '../components/Banner'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import { useNavigate} from 'react-router'
import {Link} from 'react-router-dom'
import {userContext} from '../context/UserContext'
import { toast } from 'react-toastify'

function Login() {
    const {jwt, setJwt}= useContext(userContext);
    const {userId, setUserId}= useContext(userContext);
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
        myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Authorization","Bearer" + JSON.parse(localStorage.getItem('jwt')));

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(payload),
        redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/api/login", requestOptions)
        .then(response => response.json())
        .then(result =>{
            // console.log('id', result.user.id);
                if(result.msg ="login"){
                    setJwt(result.jwt)
                    setUserId( result.user.id)
                    localStorage.setItem("jwt", JSON.stringify(result.token));
                    localStorage.setItem("user_id", result.user.id);
                    navigate('/');
                    toast("successfully logged in");
                }
                
                
            }
         )
        .catch(error =>{
            // alert("Something went wrong! Please check your internet connection....");
            //  console.log('error', error)
            toast('Email or Password incorrect')
        
        });

       

        
    }

    const checkUser=()=>{
        if(localStorage.getItem('jwt')){
            navigate('/left');
        }else{
            navigate('/login');
        }
    }

    useEffect(() => {
        checkUser()
      }, [])


    return (
        <div className='login'>
            <Banner content="My Account" title="My Account"/>
            {/* <TopFilter/> */}
            <div className='top'>
            <div className="container">
                <h3>Login</h3>
                <p>Please login using account detail below.</p>
            <div className="container2">
                <InputBox id='email' value={payload.email} change={handleChange} text="text" location="Email Address" brd="1px solid #C2C5E1" bgcolor="transparent" clr="#000" padding="8px 12px " btnbottom="1px solid #C7CEE4" width="100%" mgn="24px" font="Josefin Sans" radius='2px' />
                <InputBox id='password' value={payload.password} change={handleChange} text="password" location="Password" brd="1px solid #C2C5E1" bgcolor="transparent" clr="#000" padding="8px 12px " btnbottom="1px solid #C7CEE4" width="100%" mgn="8px" font="Josefin Sans" radius='2px' />
                <p className='forget'>Forget Your Password</p>
                <Button click={handleSubmit} border="0" background="#FB2E86" color="#fff" radius="3px" font="Lato" padding="12px 24px" name="Sign In" width='100%' />
                <p className='account'>Don't have an account? <Link to='/register'>Create Account</Link></p>
            </div>
            </div>
            </div>
        </div>
        
    )
}

export default Login
