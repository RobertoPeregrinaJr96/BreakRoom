// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import OpenModalButton from "./OpenModalButton";
import LoginFormModal from "./LoginFormModal";
import SignupFormModal from "./SignupFormModal";
import "./ProfileButton.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {}, []);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/");
  };

  return (
    <div className="profileButton-container">
      {user ? (
        <>
          <ul className="profileButton-ul-pageLinks">
            <li>
              <button onClick={logout}>Log Out</button>
            </li>
            <li>
              {" "}
              <button onClick={history.push("/profile")}>Profile</button>
            </li>
            <li>
              {" "}
              <button onClick={history.push("/admin")}>admin</button>
            </li>
            <li>
              {" "}
              <button onClick={history.push("/menu")}>menu</button>
            </li>
            <li>
              <button onClick={history.push("/order")}>order</button>
            </li>
            <li>
              <button onClick={history.push("/checkout")}>checkout</button>
            </li>
          </ul>
        </>
      ) : (
        <>
          <div className="profileButton-logIn">
            <OpenModalButton
              buttonText="Log In"
              modalComponent={<LoginFormModal />}
            />
            <OpenModalButton
              buttonText="Sign Up"
              modalComponent={<SignupFormModal />}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default ProfileButton;
