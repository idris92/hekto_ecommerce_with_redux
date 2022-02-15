const initialState={
    page:3
}
const pageReducer = (state=initialState.page, action) => {
   switch(action.type){
       case 'pages':
           return action.payload
        default:
            return state
   }
}

export default pageReducer
