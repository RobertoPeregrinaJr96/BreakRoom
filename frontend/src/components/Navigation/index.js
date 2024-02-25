import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div className="navigation-container">
      <div className="navigation-div-topLeft">
        <NavLink exact to="/">
          <span className="navigation-image-container">
            <img
              className="navigation-list-image"
              src="https://cdn.discordapp.com/attachments/1088906268485357618/1118284501710295100/PngItem_30012.png"
              alt=""
            ></img>
          </span>
        </NavLink>
        <NavLink exact to="/">
          <span className="navigation-text-container">
            <h1 className="navigation-h1">The Break Room</h1>
          </span>
        </NavLink>
      </div>
      <div className="navigation-div-topRight">
        {isLoaded && <ProfileButton user={sessionUser} />}
      </div>
    </div>
  );
}

export default Navigation;
