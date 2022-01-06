import React from 'react'

function Button({border=null, background=null, color=null,radius=null, font=null, padding=null, name=null, width=null, margin=null, click=null}) {
    return (
        <button onClick={click} style={{border:border, backgroundColor:background, color:color, borderRadius:radius, fontFamily:font, padding:padding, width:width, margin:margin}}>{name}</button>
    )
}

export default Button
