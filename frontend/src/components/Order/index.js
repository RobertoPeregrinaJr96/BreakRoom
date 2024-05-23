// frontend/src/components/Navigation/index.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./style/order.css";
import {
  deleteOrderItemThunk,
  getCurrentOrderThunk,
  updateOrderItemThunk,
} from "../../store/order";
import OrderUpdateModal from "../ModalComponents/orderUpdateModal";
import OpenModalDiv from "../Navigation/OpenModalButton/modalDiv";
import { sessionSetting } from "../../store/session";

function OrderPage() {
  // useSelector
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);
  const orderItems = order?.currentOrder?.orderItems || [];
  const displaySettings = useSelector((state) => state.session.setting);
  let display = displaySettings.display;
  let mode = displaySettings.mode;

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
  const manualInput = async (e, item, num) => {
    let updateItem = item;
    if (updateItem.quantity >= 10) {
      window.alert("STOP BEING A DORK");
      updateItem.quantity = num;
      dispatch(updateOrderItemThunk(item.id, updateItem));
    } else {
      updateItem.quantity = num;
      dispatch(updateOrderItemThunk(item.id, updateItem));
    }
  };
  // Function to delete item
  const deleteItem = async (e, id) => {
    dispatch(deleteOrderItemThunk(id));
    setBoolean(!boolean);
  };
  // Update Minus One
  const updateItemMinus = async (e, item) => {
    const updateItem = item;
    if (updateItem.quantity === 0) return;
    if (updateItem.quantity === 1) {
      // If quantity is 1, delete the item
      deleteItem(e, item.id);
    } else {
      // If quantity is greater than 1, decrease the quantity
      updateItem.quantity--;
      dispatch(updateOrderItemThunk(item.id, updateItem));
    }
  };
  // Update Plus One
  const updateItemPlus = (e, item) => {
    // Increase the quantity by 1
    let updateItem = item;

    if (updateItem.quantity >= 10) {
      window.alert("STOP BEING A DORK");
      updateItem.quantity--;
      dispatch(updateOrderItemThunk(item.id, updateItem));
    } else {
      updateItem.quantity++;
      dispatch(updateOrderItemThunk(item.id, updateItem));
    }
  };
  const setNewTotal = () => {
    let sum = 0;
    orderItems.forEach((item) => {
      const food = item.item;
      let num = itemTotalPrice(item, food);
      sum += Number(num);
    });
    return sum.toFixed(2);
  };

  const imageLayout = (food) => {
    if (display === "grid") {
      return {
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${food.itemImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      };
    }
  };
  const imageLayoutBlock = (food) => {
    if (display === "block") {
      return (
        <div className="order-item-info-image-container">
          <img
            src={food.itemImage}
            className={`order-item-info-image-${display}`}
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

        <ul className={`order-item-container-${display}`}>
          {orderItems.map((item) => {
            const food = item.item;
            const modifiers = item.modifiers;
            return (
              <li
                key={item.id}
                className={`order-item-li-${display}`}
                style={imageLayout(food)}
              >
                <OpenModalDiv modalComponent={<OrderUpdateModal item={item} />}>
                  <div className="order-item-li-block-div">
                    {imageLayoutBlock(food)}
                    <span className={`order-item-info-${display}`}>
                      <span className="order-item-info-placecard">
                        <h3>
                          {food.name} ${itemTotalPrice(item, food)}
                        </h3>
                        <p>{modifiers.map((a) => ` ${a.modifierName},  `)}</p>
                        <p>{item.customInstruction.slice(0, 20)}...</p>
                      </span>
                    </span>
                    {display === "grid" ? <></> : <div></div>}
                  </div>
                </OpenModalDiv>
                <div className={`order-item-update-${display}`}>
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
