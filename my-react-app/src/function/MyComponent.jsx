import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState();
  const [quantity, setQuantity] = useState();
  const [comment, setComment] = useState();
  const [payment, setPayment] = useState();
  const [shipping, setShipping] = useState();

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }
  function handleCommentChange(event) {
    setComment(event.target.value);
  }
  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }
  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleNameChange} placeholder="name" />
      <input
        value={quantity}
        onChange={handleQuantityChange}
        placeholder="quantity"
        type="number"
      />
      <br />
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="say something nice :D"
      ></textarea>
      <br />
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Debit">Debit</option>
        <option value="Gopay">Gopay</option>
        <option value="Ovo">Ovo</option>
      </select>
      <br />
      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        />
        Pick Up
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>

      <p>Name: {name}</p>
      <p>Quantity: {quantity}</p>
      <p>Payment: {payment}</p>
      <p>Note: {comment}</p>
      <p>Shipping: {shipping}</p>
    </div>
  );
}

export default MyComponent;
