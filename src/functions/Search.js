import React from 'react'
import { useDispatch } from 'react-redux';
import { Product } from '../redux/action';

//This function is taking in search keyword=searchName
//taking all products = productState
//search is the search action
//dispatch is the dispatch function to search
function Search(searchName, productState=null, search=null, dispatch=null) {


    
        if (searchName !== ""){
        
            //this variable hold filteres product
            let filtered = productState.filter(function (el) {
                // console.log(el.Name);
                return el.Name.toLowerCase().includes(searchName.toLowerCase())
                        
            });
            //this dispatch the search function and go with filtered product
            dispatch(search(filtered));
           
        
        }else{
        
            //this dispatch action to load all products
            dispatch(Product())
           
        }
    
}

export default Search
