import { useState } from "react";
import { useModal } from "../../context/Modal";
import { useDispatch } from "react-redux";
import "./style/updateItemModal.css";
const OrderUpdateModal = ({ item }) => {
  // general variables
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  // ------------------------------------------
  // item breakdown
  const orderItemInstructions = item?.customInstruction
    ? item.customInstruction
    : [];
  const modifiers = item?.defaultModifiers ? item.defaultModifiers : [];

  const [
    itemSizeInstruction,
    itemMilkInstruction,
    itemTempInstruction,
    itemShotInstruction,
  ] = modifiers;

  const itemSize = itemSizeInstruction;
  const itemMilk = itemMilkInstruction;
  const itemTemp = itemTempInstruction;
  const itemShot = itemShotInstruction;
  // ------------------------------------------
  // useStates
  const [size, setSize] = useState(itemSize ? itemSize : "Small");
  const [milk, setMilk] = useState(itemMilk ? itemMilk : "2% Milk");
  const [temperature, setTemperature] = useState(itemTemp ? itemTemp : "Warm");
  const [shot, setShot] = useState(itemShot ? itemShot : "No Espresso shot");
  const [custom, setCustom] = useState(orderItemInstructions);
  // ------------------------------------------
  // functions
  const handleSubmit = (e, item) => {
    e.preventDefault();
    const newModifiers = [size, milk, temperature, shot];
    const request = [newModifiers, custom];
    closeModal();
  };

  return (
    <>
      <div className="update-order-item-update-form-main-wrapper">
        <div className="update-order-item-update-form-div-container">
          <p>Update Order Item</p>
          <form
            className="update-order-item-update-form-form"
            onSubmit={(e) => handleSubmit(e, item)}
          >
            {/* Size */}
            <div className="update-order-item-update-form-div">
              <label for="item-Size"> Size:</label>
              <select id="item-Size" onChange={(e) => setSize(e.target.value)}>
                <option value={`${size}`} selected>{`${size}`}</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="large">large</option>
                <option value="Extra Large">Extra Large</option>
                <option value="Gallon">Gallon</option>
                <option value="Office (3 Gallons)">Office (3 Gallons)</option>
              </select>
            </div>
            {/* Creamer */}
            <div className="update-order-item-update-form-div">
              <label for="item-Creamer">Creamer:</label>
              <select
                id="item-Creamer"
                onChange={(e) => setMilk(e.target.value)}
              >
                <option value={`${milk}`} selected>{`${milk}`}</option>
                <option value="No Creamer">No Creamer</option>
                <option value="Heavy Cream">Heavy Cream</option>
                <option value="Vanilla Sweet Cream">Vanilla Sweet Cream</option>
                <option value="Nonfat Milk">Nonfat Milk</option>
                <option value="2% Milk">2% Milk</option>
                <option value="Whole Mlik">Whole Mlik</option>
                <option value="Breve (Half & Half)">{`Breve (Half & Half)`}</option>
                <option value="Almond">Almond</option>
                <option value="Coconut">Coconut</option>
                <option value="Oatmilk">Oatmilk</option>
                <option value="Soy">Soy</option>
              </select>
            </div>
            {/* Temperature */}
            <div className="update-order-item-update-form-div">
              <label for="item-milk-temperature"> Temperature:</label>
              <select
                id="item-milk-temperature"
                onChange={(e) => setTemperature(e.target.value)}
              >
                <option
                  value={`${temperature}`}
                  selected
                >{`${temperature}`}</option>
                <option value="Iced">Iced</option>
                <option value="Cold">Cold</option>
                <option value="Warm">Warm</option>
                <option value="Hot">Hot</option>
                <option value="Very Hot">Very Hot</option>
                <option value="Steamed">Steamed</option>
              </select>
            </div>
            {/* Shots */}
            <div className="update-order-item-update-form-div">
              <label for="item-milk-shot">Espresso shot Options:</label>
              <select
                id="item-milk-shot"
                onChange={(e) => setShot(e.target.value)}
              >
                <option value={`${shot}`} selected>{`${shot}`}</option>
                <option value="No Espresso shot">No Espresso shot</option>
                <option value="Signature Espresso Roast">
                  Signature Espresso Roast
                </option>
                <option value="">Blond Espresso Roast</option>
                <option value="Blond Espresso Roast">
                  Decaf Espresso Roast
                </option>
                <option value="1/3 Decaf Espresso Roast">
                  1/3 Decaf Espresso Roast
                </option>
                <option value="1/2 Decaf Espresso Roast">
                  1/2 Decaf Espresso Roast
                </option>
                <option value="2/3 Decaf Espresso Roast">
                  2/3 Decaf Espresso Roast
                </option>
              </select>
            </div>
            {/* Custom Instructions */}
            <div className="update-order-item-update-form-div">
              <label for="item-milk-custom">Additional Instructions:</label>
              <textarea
                id="item-milk-custom"
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                placeholder="Custom Instructions"
              ></textarea>
            </div>
            <div className="update-order-item-update-bttn-wrapper">
              <div className="update-order-item-update-bttn-div">
                <button onClick={(e) => closeModal(e)}>Cancel</button>
              </div>
              <div className="update-order-item-update-bttn-div">
                <button type="submit" onClick={(e) => handleSubmit(e, item)}>
                  Update{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default OrderUpdateModal;
