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
    return <button onClick={(e) => history.push(a)}>{a}</button>;
  };
  // Css Logic
  const selectSetting = (e) => {
    e.preventDefault();
    hidden === "hidden" ? setHidden("show") : setHidden("hidden");
  };
  const selectLayout = (e) => {
    e.preventDefault();
    display === "grid" ? (display = "block") : (display = "grid");
    dispatch(sessionSetting({ display: display, mode: mode }));
  };
  const selectMode = (e) => {
    e.preventDefault();
    mode === "light" ? (mode = "dark") : (mode = "light");
    dispatch(sessionSetting({ display: display, mode: mode }));
  };
  console.log(hidden);
  useEffect(() => {
    if (session.user) {
      dispatch(getCurrentOrderThunk());
    }
  }, [dispatch]);
  return (
    <div className="profileButton-container">
      {session.user ? (
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
          <div className={`navigation-div-${mode}`}>
            <ul
              className={`settting-${hidden}`}
              onClick={(e) => {
                selectSetting(e);
              }}
            >
              setting
              <li>
                {" "}
                <button
                  className="display-mode-toggle"
                  onClick={(e) => selectLayout(e)}
                >
                  layout
                </button>
                <button
                  className="display-mode-toggle"
                  onClick={(e) => selectMode(e)}
                >
                  Mode
                </button>
              </li>
              <li></li>
            </ul>
          </div>
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
          <div className={`navigation-div-${mode}`}>
            setting
            <ul
              className={`setting`}
              onClick={(e) => {
                selectSetting(e);
              }}
            >
              <li className={`${hidden}`}>
                <button
                  className="display-mode-toggle"
                  onClick={(e) => selectLayout(e)}
                >
                  layout
                </button>
              </li>
              <li className={`${hidden}`}>
                <button
                  className="display-mode-toggle"
                  onClick={(e) => selectMode(e)}
                >
                  Mode
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
