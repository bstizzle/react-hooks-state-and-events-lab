import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, moveToCart] = useState("")

  function addToCart() {
    moveToCart("in-cart")
  }

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
