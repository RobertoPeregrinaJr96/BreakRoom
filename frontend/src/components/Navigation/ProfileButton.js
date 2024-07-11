import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import OpenModalButton from "./OpenModalButton";
import LoginFormModal from "./LoginFormModal";
import SignupFormModal from "./SignupFormModal";
import "./ProfileButton.css";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getCurrentOrderThunk } from "../../store/order";
import { sessionSetting } from "../../store/session";

function ProfileButton({ session }) {
  const [hidden, setHidden] = useState("hidden");
  const dispatch = useDispatch();
  const history = useHistory();
  const navigationLinks = ["/", "/menu"];
  const placeholderlinks = ["/profile", "/order", "/admin", "/checkout"];
  let display = session.setting.display;
  let mode = session.setting.mode;

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/");
  };

  const pageLinks = (a) => {
    return <button onClick={() => history.push(a)}>{a}</button>;
  };

  const selectSetting = (e) => {
    e.preventDefault();
    setHidden(hidden === "hidden" ? "show" : "hidden");
  };

  const selectLayout = (e) => {
    e.preventDefault();
    display = display === "grid" ? "block" : "grid";
    dispatch(sessionSetting({ display, mode }));
  };

  const selectMode = (e) => {
    e.preventDefault();
    mode = mode === "light" ? "dark" : "light";
    dispatch(sessionSetting({ display, mode }));
  };

  const iconVersion = (value) => {
    switch (value) {
      case "dark":
        return <i className="fa-solid fa-sun"></i>;
      case "light":
        return <i className="fa-regular fa-sun"></i>;
      case "grid":
        return <i className="fa-solid fa-grip-vertical"></i>;
      case "block":
        return <i className="fa-solid fa-grip-lines"></i>;
      default:
        break;
    }
  };
  useEffect(() => {
    if (session.user) {
      dispatch(getCurrentOrderThunk());
    }
  }, [dispatch, session.user]);

  return (
    <div className="profileButton-container">
      {session.user ? (
        <>
          <ul>
            {navigationLinks.map((link) => (
              <li key={link}>{pageLinks(link)}</li>
            ))}
          </ul>
          <button onClick={logout}>Log out</button>
          <ul>
            {placeholderlinks.map((link) => (
              <li key={link}>{pageLinks(link)}</li>
            ))}
          </ul>
          <div className={`navigation-div-${mode}`}>
            <ul className={`setting-${hidden}`} onClick={selectSetting}>
              Setting
              <li>
                <button className="display-mode-toggle" onClick={selectLayout}>
                  Layout
                </button>
                <button className="display-mode-toggle" onClick={selectMode}>
                  Mode
                </button>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <ul>
            {navigationLinks.map((link) => (
              <li key={link}>{pageLinks(link)}</li>
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
          <div className={`navigation-div-${mode}`}>
            <button className="setting" onClick={selectSetting}>
              <i className="fa-solid fa-gear"></i>
            </button>
            <ul className="setting-button-container">
              <li className={hidden}>
                <button className="display-mode-toggle" onClick={selectLayout}>
                  {iconVersion(display)}
                </button>
              </li>
              <li className={hidden}>
                <button className="display-mode-toggle" onClick={selectMode}>
                  {iconVersion(mode)}
                </button>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default ProfileButton;
