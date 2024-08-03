// frontend/src/components/Navigation/index.js
import React from "react";
import MainContent from "./mainContent";
import RightMenu from "./rightMenu";
import "./style/landingPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getItemsThunk } from "../../store/item";
import { getHighestAvgThunk } from "../../store/item";
import { getCurrentOrderThunk } from "../../store/order";
function LandingPage() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.item.allItems);
  const highestAvgItemsData = useSelector((state) => state.item.highestAvgItem);
  const user = useSelector((state) => state.session.user);
  const displaySettings = useSelector((state) => state.session.setting);
  let display = displaySettings.display;
  let mode = displaySettings.mode;

  // CSS
  const gridLayout = (items) => {
    return (
      <>
        <div className={`landingPage-container ${mode}`}>
          <div className="landingPage-content-wrapper">
            <span className="main-content">
              <MainContent item={highestAvgItemsData} />
            </span>
            {items ? (
              <span className="right-menu-container">
                <RightMenu items={items} settings={displaySettings}/>
              </span>
            ) : (
              <span></span>
            )}
          </div>
        </div>
      </>
    );
  };
  const blockLayout = (items) => {
    return (
      <>
        <div className={`landingPage-container ${mode}`}>
          <div
            // className="landingPage-content-wrapper"
            style={{ display: "grid", gridTempletColumns: "100%" }}
          >
            <span className="main-content">
              <MainContent item={highestAvgItemsData} />
            </span>
            {items ? (
              <span className="right-menu-container">
                <RightMenu items={items} settings={displaySettings}/>
              </span>
            ) : (
              <span></span>
            )}
          </div>
        </div>
      </>
    );
  };
  const apiBlackout = () => {
    return (
      <>
        <h1>LandingPage</h1>
        <div className="landingPage-container">
          <div className="landingPage-content-wrapper">
            <span className="main-content">
              <MainContent />
            </span>
            <span className="right-menu-container"></span>
          </div>
        </div>
      </>
    );
  };
  useEffect(() => {
    dispatch(getItemsThunk());
    dispatch(getHighestAvgThunk("placeholder"));
    if (user !== undefined && user !== null) {
      if (user !== undefined && user !== null) dispatch(getCurrentOrderThunk());
    }
  }, [dispatch]);

  if (items && display === "grid") {
    return gridLayout(items);
  } else if (items && display === "block") {
    return blockLayout(items);
  } else {
    apiBlackout();
  }
}

export default LandingPage;
