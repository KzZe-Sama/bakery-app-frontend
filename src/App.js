import React from "react";
import NavCus from "./components/global/NavCus";

import Home from "./components/Home";
// import Menue from "./components/Menue";
import Shop from "./components/Shop/Shop";
function App() {
  const doughnuts = [
    { item_id: "1", name: "Chocolates Donuts", price: "Rs 40" },
    { item_id: "2", name: "Strawberry Donuts", price: "Rs 60" },
    { item_id: "3", name: "Strawberry Donuts", price: "Rs 60" },
    { item_id: "4", name: "Strawberry Donuts", price: "Rs 60" },
    { item_id: "5", name: "Strawberry Donuts", price: "Rs 60" },
    { item_id: "6", name: "Strawberry Donuts", price: "Rs 60" },
    { item_id: "7", name: "Strawberry Donuts", price: "Rs 60" },
    { item_id: "8", name: "Strawberry Donuts", price: "Rs 60" },
  ];
  return (
    <>
      <NavCus />
      <div className="mainBody">
        {/* <Home /> */}
        {/* <Menue data={doughnuts} /> */}
        <Shop />
        <footer
          style={{
            position: "sticky",
            textAlign: "center",
            backgroundColor: "#C4C4C4",
            color: "#312f2f",
            width: "100%",
          }}
        >
          Copyright 2021. All Rights Reserved.
        </footer>
      </div>
    </>
  );
}

export default App;
