import "./style/rightMenu.css";
import SearchComponent from "../Util/search";
import OpenModalButton from "../Navigation/OpenModalButton/index";
import ItemModel from "../ModalComponents/ItemModal";
import { useState } from "react";

function RightMenu({ items, settings }) {
  let display = settings.display;
  let mode = settings.mode;

  items = Object.values(items);
  const itemsPerPage = 7;

  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = ((items.length + itemsPerPage - 1) / itemsPerPage) | 0;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };
  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, items.length);
  const displayedItems = items.slice(startIndex, endIndex);

  const randomImage = () => {
    // Image a place card that will transition to different items currently on the menu
    // the card is filtered through the array of item
    // with each item ,  we populated the the item image, the description , price?
  };

  return (
    <>
      <div className="rightMenu-container">
        <h1 className="rightMenu-h1">Right Menu</h1>
        <menu className="right-menu-item-container">
          <span className="right-menu-search-container">
            {items ? (
              <SearchComponent items={items} />
            ) : (
              <input type="text" className="right-menu-search-input"></input>
            )}
          </span>
          {items ? (
            displayedItems.map((item) => {
              return (
                <span className="right-menu-item-cluster" key={item.id}>
                  <button className="right-menu-item-button-name">
                    {item.name}
                  </button>
                  <button className="right-menu-item-button-info">
                    <i className="fa-solid fa-circle-info"></i>
                  </button>
                  <button className="right-menu-item-button-cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </button>
                </span>
              );
            })
          ) : (
            <span className="right-menu-item-cluster">
              <span className="right-menu-item-button-container">
                <button className="right-menu-item-button-name">
                  Item name
                </button>
              </span>
              <span className="right-menu-item-button-container">
                <OpenModalButton
                  className="right-menu-item-button-info"
                  buttonText={<i className="fa-solid fa-circle-info"></i>}
                  modalComponent={<ItemModel />}
                >
                  <i className="fa-solid fa-circle-info"></i>
                </OpenModalButton>
              </span>
              <span className="right-menu-item-button-container">
                <button className="right-menu-item-button-cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </span>
            </span>
          )}
        </menu>
        <div className="right-menu-pag-container">
          <div className={`menu-card-${display}`}>
            <div className={`menu-card-image-${display}`}>
              <h3></h3>
              {/* <img src={`${randomImage()}`} /> */}
            </div>
          </div>
          {/* <button
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            className="right-menu-pag-button"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}
            className="right-menu-pag-button"
          >
            Next
          </button> */}
        </div>
      </div>
    </>
  );
}

export default RightMenu;
