import React from 'react'

function SideBar() {
    return (
        <div className="col-lg-3">
              <div className="right-filter">
                <p>Product Brand</p>
                <ul className="right-filter-ul">
                  <li className>
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label">Coaster Furniture</label>
                  </li>
                  <li className>
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label">Fusion Dot High Fashion</label>
                  </li>
                  <li className>
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label">Unique Furnitture Restore</label>
                  </li>
                  <li className>
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label">Dream Furnitture Flipping</label>
                  </li>
                  <li className>
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label">Young Repurposed</label>
                  </li>
                  <li className>
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label">Green DIY furniture</label>
                  </li>
                </ul>
              </div>
              <div className="right-filter">
                <p>Categories</p>
                <ul className="right-filter-ul">
                  <li className>
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label">Prestashop</label>
                  </li>
                  <li className>
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label">Magento</label>
                  </li>
                  <li className>
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label">Bigcommerce</label>
                  </li>
                  <li className>
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label">osCommerce</label>
                  </li>
                  <li className>
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label">3dcart</label>
                  </li>
                  <li className>
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label">Bags</label>
                  </li>
                  <li className>
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label">Accessories</label>
                  </li>
                  <li className>
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label">Jewellery</label>
                  </li>
                  <li className>
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label">Watches</label>
                  </li>
                </ul>
              </div>
              <div className="right-filter">
                <p>Price Filter</p>
                <ul className="right-filter-ul">
                  <li className>
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label">$0.00 - $150.00</label>
                  </li>
                  <li className>
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label">$150.00 - $350.00</label>
                  </li>
                  <li className>
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label">$150.00 - $504.00</label>
                  </li>
                  <li className>
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label">$450.00 +</label>
                  </li>
                </ul>
              </div>
              <span className="bottom-search">
                <input type="text" size className="search-text" style={{width: '50%'}} />
                <i className="fas fa-search input-search-icon" />
              </span>
            </div>
    )
}

export default SideBar
