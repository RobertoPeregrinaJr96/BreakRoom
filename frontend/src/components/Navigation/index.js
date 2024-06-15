import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import { sessionSetting } from "../../store/session";

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const session = useSelector((state) => state.session);

  let display = session.setting.display;
  let mode = session.setting.mode;
  // Css Logic
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
  useEffect(() => {}, [dispatch]);
  return (
    <div className={`navigation-container ${mode}`}>
      <div className={`navigation-div-topLeft ${mode}`}>
        <NavLink exact to="/">
          <span className="navigation-image-container">
            <img
              className="navigation-list-image"
              src="https://cdn.discordapp.com/attachments/1088906268485357618/1232832890530955274/cup_of_coffee.png?ex=66376ada&is=6636195a&hm=f35d9574a9715863c7c8014c5c4391e26f6994ea590f886345a633d6fda865b3&"
              alt=""
            ></img>
          </span>
        </NavLink>
        <NavLink exact to="/">
          <span className="navigation-text-container">
            <h1 className={`navigation-h1-${mode}`}>The Break Room</h1>
          </span>
        </NavLink>
      </div>
      <div className="navigation-div-topRight">
        {isLoaded && <ProfileButton user={session.user} />}
      </div>
      <div className={`navigation-div-${mode}`}>
        Settings
        <button
          className="display-mode-toggle"
          onClick={(e) => selectLayout(e)}
        >
          layout
        </button>
        <button className="display-mode-toggle" onClick={(e) => selectMode(e)}>
          Mode
        </button>
      </div>
    </div>
  );
}

export default Navigation;
