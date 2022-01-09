import React, {useContext, useEffect, useState} from 'react';
import Banner from '../components/Banner';
import CartProduct from '../components/CartProduct';
import CartsTotal from '../components/CartsTotal';
import Button from '../components/Button';
import CalculateShipping from '../components/CalculateShipping';
import InputBox from '../components/InputBox';
import { useNavigate } from 'react-router';
import {Link} from 'react-router-dom';
import { userContext } from '../context/UserContext';
import { toast } from 'react-toastify';

function ShoppingCart() {
	const navigate = new useNavigate();
	const [contacts, setContacts]= useState([]);
	const {glocalInCart, setglocalInCart}= useContext(userContext);
  	const {glocalPrice, setglocalPrice}= useContext(userContext);
	const {cartTotal, setCartTotal}= useContext(userContext); 
	const {cartProduct, setCartProduct} = useContext(userContext);
	const [products, setProducts]= useState(JSON.parse(localStorage.getItem('productsInCart')));
	const {cart, setCart}= useContext(userContext);

	let cartItems = JSON.parse(localStorage.getItem('productsInCart'));

	useEffect(() => {
			let user_id = JSON.parse(localStorage.getItem('user_id'));
			if (user_id){
				fetch(`http://127.0.0.1:8000/api/contact/${user_id}`)
				.then(response => response.json())
				.then(result =>{
					if(result){
						setContacts(result.contact);
						setCartTotal(JSON.parse(localStorage.getItem('Total')))
					
					}
					
				}
			 )
			}else{
				toast('You are not logged in')
				// alert('You are not logged in');
				navigate('/login');
			}
		
	}, [cartTotal])


	const handleShopping=()=>{
		navigate('/grid')
	}

	const handleClear=()=>{
		localStorage.removeItem('productsInCart')
		localStorage.removeItem('Total')
		setCartTotal(0);
		setCart(0);
	}
	
	console.log(contacts);
	return (
		<div>
			{
				cartItems !== null 
				? 
			
			<div>
			<Banner content="Shopping Cart" title="Shopping Cart" />
			<div className="container" style={{marginTop:'32px'}}>
				<div className="row">
					<div className="col-lg-8">
						<table className="table table-borderless">
							<thead>
								<tr>
									<th scope="col" style={{ color: '#1D3178' }}>
										Product
									</th>
									<th scope="col" style={{ color: '#1D3178', paddingLeft: '8px' }}>
										Price
									</th>
									<th scope="col" style={{ color: '#1D3178' }}>
										Quantity
									</th>
									<th scope="col" style={{ color: '#1D3178' }}>
										Total
									</th>
								</tr>
							</thead>
							<tbody>
								{
									cartItems.map((product, index)=>(
										<CartProduct key={index} idx = {index} product = {product} amount= {product.product_price} inCart={product.inCart} name={product.product_name} picture={product.product_picture} color={product.product_color} size={product.product_size} />
										
									))
								// console.log('CartItems', cartItems)
										
								
								}

							{/* <CartProduct /> */}
								
							</tbody>
						</table>
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<Button
								border="0"
								background="#FB2E86"
								color="#fff"
								radius="2px"
								font="Josefin Sans"
								padding="8px 14px"
								name="Continue Shopping"
								click={handleShopping}
							/>
							<Button
								border="0"
								background="#FB2E86"
								color="#fff"
								radius="2px"
								font="Josefin Sans"
								padding="8px 24px"
								name="Clear Cart"
								click={handleClear}
							/>
						</div>
					</div>
					<div className="col-lg-4">
						<p
							style={{
								color: '#1D3178',
								fontFamily: 'roboto',
								fontWeight: 900,
								margin: '8px 0 32px',
								textAlign: 'center'
							}}
						>
							Cart Totals
						</p>
						{
							contacts.length !== 0?
							contacts.map((contact)=>(
								<CartsTotal  contactEmail={contact.email}/>
							)):
							<CartsTotal/>
							// contacts.length === 0 ? 'yes': 'no'
						}
						

						<div>
							<p
								style={{
									color: '#1D3178',
									fontFamily: 'roboto',
									fontWeight: 900,
									margin: '32px 0 32px',
									textAlign: 'center'
								}}
							>
								Calculate Shopping
							</p>
							<CalculateShipping/>
						</div>
					</div>
				</div>
			</div>
			</div>
			: 
			<div className='container' style={{textAlign:'center', marginTop:'18px'}}><p style={{fontFamily:'roboto', fontSize:'18px', fontWeight:'bold', color:'#FB2E86'}}>No item in cart</p></div>
							}
		</div>
	);
}

export default ShoppingCart;
