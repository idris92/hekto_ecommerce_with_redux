import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { userContext } from '../context/UserContext';
import { funcCart } from '../functions/AddToCart';

function GridFrame({ id, name, price, sliced, picture, description, fav = null, color, size, product }) {
	const navigate = useNavigate();
	const { payload, setPayload } = useContext(userContext);

	const { jwt, setJwt } = useContext(userContext);
	const { cart, setCart } = useContext(userContext);

	const { userId, setUserId } = useContext(userContext);
	const { cartProduct, setCartProduct } = useContext(userContext);

	const [ favourite, setFavourite ] = useState(fav);
	const { updatedFavourite, setUpdatedFavourite } = useContext(userContext);

	const handleCart = () => {
		let output = funcCart(id, picture, name, color, size, price, sliced);
        setCart(output);
	};

	const handleSingle = () => {
		navigate(`/details/${id}`);
	};
	// console.log('picture_url', picture);
	const handleFavourite = () => {
		if (localStorage.getItem('user_id') === null) {
			favourite === '1' ? setFavourite('0') : setFavourite('1');
		} else {
			var myHeaders = new Headers();
			myHeaders.append('Content-Type', 'application/json');
			// myHeaders.append('Authorization', 'Bearer' + JSON.parse(localStorage.getItem('jwt')));

			var requestOptions = {
				method: 'POST',
				headers: myHeaders,
				body: JSON.stringify({
					user_id: localStorage.getItem('user_id'),
					product_id: id,
					favourite: favourite === '1' ? '0' : '1'
				}),
				redirect: 'follow'
			};

			fetch('http://127.0.0.1:8000/api/favourite', requestOptions)
				.then((response) => response.json())
				.then((result) => {
					if (favourite === '1') {
						setFavourite('0');
						toast('unfavourite');
					} else {
						setFavourite('1');
						toast('favourite');
					}
				})
				.catch((error) => {
					alert('Something went wrong! Please check your internet connection....');
					console.log('error', error);
				});
		}
	};

	return (
		<div className="col-lg-3" style={{ marginBottom: '41px', marginRight: '71px' }}>
			<div style={{ width: '270px', height: '280px', backgroundColor: '#F6F7FB', overflow: 'hidden' }}>
				<img
					src={`http://127.0.0.1:8000/images/${picture}`}
					alt=""
					style={{ width: '100%', cursor: 'pointer' }}
					onClick={handleSingle}
				/>
			</div>
			<div style={{ textAlign: 'center', marginTop: '18px', color: '#151875' }}>
				<p style={{ fontFamily: 'Roboto', marginBottom: '0px' }}>{name}</p>
				<div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
					<div style={{ width: '10px', height: '10px', backgroundColor: '#DE9034', borderRadius: '100%' }} />
					<div
						style={{
							width: '10px',
							height: '10px',
							backgroundColor: '#EC42A2',
							borderRadius: '100%',
							marginLeft: '6px'
						}}
					/>
					<div
						style={{
							width: '10px',
							height: '10px',
							backgroundColor: '#8568FF',
							borderRadius: '100%',
							marginLeft: '6px'
						}}
					/>
				</div>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<p style={{ color: '#151875', fontFamily: 'Josefin Sans', fontSize: '14px' }}>
						${sliced === null ? price : sliced}
					</p>
					<p
						style={{
							textDecoration: 'line-through',
							color: '#FB2E86',
							fontFamily: 'Josefin Sans',
							fontSize: '14px',
							marginLeft: '10px'
						}}
					>
						${price}
					</p>
				</div>
				<div className>
					{/* <button onClick={handleCart} style={{cursor:'pointer'}}>Add to Cart</button> */}
					<i className="fas fa-cart-plus item-actions" style={{ cursor: 'pointer' }} onClick={handleCart} />
					<i
						className={favourite === '1' ? 'fas fa-heart item-actions' : 'far fa-heart item-actions'}
						style={{ cursor: 'pointer' }}
						onClick={handleFavourite}
					/>
					<i className="fas fa-search-plus item-actions" style={{ cursor: 'pointer' }} />
				</div>
			</div>
		</div>
	);
}

export default GridFrame;
