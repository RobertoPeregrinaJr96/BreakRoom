// frontend/src/components/Navigation/index.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./style/order.css";
import { getCurrentOrderByIdThunk } from "../../store/order";
import OrderUpdateModal from "../ModalComponents/orderUpdateModal";
import OpenModalDiv from "../Navigation/OpenModalButton/modalDiv";

function OrderPage() {
  // useSelector
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const order = useSelector((state) => state.order);
  const orderItems = order?.currentOrder?.orderItems || [];

  // UseState
  const [displayPreference, setDisplayPreference] = useState("grid");
  const [total, setTotal] = useState(order?.currentOrder?.totalCost || 0);

  // Logic
  const itemTotalPrice = (item, food) => {
    let sum = 0;
    let modifier = item.modifiers;
    modifier.forEach((mod) => {
      sum += mod.modifierPrice;
    });
    return (sum += item.quantity * food.price).toFixed(2);
  };

  const setNewTotal = () => {
    let sum = 0;
    orderItems.forEach((item) => {
      const food = item.item;
      let num = itemTotalPrice(item, food);
      sum += Number(num);
    });
    return sum;
  };

  // useEffect to update total when orderItems change
  useEffect(() => {
    const newTotal = setNewTotal();
    setTotal(newTotal);
  }, [orderItems]);

  // Css Logic
  const selectPreference = (e) => {
    e.preventDefault();
    setDisplayPreference((prev) => (prev === "grid" ? "block" : "grid"));
  };

  // useEffect
  useEffect(() => {
    dispatch(getCurrentOrderByIdThunk());
  }, [dispatch]);

  return order ? (
    <>
      <h1>OrderPage</h1>
      <h2>${total}</h2>
      <button
        className="order-item-layout"
        onClick={(e) => selectPreference(e)}
      ></button>
      <ul className={`order-item-container-${displayPreference}`}>
        {orderItems.map((item) => {
          const food = item.item;
          const modifiers = item.modifiers;
          return (
            <li key={item.id} className="order-item-li">
              <OpenModalDiv modalComponent={<OrderUpdateModal item={item} />}>
                <img
                  src={food.itemImage}
                  className={`order-item-info-image-${displayPreference}`}
                ></img>
                <span className={`order-item-info-${displayPreference}`}>
                  <span>
                    <h3>
                      {food.name} ${itemTotalPrice(item, food)}
                    </h3>
                    <p>{modifiers.map((a) => ` ${a.modifierName}  `)}</p>
                  </span>
                  <p>{item.customInstruction.slice(0, 20)}</p>
                </span>
                <div className={`order-item-update-${displayPreference}`}></div>
              </OpenModalDiv>
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
