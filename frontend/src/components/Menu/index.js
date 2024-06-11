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
  const displaySettings = useSelector((state) => state.session.setting);
  let display = displaySettings.display;
  let mode = displaySettings.mode;

  const imageLayout = (food) => {
    if (display === "block") {
      return {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${food.itemImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: "10px",
      };
    } else {
      return {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${food.itemImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: "10px",
      };
    }
  };

  useEffect(() => {
    dispatch(getMenuThunk());
  }, [dispatch]);
  return (
    <>
      <h1>Menu</h1>
      <ul className={`menu-item-container-${display} ${mode}`}>
        {menu?.map((item) => {
          return (
            <li
              className={`menu-item-li-${display} ${mode}`}
              key={item.id}
              style={imageLayout(item)}
            >
              <OpenModalDiv modalComponent={<ItemModal item={item} />}>
                <div className={`menu-item-element-${display} ${mode}`}>
                  <h3 className={`menu-item-name-${display} ${mode}`}>
                    {item.name}
                  </h3>
                  <span className={`menu-item-context-${display} ${mode}`}>
                    {/* <div className={`menu-item-img-container-${display}`}> */}
                    <img
                      src={item.itemImage}
                      className={`menu-item-img-${display} ${mode}`}
                    ></img>
                    {/* </div> */}
                    <p className={`menu-item-description-${display} ${mode}`}>
                      {item.description}
                    </p>
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
