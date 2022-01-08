import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import { userContext } from '../context/UserContext';

function TopFilter() {
  const {pageSize, setPageSize}= useContext(userContext);
  const {filterId, setFilterId}= useContext(userContext);
  const {filterName, setFilterName}= useContext(userContext);
  const {searchName, setSearchName}= useContext(userContext);
  const handlePage=(e)=>{
    if (e.target.value === ""){
      setPageSize(1);
    }else{

      setPageSize(e.target.value);
    }
  }

  const handleSearch=(e)=>{
    setSearchName(e.target.value);
  }
    return (
        <div className="container">
        <div className="section-4">
        <div className="row">
          <div className="col-lg-6">
            <div className="search-right">
              <p className="title">Ecommerce Acceories &amp; Fashion item </p>
              <p className="stat">About 9,620 results (0.62 seconds)</p>
            </div>
          </div>
          <div className="col-lg-6 d-inline-flex">
            <div className="search-div1">
              <span className="search-text">Per Page:</span>
              <input style={{marginLeft:'8px'}} className="search-input" size={1} type="text"  onChange={handlePage}/>
            </div>
            <div className="search-div2">
              <span className="search-text">Sort By:</span>
              <select style={{marginLeft:'8px'}} className="search-input" aria-label=".form-select-sm select example">
                <option selected>Best Match</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </div>
            <div className="search-div3">
              <span className="search-text">View:</span>
              <Link to='/left'><i style={{marginLeft:'8px'}} className="fas fa-list" /></Link>
              <Link to="/grid"><i style={{marginLeft:'8px'}} className="fas fa-th-large" /></Link>
              <input style={{marginLeft:'8px'}} onChange={handleSearch}className="search-input" size={8} type="text" />
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}

export default TopFilter
