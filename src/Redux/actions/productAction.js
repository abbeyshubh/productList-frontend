import * as actionTypes from "../actionTypes/allActionTypes";
import { GET, POST } from "../../helper/requests";
import { getProductDetailsById, getProducts } from "../../helper/apiRoutes";
export const productAction = () => async (dispatch) => {
  let response = await GET(getProducts);
  return dispatch({ type: actionTypes.GETPRODUCTLIST, payload: response });
};

export const getProductByIdAction = (obj) => async (dispatch) => {
  let response = await POST(getProductDetailsById, obj);
  return dispatch({ type: actionTypes.GETPRODUCTLISTBYID, payload: response });
};
