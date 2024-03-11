import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { useEffect, useState } from "react";

const ItemModel = () => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleSubmit = async () => {
    closeModal();
  };

  return (
    <>
      <div className="checkout-div-wrapper">
        <div className="checkout-button-div">
          <div className="checkout-buttons">
            <button
              className="checkout-button-cancel"
              onClick={() => closeModal()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemModel;
