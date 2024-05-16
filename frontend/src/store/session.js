// frontend/src/store/session.js
import { csrfFetch } from "./csrf";

const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";
const SET_SETTING = "seesion/SET_SETTING";
const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};
const setSetting = (setting) => ({
  type: SET_SETTING,
  payload: setting,
});
// log in User
export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch("/api/session/", {
    method: "POST",
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};
//
export const restoreUser = () => async (dispatch) => {
  const response = await csrfFetch("/api/session");
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};
//
export const signup = (user) => async (dispatch) => {
  const { username, firstName, lastName, email, password, image, phone } = user;
  const formData = new FormData();
  formData.append("username", username);
  formData.append("firstName", firstName);
  formData.append("lastName", lastName);
  formData.append("email", email);
  formData.append("password", password);
  if (image) formData.append("image", image);
  else formData.append("image", null);
  if (phone) formData.append("phone", phone);
  else formData.append("phone", null);
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch("/api/session", {
    method: "DELETE",
  });
  dispatch(removeUser());
  return response;
};

// Settings

export const sessionSetting = (setting) => (dispatch) => {
  dispatch(setSetting(setting));
};
const initialState = { 
  user: null,
  setting: { display: "block", mode: "dark" },
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case REMOVE_USER:
      return { ...state, user: null };
    case SET_SETTING:
      return { ...state, setting: action.payload };
    default:
      return state;
  }
};

export default sessionReducer;
     