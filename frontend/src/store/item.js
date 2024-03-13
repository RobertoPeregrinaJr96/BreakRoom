// frontend/src/store/itemReducer.js
import { csrfFetch } from "./csrf";
/* Action Type Constants: */
const GET_ITEMS = "item/GET_ITEMS"; // Check the constant name
/* Action Creators: */
const getAllItems = (items) => ({
  type: GET_ITEMS, // Use the constant here
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

/* Reducers */
const initialState = { allItems: {}, oneItem: {} };

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS: // Use the constant here
      return { ...state, allItems: action.payload };
    default:
      return state;
  }
};

export default itemReducer;
