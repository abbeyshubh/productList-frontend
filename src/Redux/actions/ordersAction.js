import * as actionTypes from "../actionTypes/allActionTypes";
import { GET, POST } from "../../helper/requests";
// import { getProductDetailsById, getProducts } from "../../helper/apiRoutes";

export const saveOrders = (obj) => async (dispatch) => {
  let response = await POST("saveOrders", obj);
  dispatch({ type: actionTypes.SAVEORDERS, payload: response });
};
