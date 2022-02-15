import { filter } from 'lodash';
import React, {useState, useEffect, useContext} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Category, catFilter, Brands, brandfilter} from '../redux/action'

function SideBar() {
 const dispatch = useDispatch()
const productCat = useSelector(state => state.categoryReducer.allcategories)
const productBrand = useSelector(state => state.categoryReducer.allbrands)
const catId = useSelector(state => state.categoryReducer.catId)


  const handleCategory =(e)=>{
      
    dispatch(catFilter(e.target.value, e.target.name))
     
  }
  const handleCatReset = () => {
		dispatch(catFilter(''));
	};

 

  const handleBrand = (e)=>{
    dispatch(brandfilter(e.target.value))
  
  }


  // This load all categories from the backend
  const loadCategories = ()=>{
      dispatch(Category())
      
  }
//This load all brands from the backend
  const loadBrand = ()=>{
    dispatch(Brands())
  }

// kick start all action inside it on page load
useEffect(()=>{
  loadCategories()
  loadBrand()
}, [])


    return (
        <div className="col-lg-3">

              <div className="right-filter">
                  <p>Categories</p>
                  <ul className="right-filter-ul">
                    <li><button className='categories' onClick={handleCatReset}>All</button></li>
                  {
                      productCat.map((category, index)=>(

                      <li className>
                        
                        <button className="form-check-label categories" name={category.id} onClick={handleCategory} value={category.category}>{category.category}</button>
                      </li>
                      ))
                    }
                 
                </ul>
              </div>
              <div className="right-filter">
                <p>Product Brand</p>
                <ul className="right-filter-ul">
                  
                  {
                    productBrand.filter(brands=>brands.category_id == catId).map(branded=>(
                    // console.log('brand', brand)
                  <li className>
                    <button className="form-check-label categories"onClick={handleBrand} value={branded.brand}>{branded.brand}</button>
                  </li>
                    ))
                  }
                </ul>
              </div>
             
              {/* <div className="right-filter">
                <p>Price Filter</p>
                <ul className="right-filter-ul">
                  <li className>
                    <input className="form-check-input" upper={0} lower={150} type="checkbox" onClick={handlePrice} defaultValue id="flexCheckDefault" />
                    <label className="form-check-label">$0.00 - $150.00</label>
                  </li>
                  <li className>
                    <input className="form-check-input" upper={150} lower={350} type="checkbox" onClick={handlePrice} defaultValue id="flexCheckDefault" />
                    <label className="form-check-label">$150.00 - $350.00</label>
                  </li>
                  <li className>
                    <input className="form-check-input" upper={150} lower={504} type="checkbox" onClick={handlePrice} defaultValue id="flexCheckDefault" />
                    <label className="form-check-label">$150.00 - $504.00</label>
                  </li>
                  <li className>
                    <input className="form-check-input" upper={450} type="checkbox" onClick={handlePrice} defaultValue id="flexCheckDefault" />
                    <label className="form-check-label">$450.00 +</label>
                  </li>
                </ul>
              </div> */}
              
            </div>
    )
}

export default SideBar
