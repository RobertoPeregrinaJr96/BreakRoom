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
        <div className="modal-item-button-div">
          <div className="modal-item-buttons">
            <button
              className="modal-item-button-cancel"
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
