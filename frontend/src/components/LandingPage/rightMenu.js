import "./style/rightMenu.css";
import SearchComponent from "../Util/search";
import OpenModalButton from "../Navigation/OpenModalButton/index";
import ItemModel from "../ModelComponents/ItemModel";
import getItemsThunk from "../../store/item";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getOrderThunk } from "../../store/order";

function RightMenu() {
  const dispatch = useDispatch();
  let menuItems = [{ name: "hello" }];

  useEffect(() => {
    dispatch(getOrderThunk());
    dispatch(getItemsThunk());
  }, [dispatch]);

  const temp = () => {};

  return (
    <>
      <h1 className="rightMenu-h1">Right Menu</h1>
      <div className="rightMenu-container">
        <menu className="menu-item-container">
          {/* <SearchComponent data={data} /> */}
          <span className="menu-search-container">
            <input className="menu-search-input"></input>
          </span>
          {menuItems ? (
            <span className="menu-item-cluster">
              <span className="menu-item-button-container">
                <button className="menu-item-button-name">Item name</button>
              </span>
              <span className="menu-item-button-container">
                <OpenModalButton
                  className="menu-item-button-info"
                  buttonText={<i class="fa-solid fa-circle-info"></i>}
                  modalComponent={<ItemModel />}
                >
                  <i class="fa-solid fa-circle-info"></i>
                </OpenModalButton>
              </span>
              <span className="menu-item-button-container">
                <button className="menu-item-button-cart">
                  <i class="fa-solid fa-cart-shopping"></i>
                </button>
              </span>
            </span>
          ) : (
            menuItems.map((item) => {
              <span className="menu-item-cluster">
                <button>{item.name}</button>
                <button>
                  <i class="fa-solid fa-circle-info"></i>
                </button>
                <button>
                  {" "}
                  <i class="fa-solid fa-cart-shopping"></i>
                </button>
              </span>;
            })
          )}
        </menu>
        <button onClick={(e) => temp()}>dsfsdfs</button>
      </div>
    </>
  );
}

export default RightMenu;
