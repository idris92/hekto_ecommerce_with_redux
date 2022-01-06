import React,{useState, useEffect} from 'react'
import InputBox from './InputBox'
import Button from './Button'

function CalculateShipping() {
	const [contact, setContact]= useState({});
const loadDetails=()=>{
	let user_id = JSON.parse(localStorage.getItem('user_id'))
		fetch(`http://127.0.0.1:8000/api/contact/${user_id}`)
		.then(response => response.json())
		.then(result =>{
					setContact(result.contact);
		})
}
useEffect(() => {
	loadDetails()
}, [])
    return (
        <div style={{ width: '371px', height: 'auto', backgroundColor: '#F4F4FC' }}>
								<div style={{ margin: '21px', paddingTop: '21px', paddingBottom: '21px' }}>
									<InputBox
										text="text"
										location="Location"
										brd="0"
										bgcolor="transparent"
										clr="#C5CBE3"
										padding="9px 0px "
										btnbottom="2px solid #C7CEE4"
										width="100%"
										mgn="24px"
										font=" Josefin Sans"
                                       
									/>
									<InputBox
										text="text"
										location="House No"
										brd="0"
										bgcolor="transparent"
										clr="#C5CBE3"
										padding="9px 0px"
										btnbottom="2px solid #C7CEE4"
										width="100%"
										mgn="24px"
										font=" Josefin Sans"
									/>
									<InputBox
										text="text"
										location="Postal Code"
										brd="0"
										bgcolor="transparent"
										clr="#C5CBE3"
										padding="9px 0px"
										btnbottom="2px solid #C7CEE4"
										width="100%"
										mgn="24px"
										font=" Josefin Sans"
									/>
									<Button
										border="0"
										background="#FB2E86"
										color="#fff"
										radius="3px"
										font="Lato"
										padding="12px 24px"
										name="Calculate Shipping"
									/>
								</div>
							</div>
    )
}

export default CalculateShipping
