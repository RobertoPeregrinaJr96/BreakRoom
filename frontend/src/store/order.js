// frontend/src/store/itemReducer.js
import { csrfFetch } from "./csrf";
/* Action Type Constants: */
const GET_ORDERS = "order/GET_ORDERS";
/* Action Creators: */
const getAllOrders = (orders) => ({
  type: GET_ORDERS,
  payload: orders,
});
/* Thunk Creators: */
export const getOrderThunk = () => async (dispatch) => {
  const response = await csrfFetch("/api/order/all");
  if (response.ok) {
    const data = await response.json();
    dispatch(getAllOrders(data));
    return data;
  }
};

/* Reducers */
const initialState = { allOrders: {}, currentOrder: {} };

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return { ...state, allOrders: action.payload };
    default:
      return state;
  }
};

export default orderReducer;
