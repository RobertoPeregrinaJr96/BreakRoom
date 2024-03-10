// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import OpenModalButton from "./OpenModalButton";
import LoginFormModal from "./LoginFormModal";
import SignupFormModal from "./SignupFormModal";
import "./ProfileButton.css";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const navigationLinks = [
    "/",
    "/profile",
    "/admin",
    "/menu",
    "/order",
    "/checkout",
  ];

  useEffect(() => {}, []);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/");
  };
  const pageLinks = (a) => {
    return <button onClick={(e) => history.push(a)}>{a}</button>;
  };
  return (
    <div className="profileButton-container">
      {user ? (
        <>
          {navigationLinks.map((link) => pageLinks(link))}
          <button onClick={(e) => logout(e)}>Log out</button>
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
