import { combineReducers } from "redux";
import ProductReducer from "./productsReducer";
import OrderReducer from "./orderReducer";
export const rootReducer = combineReducers({
  ProductReducer,
  OrderReducer,
});
