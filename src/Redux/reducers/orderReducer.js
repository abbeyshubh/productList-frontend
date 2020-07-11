import * as actionTypes from "../actionTypes/allActionTypes";

const Initial_State = {
  orderList: {},
};

const OrderReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case actionTypes.SAVEORDERS:
      return {
        ...state,
        orderList: action.payload.data,
      };

    default:
      return state;
  }
};
export default OrderReducer;
