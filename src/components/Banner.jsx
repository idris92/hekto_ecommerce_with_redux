import React from 'react'

function Banner({content, title}) {
    return (
    <div className="header">
        <div className="container">
          <h1 id="title">{title}</h1>
          <nav className="navbar head3 navbar-expand-lg ">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link anc2 " aria-current="page" href="index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link anc2 " style={{marginLeft: '13px'}} href="pages.html">Pages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link anc2 active" style={{marginLeft: '13px'}} href="#">{content}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
}

export default Banner
