import { useModal } from "../../context/Modal";
import { useState } from "react";

import "./style/itemModal.css";

const ItemModel = ({ item }) => {
  const { closeModal } = useModal();

  const handleSubmit = async () => {
    closeModal();
  };

  return (
    <>
      <div className="modal-item-div-wrapper">
        <div>
          <span className="modal-item-info-container">
            <p>{item.name}</p>
            <p>$ {item.price}</p>
          </span>
          <p className="modal-item-description">{item.description}</p>
          <div className="modal-item--container">
            <div className="modal-item-buttons">
              <button
                className="modal-item-button-cancel"
                onClick={() => closeModal()}
              >
                Cancel
              </button>
              <button
                className="modal-item-button-submit"
                onClick={() => closeModal()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemModel;
