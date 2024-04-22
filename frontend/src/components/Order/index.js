// frontend/src/components/Navigation/index.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./style/order.css";
import { getOrderByIdThunk } from "../../store/order";
function OrderPage() {
  const dispatch = useDispatch();

  return (
    <>
      <h1>OrderPage</h1>
      <ul>{}</ul>
    </>
  );
}

export default OrderPage;
