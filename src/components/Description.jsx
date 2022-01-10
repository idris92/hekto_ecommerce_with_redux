import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";

function Description({description, info, video, review}) {
    const {id} = useParams();
    const [display, setDisplay] =useState('');
   
    const AddInfo = ()=>{
        if (info === null){
            setDisplay('No Additional Info')
        }else{
            setDisplay(info)
        }
        
    }

    const AddDesc = ()=>{
        if (description === null){
            setDisplay('No Description')
        }else{
            setDisplay(description)
        }
    }

    const AddReview = ()=>{
        if (review === null){
            setDisplay('No Review')
        }else{
            setDisplay(review)
        }
    }

    const AddVideo = ()=>{
        if (video === null){
            setDisplay('No Video')
        }else{
            setDisplay(video)
        }
    }
  useEffect(() => {
     AddDesc()
  }, [])
    return (
        <div className="row"  style={{marginTop:"131px"}}>
            <span className="col-lg-2" style={{ fontFamily:'Josefin Sans', fontSize:'24px'}}><a onClick={AddDesc} style={{textDecoration:'none', color:'#151875', cursor:'pointer'}}>Description</a></span>
            <span className="col-lg-2" style={{color:'#151875', fontFamily:'Josefin Sans', fontSize:'24px'}}><a onClick={AddInfo} style={{textDecoration:'none', color:'#151875', cursor:'pointer'}}>Additional Info</a></span>
            <span className="col-lg-2" style={{color:'#151875', fontFamily:'Josefin Sans', fontSize:'24px'}}><a onClick={AddReview} style={{textDecoration:'none', color:'#151875', cursor:'pointer'}}>Reviews</a></span>
            <span className="col-lg-2" style={{color:'#151875', fontFamily:'Josefin Sans', fontSize:'24px'}}><a onClick={AddVideo} style={{textDecoration:'none', color:'#151875', cursor:'pointer'}}>Video</a></span>

            <div id="desctiption" style={{marginTop:'61px'}}>
                {/* <p style={{color:'#151875', fontFamily:'Josefin Sans', fontSize:'24px'}}>Varius Tempor</p> */}
                <p><span style={{color:'#A9ACC6'}}>{display}</span></p>
            </div>
            {/* <div id="" style={{marginTop:'36px'}}>
                <p style={{color:'#151875', fontFamily:'Josefin Sans', fontSize:'24px'}}>More Details</p>
                <p style={{color:'#A9ACC6'}}><i className="fas fa-arrow-right" style={{marginRight:'8px'}}></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti ut eveniet,voluptatibus fuga impedit delectus sit labore.</p>
                <p style={{color:'#A9ACC6'}}><i className="fas fa-arrow-right" style={{marginRight:'8px'}}></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti ut eveniet,voluptatibus fuga impedit delectus sit labore.</p>
                <p style={{color:'#A9ACC6'}}><i className="fas fa-arrow-right" style={{marginRight:'8px'}}></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti ut eveniet,voluptatibus fuga impedit delectus sit labore.</p>
                <p style={{color:'#A9ACC6'}}><i className="fas fa-arrow-right" style={{marginRight:'8px'}}></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti ut eveniet,voluptatibus fuga impedit delectus sit labore.</p>
            </div> */}
        </div>
    )
}

export default Description
