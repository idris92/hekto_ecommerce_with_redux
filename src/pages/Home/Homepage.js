import React from 'react'
import CardTrending from '../../components/CardTrending'
import FeaturedCard from '../../components/FeaturedCard'
import LateCard from '../../components/LateCard'
import Nav from '../../components/Nav'
import PreFooter from '../../components/PreFooter'
import Services from '../../components/Services'
import TopCard from '../../components/TopCard'
import './Homepage.css'

export default function Homepage() {

    return (
        <div>
        {/* <Nav
        active ="active"
        /> */}
        <div className="carousel">

        <div className="container">
        <div className="row">
        <div className="col-lg-1">
        <img src="images/lamp.png" alt="" className="lamp-top" />

        </div>
        <div className="col-lg-6">
        <div className="wrapper" style={{marginLeft:'24px'}}>
            <h2 className="furniture-b">Best Furniture For Your Castle....</h2>
            <h1 className="furniture">New Furniture Collection Trends in 2020</h1>
            <p className="sub-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
            in phasellus non in justo.
            </p>
            <button className="btn-shop">Shop now</button>
        </div>
        </div>
        <div className="col-lg-5">

        <img src="images/chair.png" alt="" className="" />
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

            <FeaturedCard
            title = "obinna"
            
            />
            <FeaturedCard
            title = "collins"
            
            />
            <FeaturedCard
            title = "ireti"
            
            />
            <FeaturedCard
            title = "paul"
            
            />

            
            </div>


        <h2 className="featured">Leatest Products</h2>
            <div className="ltn-nav">
                <span id='nav-ltn'>new arrival</span>
                <span id='nav-ltn'>best seller</span>
                <span id='nav-ltn'>feature</span>
                <span id='nav-ltn'>special offer</span>
               
            </div>

            <div className="row">

            <LateCard
            img = "images/chair.png"
            />
           
            <LateCard
            img = "images/wrist-watch.jpg"
            />
           
            <LateCard
            img = "images/chair.png"
            />
            <LateCard
            img = "images/chair.png"
            />
           
            <LateCard
            img = "images/wrist-watch.jpg"
            />
           
            <LateCard
            img = "images/chair.png"
            />
          
            </div>

            <h2 className="featured-offer">What Shopex Offer!</h2>

            <Services/>


           







            </div>
            <div className="unique-features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                           <img src="images/chair2.png" alt="" />
                        </div>

                        <div className="col-lg-5">
                            <h1 className="unique-title">Unique Features Of latest &
                            Trending Products
                            </h1>
                            <div className="row">
                                <div className="col-lg-1"><span id='color-circle1'> </span></div>
                                <div className="col-lg-11"><p className="unique-text">All frames constructed with hardwood solids and laminates</p></div>

                                <div className="col-lg-1"><span id='color-circle2'></span></div>
                                <div className="col-lg-11"><p className="unique-text">Reinforced with double wood dowels, glue, screw - nails corner 
                                blocks and machine nails</p></div>

                                <div className="col-lg-1"><span id='color-circle3'></span></div>
                                <div className="col-lg-11"><p className="unique-text">Arms, backs and seats are structurally reinforced</p></div>

                                <div className="col-lg-3"><button id='uni-btn'>Add to cart</button></div>
                                <div className="col-lg-4">
                                    <p className="subtext-uni">B&B Italian Sofa </p>
                                    <p className="subtext-uni2">$32.00</p>
                                </div>
                               
                            </div>
                          
                         

                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                 <h2 className="featured">Trending Products</h2>
                <div className="row">
              
                
                <CardTrending
                img = "images/wrist-watch.jpg"
                />
                <CardTrending
                img = "images/wrist-watch.jpg"
                />
                <CardTrending
                img = "images/wrist-watch.jpg"
                />
                <CardTrending
                img = "images/wrist-watch.jpg"
                />
                
              
                
                </div>

                <div className="row second-trend">

                <div className="col-lg-4 trend1">
                <h1 id='text-trend'>23% off in all products</h1>
                <p id='text-trend-p'>shop now</p>
                <div className="offset-lg-7 col-lg-5">
                    <img src="images/trend.png" alt="" />
                </div>
                </div>
                <div className="col-lg-4 trend2">
                <h1 id='text-trend'>23% off in all products</h1>
                <p id='text-trend-p'>shop now</p>
                <div className="offset-lg-3 col-lg-9">
                    <img src="images/trend2.png" alt="" />
                </div>
                </div>
                <div className="col-lg-3">
                    <div className="row">
                        <div className="col-lg-4 img-case">
                            <img src="images/seat.png" alt="" />
                        </div>
                        <div className="col-lg-6 ">
                            <p id='seat-chair'>Executive Seat chair</p>
                            <p id='seat-chair-price'>$32.00</p>
                        </div>
                        <div className="col-lg-4 img-case">
                            <img src="images/seat2.png" alt="" />
                        </div>
                        <div className="col-lg-6 ">
                            <p id='seat-chair'>Executive Seat chair</p>
                            <p id='seat-chair-price'>$32.00</p>
                        </div>
                        <div className="col-lg-4 img-case">
                            <img src="images/seat3.png" alt="" />
                        </div>
                        <div className="col-lg-6 ">
                            <p id='seat-chair'>Executive Seat chair</p>
                            <p id='seat-chair-price'>$32.00</p>
                        </div>
                        <div className="col-lg-4 img-case">
                            <img src="images/seat.png" alt="" />
                        </div>
                        <div className="col-lg-6 ">
                            <p id='seat-chair'>Executive Seat chair</p>
                            <p id='seat-chair-price'>$32.00</p>
                        </div>
                     
                    </div>
                </div>
                
                </div>


                <h2 className="featured">Discount Item</h2>

                <div className="ltn-nav">
                <span id='nav-ltn'>Wood Chair</span>
                <span id='nav-ltn'>Plastic chair</span>
                <span id='nav-ltn'>Sofa Collection</span>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <h1 className="discount-title">20% Discount Of All Products</h1>
                    <h2 className="discount-subTitle">Eams Sofa Compact</h2>
                    <p className="discount-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                    
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="check-text"><i className="fas fa-check check " />
                             Material expose like metals</p>
                            <p className="check-text"> <i className="fas fa-check check" />
                            Material expose like metals</p>
                        </div>
                        <div className="col-lg-6">
                            <p className="check-text"><i className="fas fa-check check" />
                             Material expose like metals</p>
                            <p className="check-text"> <i className="fas fa-check check" />
                            Material expose like metals</p>

                           
                        </div>
                        <button id='uni-btn'>shop now</button>
                    </div>

                </div>
                <div className="col-lg-6">
                    <img src="images/brown-chair.png" alt="" />
                </div>

                
            </div>

            <h2 className="featured">Top Categories</h2>

                <div className="row">
                    <TopCard
                        img = "images/top.png"
                        title = "Mini LCW Chair"
                        price = "57.88"
                    />
                    <TopCard
                        img = "images/top.png"
                        title = "Mini LCW Chair"
                        price = "53.88"
                    />
                    <TopCard
                        img = "images/top.png"
                        title = "Mini LCW Chair"
                        price = "59.88"
                    />
                    <TopCard
                        img = "images/top.png"
                        title = "Mini LCW Chair"
                        price = "52.88"
                    />
                </div>

            </div>

            <div className="get-latest">
                <div className="container">
                    <h1 className="get-latest-text">Get Leatest Update By Subscribing <br/> To 0ur Newsletter</h1>
                    <button id='uni-btn'>shop now</button>
                </div>
            </div>

            <PreFooter/>


        </div>
    )
}
