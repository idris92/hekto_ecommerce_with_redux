
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {searchFilter, pageFilter} from '../redux/action'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Product } from '../redux/action';
import Search from '../functions/Search';


function TopFilter() {
  const dispatch = useDispatch()
  const productState = useSelector(state => state.productReducer)
 
  const handlePage=(e)=>{
    if (e.target.value === ""){
      dispatch(pageFilter(3))
    }else{

      dispatch(pageFilter(e.target.value))
    }
  }

  const handleSearch=(e)=>{
     
    Search(e.target.value, productState, searchFilter, dispatch)
 
  }
  useEffect(() => {
      dispatch(Product)
  }, [])
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
            {/* <div className="search-div2">
              <span className="search-text">Sort By:</span>
              <select style={{marginLeft:'8px'}} className="search-input" aria-label=".form-select-sm select example">
                <option selected>Best Match</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>21  
              </select>
            </div> */}
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
