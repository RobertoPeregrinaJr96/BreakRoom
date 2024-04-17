// frontend/src/store/itemReducer.js
import { csrfFetch } from "./csrf";
/* Action Type Constants: */
const GET_MENU = "menu/GET_MENU";

/* Action Creators: */
const getAllMenu = (menu) => ({
  type: GET_MENU, // Use the constant here
  payload: menu,
});
/* Thunk Creators: */
export const getMenuThunk = () => async (dispatch) => {
  const response = await csrfFetch("/api/menu ");
  if (response.ok) {
    const data = await response.json();
    dispatch(getAllMenu(data));
    return data;
  }
};

/* Reducers */
const initialState = {
  menuItems: {},
};

const menuReducer = (state = initialState, action) => {
  let menuState = { ...state };
  switch (action.type) {
    case GET_MENU: // Use the constant here
      menuState = { ...menuState, menuItems: action.payload };
      return menuState;
    default:
      return menuState;
  }
};

export default menuReducer;
