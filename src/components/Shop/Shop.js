import { React, useState, useEffect } from "react";
import {
  Header,
  Breadcrumb,
  Segment,
  Image,
  Icon,
  Container,
} from "semantic-ui-react";
import "./style.css";
import logo from "./logo";
import khalti from "./images/khalti.png";
import esewa from "./images/esewa.png";
import fonepay from "./images/fonepay.png";
const Shop = (props) => {
  return (
    <>
      <div className="mainBodyShop">
        <Header as="h2" block className="header-breadcrump">
          <Breadcrumb size="3">
            <Breadcrumb.Section link>Kek Slicer</Breadcrumb.Section>
            <Breadcrumb.Divider icon="right chevron" />
            <Breadcrumb.Section active>Shop</Breadcrumb.Section>
          </Breadcrumb>
        </Header>
        <div className="shop-div-title">
          <p>
            Shop with us <Icon name="cart" className="cartLogo" color="black" />
          </p>
          <p className="shop-div-text">
            <Icon name="truck" color="blue" size="large" />
            Delivery &amp; Takeaway available
          </p>
          <p className="shop-div-order-warning">
            <Icon name="thumb tack" color="red" size="large" /> Cancel your
            order within 1 hour of order placement.
            <p style={{ float: "right" }}>
              <img src={khalti} height="50px" width="100px" />
              <img src={esewa} height="50px" width="120px" />
              <img src={fonepay} height="45px" width="120px" />
            </p>
          </p>
        </div>
        <Segment className="containerSegmentMain"></Segment>
      </div>
    </>
  );
};

export default Shop;
