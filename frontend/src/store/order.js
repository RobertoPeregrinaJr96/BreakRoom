// frontend/src/store/orderReducer.js
import { csrfFetch } from "./csrf";
/* Action Type Constants: */
const GET_ALL_ORDERS = "order/GET_ALL_ORDERS";
const GET_CURRENT_ORDER = "order/GET_CURRENT_ORDER";

/* Action Creators: */
const getCurrentOrderById = (order) => ({
  type: "GET_ALL_ORDERS",
  payload: order,
});
const getAllOrderById = (orders) => ({
  type: "GET_CURRENT_ORDER",
  payload: orders,
});
/* Thunk Creators: */
export const getCurrentOrderByIdThunk = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/order/${id}/current`);
  if (response.ok) {
    const data = await response.json();
    console.log("Current Order: ", Object.values(data)[0]);
    const normalizedData = data[0];
    dispatch(getCurrentOrderById(normalizedData));
    return normalizedData;
  }
};

export const getAllOrderByIdThunk = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/order/${id}`);
  if (response.ok) {
    const data = await response.json();
    console.log("All Order: ", data);
    const normalizedData = Object.values(data)[0];
    dispatch(getAllOrderById(normalizedData));
    return normalizedData;
  }
};

/* Reducers */
const initialState = { allOrders: {}, currentOrder: {} };

const orderReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case "GET_ALL_ORDERS":
      newState = { ...state, allOrders: action.payload };
      return newState;
    case "GET_CURRENT_ORDER":
      newState = { ...state, allOrders: action.payload };
      return newState;
    default:
      return state;
  }
};

export default orderReducer;
