//This fetch all poroducts from the baackend
   export const Product=()=>{
       return (dispatch)=>{

      
        fetch("http://127.0.0.1:8000/api/products")
        .then(response => response.json())
        .then(result =>{

            let payload = result.products
            dispatch(allproducts(payload))
            // console.log(result.products)

        } )
        .catch(error =>{
            alert("Something went wrong! Please check your internet connection....");
        
        
        });
      
    }
}


//This fetch all the categories from the backend

export const Category=()=>{
    return (dispatch)=>{
        fetch("http://127.0.0.1:8000/api/category")
        .then(response => response.json())
        .then(response =>{
          // console.log(response.category)
        //   setCategory(response.category);
            dispatch(allCategory(response.category))
    
        } )
        .catch(error =>{
            alert("Something went wrong! Please check your internet connection....");
             console.log('error', error)
        
        });
    }
}

// This fetch all the brands from the database
export const Brands=()=>{
    return(disptach)=>{
        fetch("http://127.0.0.1:8000/api/brand")
        .then(response => response.json())
        .then(response =>{
        // setBrand(response.brand);
            disptach(allBrands(response.brand))

        } )
        .catch(error =>{
            alert("Something went wrong! Please check your internet connection....");
            console.log('error', error)
        
        });
    }
}


export const allproducts =(data)=>({
    type: 'allproduct',
    payload: data
});

export const catFilter=(name, id)=>({
 type: 'catfilter',
 payload:{
     name,
     id
 }
})

export const brandfilter=(data)=>({
    type:'brandfilter',
    payload:data
})

export const searchFilter = (data)=>({
    type:'search',
    payload:data
})
export const pageFilter=(data)=>({
    type:'pages',
    payload:data
})

export const allCategory =(data)=>({
    type:'categories',
    payload:data
})

export const allBrands = (data)=>({
    type:'brands',
    payload:data
})