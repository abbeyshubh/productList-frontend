import * as actionTypes from "../actionTypes/allActionTypes";

const Initial_State = {
  productList: [],
  productDetails: {},
};

const productReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case actionTypes.GETPRODUCTLIST:
      return {
        ...state,
        productList: action.payload.data.data,
      };
    case actionTypes.GETPRODUCTLISTBYID:
      return {
        ...state,
        productDetails: action.payload.data.data,
      };
    default:
      return state;
  }
};
export default productReducer;
