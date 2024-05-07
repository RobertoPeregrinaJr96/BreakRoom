// frontend/src/components/Navigation/index.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./style/order.css";
import { getCurrentOrderByIdThunk } from "../../store/order";
function OrderPage() {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);
  console.log("Order: ", order);
  const orderItems = order?.currentOrder["orderItems"]
    ? order?.currentOrder["orderItems"]
    : [];
  console.log("Order Items:", orderItems);
  useEffect(() => {
    dispatch(getCurrentOrderByIdThunk());
  }, [dispatch]);
  return order ? (
    <>
      <h1>OrderPage</h1>
      <ul>
        {orderItems.map((item) => {
          return (
            <li key={item.id}>
              <span> {item.item["name"]}</span>
              <div></div>
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
