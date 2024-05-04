// frontend/src/components/Menu/index.js
import React, { useEffect } from "react";
import "./style/Menu.css";
import { useDispatch, useSelector } from "react-redux";
import { getMenuThunk } from "../../store/menu";
import ItemModal from "../ModalComponents/ItemModal";
import OpenModalDiv from "../Navigation/OpenModalButton/modalDiv";

function Menu() {
  const dispatch = useDispatch();
  const menuStoreData = useSelector((state) => state.menu.menuItems);
  const menu = Object.values(menuStoreData);

  useEffect(() => {
    dispatch(getMenuThunk());
  }, [dispatch]);
  return (
    <>
      <h1>Menu</h1>
      <ul className="menu-item-container">
        {menu?.map((item) => {
          return (
            <li className="menu-item-block" key={item.id}>
              <OpenModalDiv modalComponent={<ItemModal item={item} />}>
                <div className="menu-item-element">
                  <h3 className="menu-item-name">{item.name}</h3>
                  <span className="menu-item-context">
                    <img src={item.itemImage} className="menu-item-img"></img>
                    <p className="menu-item-description">{item.description}</p>
                  </span>
                </div>
              </OpenModalDiv>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Menu;
