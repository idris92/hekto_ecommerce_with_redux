export const getRequest=(name)=>{
    console.log("urls",name);
    fetch(`http://127.0.0.1:8000/api/${name}`)
    .then(response => response.json())
    .then(result =>{
       
       return result

    } )
    .catch(error =>{
        alert("Something went wrong! Please check your internet connection....");
    
    
    });
  
}