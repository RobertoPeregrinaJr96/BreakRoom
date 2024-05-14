// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import OpenModalButton from "./OpenModalButton";
import LoginFormModal from "./LoginFormModal";
import SignupFormModal from "./SignupFormModal";
import "./ProfileButton.css";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getCurrentOrderThunk } from "../../store/order";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const navigationLinks = ["/", "/menu"];
  const placeholderlinks = ["/profile", "/order", "/admin", "/checkout"];
  
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/");
  };
  const pageLinks = (a) => {
    return <button onClick={(e) => history.push(a)}>{a}</button>;
  };
  useEffect(() => {
    if (user) {
      dispatch(getCurrentOrderThunk());
    }
  }, [dispatch]);
  return (
    <div className="profileButton-container">
      {user ? (
        <>
          <ul>
            {navigationLinks.map((link) => (
              <li key={navigationLinks.indexOf(link)}>{pageLinks(link)}</li>
            ))}
          </ul>
          <button onClick={(e) => logout(e)}>Log out</button>
          <ul>
            {placeholderlinks.map((link) => (
              <li key={placeholderlinks.indexOf(link)}>{pageLinks(link)}</li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <ul>
            {navigationLinks.map((link) => (
              <li key={navigationLinks.indexOf(link)}>{pageLinks(link)}</li>
            ))}
          </ul>
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
