// frontend/src/components/Checkout/index.js
import React, { useEffect } from "react";

function CheckoutPage() {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {}, []);
  return (
    <>
      <h1>CheckoutPage</h1>

      <button onClick={(e) => onSubmit(e)}>CHeckout</button>
    </>
  );
}

export default CheckoutPage;
