// frontend/src/components/Navigation/index.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./style/order.css";
import { getCurrentOrderThunk } from "../../store/order";
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
  const [boolean, setBoolean] = useState(true);
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

  // Onclick functions for Quantity update
  // Function to delete item
  const deleteItem = async (e, id) => {
    setBoolean(!boolean);
  };
  // Update Minus One
  const updateItemMinus = async (e, item) => {
    const quantity = item.quantity;
    if (quantity === 0) return;
    if (quantity === 1) {
      // If quantity is 1, delete the item
      deleteItem();
    } else {
      // If quantity is greater than 1, decrease the quantity
    }
  };
  // Update Plus One
  const updateItemPlus = (e, item) => {
    // Increase the quantity by 1
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

  // Css Logic
  const selectPreference = (e) => {
    e.preventDefault();
    setDisplayPreference((prev) => (prev === "grid" ? "block" : "grid"));
  };

  const imageLayout = (food) => {
    if (displayPreference === "grid") {
      return {
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${food.itemImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      };
    }
  };
  const imageLayoutBlock = (food) => {
    if (displayPreference === "block") {
      return (
        <div className="order-item-info-image-container">
          <img
            src={food.itemImage}
            className={`order-item-info-image-${displayPreference}`}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              overflow: "hidden",
            }}
          ></img>
        </div>
      );
    }
  };

  // useEffect to update total when orderItems change
  useEffect(() => {
    const newTotal = setNewTotal();
    setTotal(newTotal);
  }, [orderItems]);
  // useEffect
  useEffect(() => {
    dispatch(getCurrentOrderThunk());
  }, [dispatch]);

  return order ? (
    <>
      <div className="orderPage">
        <h1>OrderPage</h1>
        <h2>${total}</h2>
        <button
          className="display-mode-toggle"
          onClick={(e) => selectPreference(e)}
        ></button>
        <ul className={`order-item-container-${displayPreference}`}>
          {orderItems.map((item) => {
            const food = item.item;
            const modifiers = item.modifiers;
            return (
              <li
                key={item.id}
                className={`order-item-li-${displayPreference}`}
                style={imageLayout(food)}
              >
                <OpenModalDiv modalComponent={<OrderUpdateModal item={item} />}>
                  <div className="order-item-li-block-div">
                    {imageLayoutBlock(food)}
                    <span className={`order-item-info-${displayPreference}`}>
                      <span className="order-item-info-placecard">
                        <h3>
                          {food.name} ${itemTotalPrice(item, food)}
                        </h3>
                        <p>{modifiers.map((a) => ` ${a.modifierName},  `)}</p>
                        <p>{item.customInstruction.slice(0, 20)}...</p>
                      </span>
                    </span>
                    {displayPreference === "grid" ? <></> : <div></div>}
                  </div>
                </OpenModalDiv>
                <div className={`order-item-update-${displayPreference}`}>
                  <button onClick={(e) => updateItemMinus(e, item)}>-</button>
                  <button onClick={(e) => updateItemPlus(e, item)}>+</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  ) : (
    <>
      <h2>No Items in Order</h2>
    </>
  );
}

export default OrderPage;
