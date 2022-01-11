import React, {useState,useEffect, useContext} from 'react'
import { toast } from 'react-toastify';
import { userContext } from '../context/UserContext';
import Button from './Button';

function Details({sliced,picture1, picture2, picture3, picture4, product_name, color, size, price, inCart, description}){
	
	const {cart, setCart} = useContext(userContext);
	const [picture11, setPicture11] = useState('');
	const [picture12, setPicture12] = useState('');
	const [picture13, setPicture13] = useState('');
	const [picture14, setPicture14] = useState('');

	const handlePicture1=()=>{
		let current = picture11;
		let clickpicture = picture12
		setPicture11(clickpicture);
		setPicture12(current);
	}
	const handlePicture2=()=>{
		let current = picture11;
		let clickpicture = picture13
		setPicture11(clickpicture);
		setPicture13(current);
	}
	const handlePicture3=()=>{
		let current = picture11;
		let clickpicture = picture14
		setPicture11(clickpicture);
		setPicture14(current);
	}

	useEffect(() => {
		setPicture11(picture1)
		setPicture12(picture2)
		setPicture13(picture3)
		setPicture14(picture4)
	}, [picture1])
	console.log(picture12)
	const handleCart=()=>{
		 // console.log('clicked');
        //This is adding products to the local storage
        // localStorage.setItem('products', JSON.stringify({'product_picture':picture, 'product_name':name, 'product_color':color, 'product_size':size, 'product_price':price}));
        let cartItems = JSON.parse(localStorage.getItem("productsInCart"));
        let cartTotal = JSON.parse(localStorage.getItem("Total"));

        if (cartItems !== null) {
            let data = {'product_picture':picture1, 'product_name':product_name, 'product_color':color, 'product_size':size, 'product_price':price, 'inCart':1}
            let names = []
            for (let i = 0; i < cartItems.length; i++){
                names.push(cartItems[i].product_name)
            }    
            if (names.includes(product_name) ){
                    // setCart(cartItems.length);
                    return "";
					toast("product already in cart")
                    // console.log('True');
                }else{
                    // console.log('false')
                    cartItems.push({'product_picture':picture1, 'product_name':product_name, 'product_color':color, 'product_size':size, 'product_price':sliced, 'inCart':1});
                    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
                    localStorage.setItem('Total', parseInt(cartTotal) + parseInt(sliced));
					toast("product added to cart");
                    setCart(cartItems.length);
                }
        //   console.log(data);
        } else {

        cartItems=[{'product_picture':picture1, 'product_name':product_name, 'product_color':color, 'product_size':size, 'product_price':sliced, 'inCart':1}]
        localStorage.setItem('Total', sliced)
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
		toast("product added to cart");
        setCart(cartItems.length);
        }
	}

    
    return (
        <div
					className="row"
					style={{ boxShadow: '0px 0px 25px 10px #F6F4FD', borderRadius: '2px', backgroundColor: '#fff' }}
				>
					<div className="col-lg-2">
						<img src={ `http://127.0.0.1:8000/images/${picture12}`} onClick={handlePicture1} style={{ padding: '8px 8px 4px', width:'151px', height:'155px' }} alt={product_name} />
						<img src={`http://127.0.0.1:8000/images/${picture13}`} onClick={handlePicture2} style={{ padding: '4px 8px', width:'151px', height:'155px' }} alt={product_name} />
						<img src={`http://127.0.0.1:8000/images/${picture14}`} onClick={handlePicture3} style={{ padding: '4px 8px', width:'151px', height:'155px' }} alt={product_name} />
					</div>
					<div className="col-lg-4" style={{maxWidth:'375px', maxHeight:'487px', overflow:'hidden' }}>
						<img src={`http://127.0.0.1:8000/images/${picture11}`} style={{ padding: '8px 4px',width:'420px', height:'487px',}} alt={product_name}/>
					</div>
					<div className="col-lg-6" >
						<div className="" style={{ padding: '8px 25px'}}>
							<div className="" >
								<div className="col-lg-12">
									<p className="card-title" style={{fontFamily:'Josefin Sans', fontSize:'24px'}}>{product_name}</p>
								</div>
							</div>
							<div className="prices">
								<span>
									<i className="far fa-star" style={{color: 'yellow'}} />
									<i className="far fa-star" style={{ marginLeft: '5px', color:'yellow' }} />
									<i className="far fa-star" style={{ marginLeft: '5px', color:'yellow' }} />
									<i className="far fa-star" style={{ marginLeft: '5px', color:'yellow' }} />
									<i className="far fa-star" style={{ marginLeft: '5px', color:'yellow' }} />
								</span>
								<span style={{color:'blue'}}>(22)</span>
							</div>
							<div>
								<span className="card-price">${sliced}</span>
								<span className="card-price-former">${price}</span>
							</div>
							<div className="item-description">
                                <p style={{color:'blue',marginBottom:0, fontFamily:'Josefin Sans'}}>Color: <span style={{color:'#A9ACC6'}}>{color}</span> </p>
								<p>
									{description}
								</p>
							</div>
                            <div style={{marginLeft:'30px'}}>
                                {/* <button style={{border:'none', backgroundColor:'transparent', padding:'5px', fontFamily:'Josefin Sans',color:'blue' }}>Add To Cart</button><span><i className="far fa-heart" style={{padding: '0 8px'}} /></span> */}
								<Button border="0" background="#FB2E86" color="#fff" radius="2px" font="Josefin Sans" padding="8px 24px" name="Add To Cart" click={handleCart} /><span><i className="far fa-heart" style={{padding: '0 8px'}} /></span>
                            </div>
							<div>
                                <p style={{fontFamily:'Josefin Sans',color:'blue' }}>Categories:</p>
                                <p style={{fontFamily:'Josefin Sans',color:'blue' }}>Tags:</p>
                                <p style={{fontFamily:'Josefin Sans',color:'blue' }}>Share:
                                    <span><i className="fab fa-facebook" style={{color: 'blue', paddingLeft:'8px'}} /></span>
                                    <span><i className="fab fa-instagram-square" style={{color: '#FB2E86', paddingLeft:'8px'}} /></span>
                                    <span><i className="fab fa-twitter-square" style={{color: 'blue', paddingLeft:'8px'}} /></span>
                                </p>
                            </div>
						</div>
					</div>
				</div>
    )
}

export default Details
