// frontend/src/store/itemReducer.js
import { csrfFetch } from "./csrf";
/* Action Type Constants: */
const GET_ITEMS = "item/GET_ITEMS"; // Check the constant name
const GET_HIGEST_AVG_ITEMS = "item/GET_HIGEST_AVG_ITEMS"; // Check the constant name 

/* Action Creators: */
const getAllItems = (items) => ({
  type: GET_ITEMS, // Use the constant here
  payload: items,
}); 
const getHighestAvgItems = (items) => ({
  type: GET_HIGEST_AVG_ITEMS, // Use the constant here
  payload: items,
});
/* Thunk Creators: */
export const getItemsThunk = () => async (dispatch) => {
  const response = await csrfFetch("/api/item/all ");
  if (response.ok) {
    const data = await response.json();
    dispatch(getAllItems(data));
    return data;
  }
}; 
export const getHighestAvgThunk = (type) => async (dispatch) => {
  const response = await csrfFetch(`/api/item/${type}/review `);
  if (response.ok) {
    const data = await response.json();
    dispatch(getHighestAvgItems(data));
    return data;
  }
};
/* Reducers */
const initialState = {
  allItems: {},
  menuItems: {},
  oneItem: {},
  highestAvgItem: {},
};

const itemReducer = (state = initialState, action) => {
  let itemState = { ...state };
  switch (action.type) {
    case GET_ITEMS: // Use the constant here
      itemState = { ...itemState, allItems: action.payload };
      return itemState;
    case GET_HIGEST_AVG_ITEMS:
      itemState = { ...itemState, highestAvgItem: action.payload };
      return itemState;
    default:
      return itemState;
  }
};

export default itemReducer;
