import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { userContext } from '../context/UserContext';
import { toast } from 'react-toastify';

function Nav() {
	const navigate = new useNavigate();
	const { jwt, setJwt } = useContext(userContext);
	const { cart, setCart } = useContext(userContext);
	const handleLogout = () => {
		// localStorage.removeItem('jwt');
		localStorage.removeItem('jwt');
		localStorage.removeItem('user_id');
		toast('logged out');
		navigate('/login');
	};

	const checkCart = () => {
		let cartItems = JSON.parse(localStorage.getItem('productsInCart'));

		if (cartItems !== null) {
			let productKey = Object.keys(cartItems);
			setCart(productKey.length);
		} else {
			setCart(0);
		}
	};

	useEffect(() => {
		checkCart();
	}, []);
	return (
		<div>
			<nav className="navbar head1 navbar-expand-lg navbar-light bg-light">
				<div className="container">
					{/* 
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> */}
					<div className="collapse navbar-collapse " id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
							<li className="nav-item">
								<a className="nav-link anc top-level" href="#">
									<i className="far fa-envelope" /> idrisdoyin@gmail.com
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link anc top-level" href="#" style={{ marginLeft: '36px' }}>
									<i className="fas fa-phone-alt" /> +2348030492399
								</a>
							</li>
						</ul>
						<ul className="navbar-nav ul1 me-auto mb-2 mb-lg-0">
							{/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle  anc top-level" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    English
                  </a>
                  <ul className="dropdown-menu top-level" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item top-level" href="#">Action</a></li>
                    <li><a className="dropdown-item top-level" href="#">Another action</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item top-level" href="#">Something else here</a></li>
                  </ul>
                </li> */}
							{/* <li className="nav-item dropdown">
                  <a className="nav-link anc dropdown-toggle top-level" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{marginLeft: '15px'}}>
                    USD
                  </a>
                  <ul className="dropdown-menu top-level" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item top-level" href="#">Action</a></li>
                    <li><a className="dropdown-item top-level" href="#">Another action</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item top-level" href="#">Something else here</a></li>
                  </ul>
                </li> */}

							{localStorage.getItem('jwt') !== null ? (
								<li className="nav-item" style={{ marginLeft: '15px' }}>
									<a
										className="nav-link anc top-level"
										onClick={handleLogout}
										style={{ textDecoration: 'none', color: '#fff', cursor: 'pointer' }}
									>
										Logout<i className="far fa-user" />
									</a>
								</li>
							) : (
								<li className="nav-item" style={{ marginLeft: '15px' }}>
									<Link
										className="nav-link anc top-level"
										to="/login"
										style={{ textDecoration: 'none', color: '#fff', cursor: 'pointer' }}
									>
										Login<i className="far fa-user" />
									</Link>
								</li>
							)}
							{/* <li className="nav-item" style={{marginLeft: '15px'}}>
                  <Link className="nav-link anc top-level" to='' style={{textDecoration:'none', color:'#fff'}}>{(jwt!==null)?'Logout':'Login'}<i className="far fa-user" /></Link> 
                 </li> */}
							<li className="nav-item" style={{ marginLeft: '15px' }}>
								<a className="nav-link anc top-level" href="#">
									wishlist <i className="far fa-heart" />
								</a>
							</li>
							<li className="nav-item cart-container" style={{ marginLeft: '15px' }}>
								<Link className="nav-link anc top-level" to="/cart">
									<i className="fas fa-shopping-cart" />
								</Link>
								{/* <Link className="nav-link anc top-level" to='/cart'><p>Cart</p></Link> */}
								<p className="counter">{cart}</p>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<nav className="navbar head2 navbar-expand-lg navbar-light bg-light">
				<div className="container">
					<a className="navbar-brand navbar-brand-b hekto" href="#">
						Hekto
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link anc2 active" aria-current="page" href="/">
									Home
								</a>
							</li>
							{/* <li className="nav-item">
                  <a className="nav-link anc2" style={{marginLeft: '35px'}} href="pages.html">pages</a>
                </li> */}
							<li className="nav-item">
								<a className="nav-link anc2" style={{ marginLeft: '35px' }} href="/left">
									Products
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link anc2" style={{ marginLeft: '35px' }} href="#">
									Blog
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link anc2" style={{ marginLeft: '35px' }} href="/grid">
									Shop
								</a>
							</li>
							{localStorage.getItem('jwt') !== null ? (
								<li className="nav-item">
									<a className="nav-link anc2" style={{ marginLeft: '35px' }} href="/contact">
										Contact
									</a>
								</li>
							) : (
								''
							)}
						</ul>
						<form className="d-flex">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button className="btn btn2 btn-outline-success" type="submit">
								<i className="fas btn-search fa-search" />
							</button>
						</form>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Nav;
