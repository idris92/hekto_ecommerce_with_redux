import { filter } from 'lodash';
import React, {useState, useEffect, useContext} from 'react'
import { userContext } from '../context/UserContext';

function SideBar() {
  const {brandId, setBrandId}= useContext(userContext);
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const {filterId, setFilterId}=useContext(userContext);
  const {filterName, setFilterName}= useContext(userContext);
  const {filterPrice, setFilterPrice}= useContext(userContext);
  

  const handleCategory =(e)=>{
    if (e.target.checked === true){
      setFilterId(e.target.value);
      setCategoryId(e.target.name);

    }else{
      setFilterId("");
      setCategoryId(0);
    }
 
  }

  const handlePrice=(e)=>{
    if (e.target.checked === true){
    // console.log(filterPrice);
      setFilterPrice(filterPrice.lowerbound);
      setFilterPrice(filterPrice.lowerbound);
    }else{
      console.log('unchecked');
    }
  }

  // const checkToggle=(element)=>{
  //  checked===0?setChecked(1):setChecked(0);
   
  // }

  const handleBrand = (e)=>{
    if(e.target.checked === true){

      setFilterName(e.target.value);
    }else{
      setFilterName("");
    }
    // setBrandId([...brandId, e.target.value])
  }

  const loadCategories = ()=>{
    fetch("http://127.0.0.1:8000/api/category")
    .then(response => response.json())
    .then(response =>{
      // console.log(response.category)
      setCategory(response.category);

    } )
    .catch(error =>{
        alert("Something went wrong! Please check your internet connection....");
         console.log('error', error)
    
    });
  }

  const loadBrand = ()=>{
    fetch("http://127.0.0.1:8000/api/brand")
    .then(response => response.json())
    .then(response =>{
      setBrand(response.brand);
      // console.log(response.brand)

    } )
    .catch(error =>{
        alert("Something went wrong! Please check your internet connection....");
         console.log('error', error)
    
    });
  }
useEffect(()=>{
  loadCategories()
  loadBrand()
}, [])

// return filterId
// console.log(checked);
    return (
        <div className="col-lg-3">

              <div className="right-filter">
                  <p>Categories</p>
                  <ul className="right-filter-ul">
                  {
                      category.map((category, index)=>(

                      <li className>
                        <input key={index} className="form-check-input"  name={category.id} value={category.category} onChange={handleCategory} type="checkbox" defaultValue id="flexCheckDefault" />
                        <label className="form-check-label">{category.category}</label>
                      </li>
                      ))
                    }
                 
                </ul>
              </div>
              <div className="right-filter">
                <p>Product Brand</p>
                <ul className="right-filter-ul">
                  
                  {
                    brand.filter(brands=>brands.category_id.includes(categoryId)).map(branded=>(
                    // console.log('brand', brand)
                  <li className>
                    <input className="form-check-input" value={branded.brand}  onClick={handleBrand} type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label">{branded.brand}</label>
                  </li>
                    ))
                  }
                </ul>
              </div>
             
              <div className="right-filter">
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
              </div>
              <span className="bottom-search">
                <input type="text" size className="search-text" style={{width: '50%'}} />
                <i className="fas fa-search input-search-icon" />
              </span>
            </div>
    )
}

export default SideBar
