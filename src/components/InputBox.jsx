import React from 'react'

function InputBox({ value=null, change=null, text=null, location=null,brd=null, bgcolor=null, padding=null, btnbottom=null, width=null, mgn=null, font=null, clr=null,radius=null, id=null}) {
    return (
        <input className="inputBox" id={id} value={value} onChange={change}type={text} placeholder={location} style={{border:brd, backgroundColor:bgcolor,padding:padding, borderBottom:btnbottom, width:width, marginBottom:mgn, fontFamily:font, color:clr, borderRadius:radius}} />
    )
}

export default InputBox
