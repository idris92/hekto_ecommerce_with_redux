import React, { useState, useContext, useEffect } from 'react';
import { userContext } from '../context/UserContext';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { funcCart } from '../functions/AddToCart';

function ListFrame({id,name, price, sliced, picture, description,fav, color, size}) {
	const navigate = useNavigate();
	const{payload, setPayload}= useContext(userContext);

	const {jwt, setJwt}= useContext(userContext);

    const {userId, setUserId}= useContext(userContext);
	const {cart, setCart}= useContext(userContext);

	const [favourite, setFavourite]= useState(fav);
	const {updatedFavourite, setUpdatedFavourite}= useContext(userContext);



	const handleSingle =()=>{
        navigate(`/details/${id}`)
    }

	const handleCart = () => {
		let output = funcCart(id, picture, name, color, size, price, sliced);
        setCart(output);
	};



	const handleFavourite = () =>{
		if (localStorage.getItem('user_id')===null){
            favourite === '1'? setFavourite('0'):setFavourite('1');
           
        }else{
		
		var myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");
			myHeaders.append("Authorization","Bearer" + JSON.parse(localStorage.getItem('jwt')));
	
			var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: JSON.stringify({'user_id':localStorage.getItem('user_id'), 'product_id':id, 'favourite':favourite==='1' ? '0':'1'}),
			redirect: 'follow'
			};

			
	
			fetch("http://127.0.0.1:8000/api/favourite", requestOptions)
			.then(response => response.json())
			.then(result =>{
				if (favourite === '1'){
					setFavourite('0');
				}else{
					setFavourite('1');
				}
	
					
				}
			 )
			.catch(error =>{
				alert("Something went wrong! Please check your internet connection....");
				 console.log('error', error)
			
			});
		}
	  }


	return (
		<div style={{ marginBottom: '12px' }}>
			<div className="card">
				<div className="card-body">
					<div className="single-item row">
						<div
							className="col-4"
							style={{ width: '270px', height: '280px', backgroundColor: '#F6F7FB', overflow: 'hidden' }}
						>
							<img src={`http://127.0.0.1:8000/images/${picture}`} alt="" className="card-img-top" style={{}} onClick={handleSingle}/>
						</div>
						<div className="col-8">
							<div className="row">
								<div className="col-lg-4">
									<p className="card-title">{name}</p>
								</div>
								<div className="col-lg-8">
									<div className>
										<span className="sm-circle bg-warning " />
										<span className="sm-circle bg-danger" style={{ marginLeft: '5px' }} />
										<span className="sm-circle bg-primary" style={{ marginLeft: '5px' }} />
									</div>
								</div>
							</div>
							<div className="prices">
								<span className="card-price">${sliced === null ? price : sliced}</span>
								<span className="card-price-former">${price}</span>
								<span>
									<i className="far fa-star" />
									<i className="far fa-star" style={{ marginLeft: '5px' }} />
									<i className="far fa-star" style={{ marginLeft: '5px' }} />
									<i className="far fa-star" style={{ marginLeft: '5px' }} />
									<i className="far fa-star" style={{ marginLeft: '5px' }} />
								</span>
							</div>
							<div className="item-description">
								<p>{description}</p>
							</div>
							<div className>
								<i className="fas fa-cart-plus item-actions" style={{cursor:'pointer'}} onClick={handleCart}/>
								<i className={favourite === '1' ?"fas fa-heart item-actions":"far fa-heart item-actions"} style={{cursor:'pointer'}} onClick={handleFavourite}/>
								<i className="fas fa-search-plus item-actions" style={{cursor:'pointer'}}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ListFrame;
