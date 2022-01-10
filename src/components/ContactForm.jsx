import React, {useState,useEffect, useContext} from 'react'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import { toast } from 'react-toastify';


function ContactForm() {
     const [contacts, setContacts] = useState({
        email:'',
        firstname:'',
        lastname:'',
        address:'',
        apartment:'',
        city:'',
        country:'',
        postalcode:''
    })

    const [button, setButton]= useState('');

    const handleChange = (e) =>{
        setContacts({...contacts, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e)=>{
        let user_id = JSON.parse(localStorage.getItem('user_id'))
        let contacted = contacts;
        contacted['user_id'] = user_id ;
        if (contacts.email==='' || contacts.lastname===''|| contacts.address===''|| contacts.city===''||contacts.country===''||contacts.postal===''){
            alert('please fill up all the required fields')
        }else if(button === 'Update'){
            var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Authorization","Bearer" + JSON.parse(localStorage.getItem('jwt')));

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(contacted),
        redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/api/update", requestOptions)
        .then(response => response.json())
        .then(result =>{
                if(result){
                    toast('contact updated saved.')
                    // alert('contact updated saved.')
                }
                
            }
         )
        .catch(error =>{
            alert("Something went wrong! Please check your internet connection....");
             console.log('error', error)
        
        });

        }else{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Authorization","Bearer" + JSON.parse(localStorage.getItem('jwt')));

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(contacted),
        redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/api/contact", requestOptions)
        .then(response => response.json())
        .then(result =>{
                if(result){
                    setContacts({...contacts, [e.target.id]: ''})
                    toast('contact succesfully saved.');
                    // alert('contact succesfully saved.')
                    console.log(result)
                }
                
            }
         )
        .catch(error =>{
            alert("Something went wrong! Please check your internet connection....");
             console.log('error', error)
        
        });

    }
    }
    const checkContact=(e)=>{
        let user_id = JSON.parse(localStorage.getItem('user_id'))
        fetch(`http://127.0.0.1:8000/api/contact/${user_id}`)
        .then(response => response.json())
        .then(result =>{
                if(result.contact.length !== 0){
                    result.contact.map((respond)=>(
                        setContacts({
                            ...contacts, 
                            email:respond.email, 
                            firstname:respond.firstname, 
                            lastname:respond.lastname,
                            address:respond.address,
                            apartment:respond.apartment===null ? '':respond.apartment,
                            city:respond.city,
                            country:respond.country,
                            postalcode:respond.postalcode,
                        })
                        // console.log(Object.values(respond))
                    ));
                    setButton('Update')
                }else{
                    setButton('Save')
                }
                
            }
         )
    }

    useEffect(() => {
       checkContact()
    }, [])

    // console.log(contacts);
    return (
        <div className='col-lg-8' style={{backgroundColor:'#F8F8FD'}}>
        <div style={{display:'flex', justifyContent:'space-between', padding:'32px 18px 18px'}}>
            <p style={{color:'#1D3178', fontFamily:'Roboto', fontWeight:900, fontSize:'18px'}}>Contact Information</p>
            <p style={{color:'#C1C8E1', fontFamily:'Lato', fontWeight:500, fontSize:'14px'}}>Already have an account?<span style={{paddingLeft:'8px'}}>Login</span></p>
        </div>
        <div style={{padding:'32px 18px 18px'}}>
                <InputBox text="text" value={contacts.email} id="email" change={handleChange} location="Email or mobile phone number" brd="0" bgcolor="transparent" clr="#000" padding="9px 0px" btnbottom="2px solid #C7CEE4" width="100%" mgn="24px" font="Josefin Sans" /> 
                    
                <input type="checkbox" checked />
                <label
                    class="form-check-label"
                    for="flexCheckChecked"
                    style={{ fontFamily: 'lato', fontWeight: 500, fontSize: '12px', color: '#8A91AB'  }} >
                    <span style={{ paddingLeft: '8px' }}>Keep me up to date on news and excluive offers</span>
                </label>
            
        </div>
        <div style={{padding:'64px 18px 18px'}}>
            <p style={{color:'#1D3178', fontFamily:'Roboto', fontWeight:900, fontSize:'18px'}}>Shipping address</p>
            <div style={{display:'flex', justifyContent:'space-between', gap:25}}>
                    <InputBox text="text" value={contacts.firstname} change={handleChange} id="firstname" location="First name (optional)" brd="0" bgcolor="transparent" clr="#000" padding="9px 0px" btnbottom="2px solid #C7CEE4" width="100%" mgn="24px" font="Josefin Sans" /> 
                    <InputBox text="text" value={contacts.lastname} change={handleChange} id="lastname" location="Last name" brd="0" bgcolor="transparent" clr="#000" padding="9px 0px" btnbottom="2px solid #C7CEE4" width="100%" mgn="24px" font="Josefin Sans" /> 
            </div>
            <InputBox text="text" value={contacts.address} change={handleChange} id="address" location="Address" brd="0" bgcolor="transparent" clr="#000" padding="9px 0px" btnbottom="2px solid #C7CEE4" width="100%" mgn="24px" font="Josefin Sans" /> 
            <InputBox text="text" value={contacts.apartment} change={handleChange} id = 'apartment' location="Appartment,suit,e.t.c (optinal)" brd="0" bgcolor="transparent" clr="#000" padding="9px 0px" btnbottom="2px solid #C7CEE4" width="100%" mgn="24px" font="Josefin Sans" /> 
            <InputBox text="text" value={contacts.city} change={handleChange} id='city' location="City" brd="0" bgcolor="transparent" clr="#000" padding="9px 0px" btnbottom="2px solid #C7CEE4" width="100%" mgn="24px" font="Josefin Sans" /> 
            <div style={{display:'flex', justifyContent:'space-between', gap:25}}>
                    <InputBox text="text" value={contacts.country} change={handleChange} id ='country' location="Country" brd="0" bgcolor="transparent" clr="#000" padding="9px 0px" btnbottom="2px solid #C7CEE4" width="100%" mgn="24px" font="Josefin Sans" /> 
                    <InputBox text="text" value={contacts.postalcode} change={handleChange} id='postalcode' location="Postal Code" brd="0" bgcolor="transparent" clr="#000" padding="9px 0px" btnbottom="2px solid #C7CEE4" width="100%" mgn="24px" font="Josefin Sans" /> 
            </div>
            <Button
                border="0"
                background="#FB2E86"
                color="#fff"
                radius="3px"
                font="Lato"
                padding="12px 24px"
                name={button}
                margin='24px 0px 12px'
                click={handleSubmit}
            />
        </div>
    </div>
    )
}

export default ContactForm
