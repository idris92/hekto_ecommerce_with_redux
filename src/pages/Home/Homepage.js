import React, { useState, useEffect, useContext } from 'react';
import CardTrending from '../../components/CardTrending';
import FeaturedCard from '../../components/FeaturedCard';
import LateCard from '../../components/LateCard';
import Nav from '../../components/Nav';
import PreFooter from '../../components/PreFooter';
import Services from '../../components/Services';
import TopCard from '../../components/TopCard';
import './Homepage.css';
import { funcCart } from '../../functions/AddToCart';
import { userContext } from '../../context/UserContext';
import { uniq } from 'lodash';
import { useNavigate } from 'react-router';

export default function Homepage() {
    const navigate = useNavigate()
	const [ featured, setFeatured ] = useState([]);
    const [ trending, setTrending ] = useState([]);
    const [ top, setTop ] = useState([]);
	const [ unique, setUnique ] = useState({});
	const { cart, setCart } = useContext(userContext);

    const handleSingle =()=>{
        navigate(`/details/${unique.id}`)
    }
    const shopNow=()=>{
        navigate('/grid');
    }

	const handleCart = () => {
		let output = funcCart(
			unique.id,
			unique.Picture_url1,
			unique.Name,
			unique.Color,
			unique.Size,
			unique.Price,
			unique.Price - ((unique.SlicedPercentage/100)* unique.Price)
		);
		setCart(output);
	};

    const loadTrending=()=>{
        fetch(`http://127.0.0.1:8000/api/trending`)
        .then((response) => response.json())
        .then((result) => {
			if (result) {
				setTrending(result.trending);
			
			}
		});
    }

    
    const loadTop=()=>{
        fetch(`http://127.0.0.1:8000/api/top`)
        .then((response) => response.json())
        .then((result) => {
			if (result) {
				setTop(result.top);
			
			}
		});
    }

	const loadFeatured = () => {
		fetch(`http://127.0.0.1:8000/api/featured`)
        .then((response) => response.json())
        .then((result) => {
			if (result) {
				setFeatured(result.featured);
			
			}
		});
	};

	const loadUnique = () => {
		fetch(`http://127.0.0.1:8000/api/unique`).then((response) => response.json()).then((result) => {
			if (result) {
				setUnique(result.unique);
				
			}
		});
	};
	useEffect(() => {
		loadFeatured();
		loadUnique();
        loadTrending();
        loadTop();
	}, []);
	// console.log(top.Color);
	return (
		<div className="main_container">
			{/* <Nav
        active ="active"
        /> */}
			<div className="carousel">
				<div className="container banner">
					<div className="row">
						<div className="col-lg-1">
							<img src="images/lamp.png" alt="" className="lamp-top" />
						</div>
						<div className="col-lg-6">
							<div className="wrapper" style={{ marginLeft: '24px', marginTop: '80px' }}>
								<h2 className="furniture-b">Best Furniture For Your Castle....</h2>
								<h1 className="furniture">New Furniture Collection Trends in 2020</h1>
								<p className="sub-text">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in
									phasellus non in justo.
								</p>
								<button className="btn-shop" onClick={shopNow}>Shop now</button>
							</div>
						</div>
						<div className="col-lg-5">
							<div style={{ maxWidth: '100%', overflow: 'hidden' }}>
								<img src="images/chair.png" alt="" className="" style={{ maxWidth: '100%' }} />
							</div>
						</div>
					</div>
					<div className="circled">
						<span className="sm-circled circle " />
						<span className="sm-circled circle" />
						<span className="sm-circled " />
					</div>
				</div>
			</div>
			<div className="container">
				<h2 className="featured">featured Products</h2>

				<div className="row">
					{featured
						.slice(0, 4)
						.map((feature) => (
							<FeaturedCard
								color={feature.Color}
								size={feature.Size}
								price={feature.Price}
								key={feature.id}
								id={feature.id}
								picture={feature.Picture_url1}
								name={feature.Name}
								sliced={feature.Price - feature.SlicedPercentage / 100 * feature.Price}
							/>
						))
					// console.log(featured)
					}
				</div>

				<h2 className="featured">Leatest Products</h2>
				<div className="ltn-nav">
					<span id="nav-ltn">new arrival</span>
					<span id="nav-ltn">best seller</span>
					<span id="nav-ltn">feature</span>
					<span id="nav-ltn">special offer</span>
				</div>

				<div className="row">
					<LateCard img="images/chair.png" />

					<LateCard img="images/wrist-watch.jpg" />

					<LateCard img="images/chair.png" />
					<LateCard img="images/chair.png" />

					<LateCard img="images/wrist-watch.jpg" />

					<LateCard img="images/chair.png" />
				</div>

				<h2 className="featured-offer">What Shopex Offer!</h2>

				<Services />
			</div>
			<div className="unique-features">
				<div className="container">
					<div className="row">
						<div className="col-lg-7">
							<img src={`http://127.0.0.1:8000/images/${unique.Picture_url1}`} alt="" onClick={handleSingle}  />
						</div>

						<div className="col-lg-5" style={{paddingLeft:'8px', paddingRight:'8px'}}>
							<h1 className="unique-title">Unique Features Of latest & Trending Products</h1>
							<div className="row">
								<div className="col-lg-1">
									<span id="color-circle1"> </span>
								</div>
								<div style={{ marginLeft: '8px' }} className="col-lg-10">
									<p className="unique-text">
										All frames constructed with hardwood solids and laminates
									</p>
								</div>

								<div className="col-lg-1">
									<span id="color-circle2" />
								</div>
								<div style={{ marginLeft: '8px' }} className="col-lg-10">
									<p className="unique-text">
										Reinforced with double wood dowels, glue, screw - nails corner blocks and
										machine nails
									</p>
								</div>

								<div className="col-lg-1">
									<span id="color-circle3" />
								</div>
								<div style={{ marginLeft: '8px' }} className="col-lg-10">
									<p className="unique-text">Arms, backs and seats are structurally reinforced</p>
								</div>

								<div className="col-lg-3">
									<button id="uni-btn" onClick={handleCart}>
										Add to cart
									</button>
								</div>
								<div style={{ marginLeft: '18px' }} className="col-lg-8">
									<p
										className="subtext-uni"
										style={{ fontFamily: 'Josefin Sans', fontSize: '14px', color: '#151875', fontWeight:"600px" }}
									>
										{unique.Name}
									</p>
									<p
										className="subtext-uni2"
										style={{ fontFamily: 'Josefin Sans', fontSize: '14px', color: '#151875' }}
									>
										${unique.Price - ((unique.SlicedPercentage/100)* unique.Price)}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<h2 className="featured">Trending Products</h2>
				<div className="row">
                    {
                        trending.map((trend)=>(

                            <CardTrending id={trend.id} product_name={trend.Name} picture={trend.Picture_url1} price={trend.Price} sliced={Math.ceil(trend.Price - ((trend.SlicedPercentage/100)* trend.Price))}/>
                        ))
                    }
					
				</div>

				<div className="row second-trend">
					<div className="col-lg-4 trend1">
						<h1 id="text-trend">23% off in all products</h1>
						<p id="text-trend-p">shop now</p>
						<div className="offset-lg-3 col-lg-5">
							<img src="images/trend.png" alt="" />
						</div>
					</div>
					<div className="col-lg-4 trend2">
						<h1 id="text-trend">23% off in all products</h1>
						<p id="text-trend-p">shop now</p>
						<div className="offset-lg-1 col-lg-9">
							<img src="images/trend2.png" alt="" />
						</div>
					</div>
					<div className="col-lg-3">
						<div className="row">
							<div className="col-lg-4 img-case">
								<img src="images/seat.png" alt="" />
							</div>
							<div className="col-lg-6 ">
								<p id="seat-chair">Executive Seat chair</p>
								<p id="seat-chair-price">$32.00</p>
							</div>
							<div className="col-lg-4 img-case">
								<img src="images/seat2.png" alt="" />
							</div>
							<div className="col-lg-6 ">
								<p id="seat-chair">Executive Seat chair</p>
								<p id="seat-chair-price">$32.00</p>
							</div>
							<div className="col-lg-4 img-case">
								<img src="images/seat3.png" alt="" />
							</div>
							<div className="col-lg-6 ">
								<p id="seat-chair">Executive Seat chair</p>
								<p id="seat-chair-price">$32.00</p>
							</div>
							<div className="col-lg-4 img-case">
								<img src="images/seat.png" alt="" />
							</div>
							<div className="col-lg-6 ">
								<p id="seat-chair">Executive Seat chair</p>
								<p id="seat-chair-price">$32.00</p>
							</div>
						</div>
					</div>
				</div>

				<h2 className="featured">Discount Item</h2>

				<div className="ltn-nav">
					<span id="nav-ltn">Wood Chair</span>
					<span id="nav-ltn">Plastic chair</span>
					<span id="nav-ltn">Sofa Collection</span>
				</div>

				<div className="row">
					<div className="col-lg-6">
						<h1 className="discount-title">20% Discount Of All Products</h1>
						<h2 className="discount-subTitle">Eams Sofa Compact</h2>
						<p className="discount-sub">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec,
							bibendum condimentum.
						</p>

						<div className="row">
							<div className="col-lg-6">
								<p className="check-text">
									<i className="fas fa-check check " />
									Material expose like metals
								</p>
								<p className="check-text">
									{' '}
									<i className="fas fa-check check" />
									Material expose like metals
								</p>
							</div>
							<div className="col-lg-6">
								<p className="check-text">
									<i className="fas fa-check check" />
									Material expose like metals
								</p>
								<p className="check-text">
									{' '}
									<i className="fas fa-check check" />
									Material expose like metals
								</p>
							</div>
							<button id="uni-btn">shop now</button>
						</div>
					</div>
					<div className="col-lg-6">
						<img src="images/brown-chair.png" alt="" />
					</div>
				</div>

				<h2 className="featured">Top Categories</h2>

				<div className="row">
                    {
                        top.slice(0,4).map((tops)=>(
                            
                            <TopCard  
                            
                                color={tops.Color}
								size={tops.Size}
								price={tops.Price}
								key={tops.id}
								id={tops.id}
								picture={tops.Picture_url1}
								name={tops.Name}
								sliced={tops.Price - tops.SlicedPercentage / 100 * tops.Price}
                            />
                        ))
                    }
				
				</div>
			</div>

			<div className="get-latest">
				<div className="container">
					<h1 className="get-latest-text">
						Get Leatest Update By Subscribing <br /> To 0ur Newsletter
					</h1>
					<button id="uni-btn"onClick={shopNow}>shop now</button>
				</div>
			</div>

			<PreFooter />
		</div>
	);
}
