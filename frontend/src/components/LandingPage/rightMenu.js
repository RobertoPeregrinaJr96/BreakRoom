import "./style/rightMenu.css";
import SearchComponent from "../Util/search";
import OpenModalButton from "../Navigation/OpenModalButton/index";
import ItemModel from "../ModalComponents/ItemModal";
import { useState } from "react";

function RightMenu({ items, settings }) {
  items = Object.values(items);
  const { display, mode } = settings;

  const itemsPerPage = 7;

  const [currentPage, setCurrentPage] = useState(0);
  const [rotation, setRotation] = useState(`right`);
  const totalPages = ((items.length + itemsPerPage - 1) / itemsPerPage) | 0;

  const handleRotation = () => {
    switch (rotation) {
      case `right`:
        break;
      case `left`:
        break;
      default:
        break;
    }
  };
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };
  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, items.length);
  const displayedItems = items.slice(startIndex, endIndex);

  const componentLayout = (display, mode) => {
    switch ((display, mode)) {
      case ("block", "light"):
        break;
      case ("block", "night"):
        break;
      case ("grid", "light"):
        break;
      case ("grid", "night"):
        break;
      default:
        return <></>;
    }
  };

  return componentLayout(display, mode);
}

export default RightMenu;
