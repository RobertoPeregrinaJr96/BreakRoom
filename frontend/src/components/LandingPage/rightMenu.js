import "./style/rightMenu.css";
import { useState } from "react";

function RightMenu({ items, settings }) {
  items = Object.values(items);
  const { display, mode } = settings;

  let itemsPerPage = 4;

  const [currentPage, setCurrentPage] = useState(0);
  const [rotation, setRotation] = useState(`right`);
  const totalPages = ((items.length + itemsPerPage - 1) / itemsPerPage) | 0;

  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, items.length);
  const displayedItems = items.slice(startIndex, endIndex);

  const handleRotation = (direction) => {
    if (direction === "right") {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
    } else if (direction === "left") {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    }
  };
  const backgroundImage = (item) => {
    return {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${item.itemImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      borderRadius: "10px",
      borderColor: "white",
    };
  };

  const renderLayout = () => {
    if (display === "block" && mode === "light") {
      return (
        <>
          <h1>{`${display}:${mode}`}</h1>
          <div className={`LP-menu-${display}-${mode}`}>
            <ul>
              {displayedItems.map((item) => (
                <li
                  key={item.id}
                  className={`LP-menu-li-${display}-${mode}`}
                  style={backgroundImage(item)}
                >
                  {`${item.name}`} {`${item.price.toFixed(2)}`}
                </li>
              ))}
            </ul>
          </div>
        </>
      );
    } else if (display === "block" && mode === "dark") {
      return <h1>{`${display}:${mode}`}</h1>;
    } else if (display === "grid" && mode === "light") {
      return (
        <>
          <h1>{`${display}:${mode}`}</h1>
          <div className={`LP-menu-${display}-${mode}`}>
            <ul>
              {displayedItems.map((item) => (
                <li key={item.id}>
                  {`${item.name}`} {`${item.price.toFixed(2)}`}
                </li>
              ))}
            </ul>
          </div>
        </>
      );
    } else if (display === "grid" && mode === "dark") {
      return <h1>{`${display}:${mode}`}</h1>;
    } else {
      return <h1>Something went wrong</h1>;
    }
  };

  return (
    <>
      <div>{renderLayout()}</div>
      <div>
        <button onClick={() => handleRotation("left")}>{`<`}</button>
        <button onClick={() => handleRotation("right")}>{`>`}</button>
      </div>
    </>
  );
}
export default RightMenu;
