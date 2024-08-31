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
  // add a case where if the last rotation in the pagitation is less than 4 then fill it with something OR make it so it doesent effect the page layout
  const handleRotation = (direction) => {
    if (direction === "right") {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
    } else if (direction === "left") {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    }
  };

  // fix this so it is more dynamic-ish idk but inline style shouldnt be my default fix
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
  // a bunch of if statements are not very demure , not very mindfule and should there should be another way to incorparte the display:mode settings without making indivisual jsx for them
  const renderLayout = () => {
    if (display === "block") {
      if (mode === "light") {
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
      } else if (mode === "dark") {
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
      }
    } else if (display === "grid") {
      if (mode === "light") {
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
      } else if (mode === "dark") {
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
      }
    }
  };
  // idk what it is but this doesnt seem right yet
  return (
    <>
      <div>
        <button
          className={`LP-menu-left-button`}
          onClick={() => handleRotation("left")}
        >{`<`}</button>
        <button
          className={`LP-menu-right-button`}
          onClick={() => handleRotation("right")}
        >{`>`}</button>
        <div>{renderLayout()}</div>
      </div>
    </>
  );
}
export default RightMenu;
