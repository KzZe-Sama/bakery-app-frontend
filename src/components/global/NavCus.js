import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import "./style.css";
export default function NavCus() {
  let [activeItem, setActive] = useState("home");
  let handleItemClick = (e, { name }) => {
    // console.log(name);
    setActive(name);
  };
  return (
    <>
      <Menu pointing secondary position="right" className="Nav">
        <Menu.Menu position="right">
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="menue"
            active={activeItem === "menue"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="about"
            active={activeItem === "about"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="shop"
            active={activeItem === "shop"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="contact"
            active={activeItem === "contact"}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    </>
  );
}
