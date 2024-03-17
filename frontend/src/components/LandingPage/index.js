// frontend/src/components/Navigation/index.js
import React from "react";
import MainContent from "./mainContent";
import RightMenu from "./rightMenu";
import "./style/landingPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrderThunk } from "../../store/order";
import { getItemsThunk } from "../../store/item";

function LandingPage() {
  const dispatch = useDispatch();
  const itemStoreData = useSelector((state) => state.item.allItems);
  const items = Object.values(itemStoreData)[0];
  console.log("Items in Index: ", items);

  useEffect(() => {
    dispatch(getOrderThunk());
    dispatch(getItemsThunk());
  }, [dispatch]);

  if (items) {
    return (
      <>
        <h1>LandingPage</h1>
        <div className="landingPage-container">
          <div className="landingPage-content-wrapper">
            <span className="main-content">
              <MainContent />
            </span>
            <span className="right menu">
              <RightMenu items={itemStoreData} />;
            </span>
          </div>
        </div>
      </>
    );
  } else {
    <>
      <h1>LandingPage</h1>
      <div className="landingPage-container">
        <div className="landingPage-content-wrapper">
          <span className="main-content">
            <MainContent />
          </span>
          <span className="right menu"></span>
        </div>
      </div>
    </>;
  }
}

export default LandingPage;
