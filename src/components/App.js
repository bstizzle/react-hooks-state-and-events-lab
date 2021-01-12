import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  const [mode, modeToggle] = useState("light")

  function toggle() {
    if(mode === "light"){
      modeToggle("dark")
    }else if(mode === "dark"){
      modeToggle("light")
    }
  }

  return (
    <div className={"App " + mode}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggle}>Dark Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
