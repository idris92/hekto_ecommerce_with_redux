


export const productReducer=(state=[],action)=>{

    
    switch(action.type){
        case 'allproduct':
           return action.payload
           
        case 'search':
               return action.payload
        default:
            return state
    }
}

