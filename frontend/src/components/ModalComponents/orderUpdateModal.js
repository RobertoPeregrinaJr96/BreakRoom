import { useModal } from "../../context/Modal";

import "./style/itemModal.css";

const OrderUpdateModal = () => {
  const { closeModal } = useModal();

  const handleSubmit = async () => {
    closeModal();
  };

  return (
    <>
      <div className="modal-order-item-div-wrapper">
        <div>
          <span className="modal-order-item-info-container">
            <p>{}</p>
            <p>$ {}</p>
          </span>
          <p className="modal-order-item-description">{}</p>
          <div className="modal-order-item--container">
            <div className="modal-order-item-buttons">
              <button
                className="modal-order-item-button-cancel"
                onClick={() => closeModal()}
              >
                Cancel
              </button>
              <button
                className="modal-order-item-button-submit"
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
export default OrderUpdateModal;
