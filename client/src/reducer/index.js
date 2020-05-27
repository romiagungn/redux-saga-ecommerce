import { combineReducers } from "redux";
import products from "./products";
import details from "./detail";

export default combineReducers({
    products,
    details
});    