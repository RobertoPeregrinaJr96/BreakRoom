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

  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, items.length);
  const displayedItems = items.slice(startIndex, endIndex);
  const handleRotation = () => {
    switch (rotation) {
      case `right`:
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));

        break;
      case `left`:
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
        break;
      default:
        break;
    }
  };

  const componentLayout = (display, mode) => {
    switch ((display, mode)) {
      case ("block", "light"):
        return (
          <>
            <h1>{`${display}:${mode}`}</h1>
          </>
        );
      case ("block", "dark"):
        return (
          <>
            <h1>{`${display}:${mode}`}</h1>
          </>
        );
      case ("grid", "light"):
        return (
          <>
            <h1>{`${display}:${mode}`}</h1>
          </>
        );
      case ("grid", "dark"):
        return (
          <>
            <h1>{`${display}:${mode}`}</h1>
          </>
        );
      default:
        return (
          <>
            <h1>Component Layout</h1>
          </>
        );
    }
  };

  return componentLayout(display, mode);
}

export default RightMenu;
