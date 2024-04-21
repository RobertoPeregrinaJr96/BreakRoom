// frontend/src/components/OpenModalButton/index.js
import React from "react";
import { useModal } from "../../../context/Modal";

function OpenModalDiv({
  modalComponent, // component to render inside the modal
  children, // content of the div that opens the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose, // optional: callback function that will be called once the modal is closed
}) {
  const { setModalContent, setOnModalClose } = useModal();

  const onClick = () => {
    if (typeof onButtonClick === "function") onButtonClick();
    if (typeof onModalClose === "function") setOnModalClose(onModalClose);
    setModalContent(modalComponent);
  };

  return <div onClick={onClick}>{children}</div>;
}

export default OpenModalDiv;
