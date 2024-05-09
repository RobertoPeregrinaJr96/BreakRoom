// frontend/src/components/Navigation/index.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./style/order.css";
import { getCurrentOrderByIdThunk } from "../../store/order";
function OrderPage() {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);
  const orderItems = order?.currentOrder["orderItems"]
    ? order?.currentOrder["orderItems"]
    : [];
  const [displayPrefference, setDisplayPrefference] = useState("grid");
  const [total, setTotal] = useState(order["tot"]);
  const itemTotalPrice = (item, food) => {
    let sum = 0;
    return (sum += item.quantity * food.price);
  };

  const selectPrefference = (e) => {
    e.preventDefault();
    if (displayPrefference === "grid") {
      setDisplayPrefference("block");
    } else {
      setDisplayPrefference("grid");
    }
  };

  useEffect(() => {
    dispatch(getCurrentOrderByIdThunk());
  }, [dispatch]);

  return order ? (
    <>
      <h1>OrderPage</h1>
      <button
        className="order-item-layout"
        onClick={(e) => selectPrefference(e)}
      ></button>
      <ul className={`order-item-container-${displayPrefference}`}>
        {orderItems.map((item) => {
          const food = item.item;
          const modifiers = item.modifiers;
          return (
            <li key={item.id} className="order-item-li">
              <span className={`order-item-info-${displayPrefference}`}>
                <span>
                  <h3>
                    {" "}
                    {food["name"]} ${itemTotalPrice(item, food)}
                  </h3>
                  <p>
                    {modifiers.map((a) => ` ${a.modifierName} total price`)}
                  </p>
                </span>
                <p>{item["customInstruction"].slice(0, 20)}</p>
              </span>
              <div className={`order-item-update-${displayPrefference}`}></div>
            </li>
          );
        })}
      </ul>
    </>
  ) : (
    <>
      <h2>No Items in Order</h2>
    </>
  );
}

export default OrderPage;
