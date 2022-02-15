import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import pageReducer from "./pageReducer";
import categoryReducer from "./categoryReducer";


export const rootReducer = combineReducers({
    productReducer,
    pageReducer,
    categoryReducer,
})