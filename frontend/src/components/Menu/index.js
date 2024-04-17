// frontend/src/components/Menu/index.js
import React, { useEffect } from "react";
import "./style/Menu.css";
import { useDispatch, useSelector } from "react-redux";
import { getMenuThunk } from "../../store/menu";

function Menu() {
  const dispatch = useDispatch();
  const menuStoreData = useSelector((state) => state.menu.menuItems);
  const menu = Object.values(menuStoreData)[0];
  useEffect(() => {
    dispatch(getMenuThunk());
  }, [dispatch]);
  return (
    <>
      <h1>Menu</h1>
      <ul className="menu-item-container">
        {menu.map((item) => {
          return (
            <li className="menu-item-block" key={item.id}>
              <div className="menu-item-container">{item.name}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Menu;
