// frontend/src/components/Navigation/index.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./style/order.css";
import { getCurrentOrderByIdThunk } from "../../store/order";
function OrderPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  if (user) {
    dispatch(getCurrentOrderByIdThunk(user.id));
  }
  const order = useSelector((state) => state.order.currentOrder);
  console.log(order);
  return order ? (
    <>
      <h1>OrderPage</h1>
      <ul>{}</ul>
    </>
  ) : (
    <></>
  );
}

export default OrderPage;
