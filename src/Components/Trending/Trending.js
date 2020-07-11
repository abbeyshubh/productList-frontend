import React from "react";
import "../DiscountedItems/DiscountedItems.css";
import { Link } from "react-router-dom";
function Trending(props) {
  return (
    <div className="container-fluid">
      <div style={{ display: "flex", marginTop: "30px" }}>
        <h4>Most Trending Items</h4>
        <Link href="#" className="link">
          View More
        </Link>
      </div>
      <div className="row">
        <div className="col-md-2">
          <div className="categoryBox">
            <div className="row">
              <img
                src="images/cashew.jpeg"
                className="category_img"
                alt="123"
              />
            </div>
            <div className="row description">
              <b>Red Valvet Cashew</b>
              <p>
                <b>1 Stock - 1 Kg</b>
              </p>
            </div>
            <div className="row price">
              <b>&#x20B9; 50</b>
            </div>
            <div
              className="row"
              style={{ justifyContent: "center", marginTop: "15px" }}
            >
              <div className="add_cart_button">Add to Cart</div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="categoryBox">
            <div className="row">
              <img
                src="images/almonds.jpg"
                className="category_img"
                alt="123"
              />
            </div>
            <div className="row description">
              <b>Red Valvet Almonds</b>
              <p>
                <b>1 Stock - 1 Kg</b>
              </p>
            </div>
            <div className="row price">
              <b>&#x20B9; 50</b>
            </div>
            <div
              className="row"
              style={{ justifyContent: "center", marginTop: "15px" }}
            >
              <div className="add_cart_button">Add to Cart</div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="categoryBox">
            <div className="row">
              <img
                src="images/peanuts.jpg"
                className="category_img"
                alt="123"
              />
            </div>
            <div className="row description">
              <b>Red Valvet Peanuts</b>
              <p>
                <b>1 Stock - 1 Kg</b>
              </p>
            </div>
            <div className="row price">
              <b>&#x20B9; 50</b>
            </div>
            <div
              className="row"
              style={{ justifyContent: "center", marginTop: "15px" }}
            >
              <div className="add_cart_button">Add to Cart</div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="categoryBox">
            <div className="row">
              <img src="images/tomato.jpg" className="category_img" alt="123" />
            </div>
            <div className="row description">
              <b>Red Valvet Tomato</b>
              <p>
                <b>1 Stock - 1 Kg</b>
              </p>
            </div>
            <div className="row price">
              <b>&#x20B9; 50</b>
            </div>
            <div
              className="row"
              style={{ justifyContent: "center", marginTop: "15px" }}
            >
              <div className="add_cart_button">Add to Cart</div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="categoryBox">
            <div className="row">
              <img src="images/potato.jpg" className="category_img" alt="123" />
            </div>
            <div className="row description">
              <b>Red Valvet Potato</b>
              <p>
                <b>1 Stock - 1 Kg</b>
              </p>
            </div>
            <div className="row price">
              <b>&#x20B9; 50</b>
            </div>
            <div
              className="row"
              style={{ justifyContent: "center", marginTop: "15px" }}
            >
              <div className="add_cart_button">Add to Cart</div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="categoryBox">
            <div className="row">
              <img src="images/ginger.jpg" className="category_img" alt="123" />
            </div>
            <div className="row description">
              <b>Red Valvet Ginger</b>
              <p>
                <b>1 Stock - 1 Kg</b>
              </p>
            </div>
            <div className="row price">
              <b>&#x20B9; 50</b>
            </div>
            <div
              className="row"
              style={{ justifyContent: "center", marginTop: "15px" }}
            >
              <div className="add_cart_button">Add to Cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
