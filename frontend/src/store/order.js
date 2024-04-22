// frontend/src/store/orderReducer.js
import { csrfFetch } from "./csrf";
/* Action Type Constants: */
const GET_ORDER = "order/GET_ORDER";
/* Action Creators: */
const getOrderById = (orders) => ({
  type: "GET_ORDER",
  payload: orders,
});
/* Thunk Creators: */
export const getOrderByIdThunk = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/order/${id}`);
  if (response.ok) {
    const data = await response.json();
    dispatch(getOrderById(data));
    return data;
  }
};

/* Reducers */
const initialState = { allOrders: {}, currentOrder: {} };

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ORDER":
      return { ...state, allOrders: action.payload };
    default:
      return state;
  }
};

export default orderReducer;
