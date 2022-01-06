import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(props) {
    return (
        <div>
        <nav className="navbar head1 navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link anc" href="#"><i className="far fa-envelope"/>
                random@gmail.com</a>
              </li>
              <li className="nav-item">
                <a className="nav-link anc" href="#"><i className="fas fa-phone-alt"/> +23491654413816</a>
              </li>
            </ul>
            <ul className="navbar-nav ul1 me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle  anc"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  English
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link anc dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  USD
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link anc" >Login <i className="far fa-user" /></Link>
              </li>
              <li className="nav-item">
                <a className="nav-link anc" href="#">wishlist <i className="far fa-heart" /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link anc" href="#"><i className="fas fa-shopping-cart" /></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar head2 navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand navbar-brand-b" href="#">Hekto</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className={`nav-link anc2 ${props.active}`} aria-current="page" >Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link anc2 ${props.active1}`} >About</Link>
            </li>
            <li className="nav-item">
              <Link to="/product-details" className={`nav-link anc2 ${props.active2}`} >pages</Link>
            </li>
            <li className="nav-item">
              <Link to="/product" className={`nav-link anc2 ${props.active3}`} >Product</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className={`nav-link anc2 ${props.active4}`} >Blogs</Link>
            </li>
            <li className="nav-item">
              <Link to="/shopList" className={`nav-link anc2 ${props.active5}`} >Shop</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={`nav-link anc2 ${props.active6}`} >Contact</Link>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn2 btn-outline-success" type="submit"><i className="fas btn-search fa-search" /></button>
          </form>
        </div>
      </div>
    </nav>
        </div>
    )
}
