import React, { useState, useEffect } from "react";
import "./Header2.css";
import { Link } from "react-router-dom";
function Header2(props) {
  const { qty, returnUrl } = props;
  return (
    <div
      className="row"
      style={{
        background: "linear-gradient(145deg, #090979 0%,#00ffc0 100%)",
        padding: "20px 0",
      }}
    >
      {/* // #00d4ff*/}
      <div className="container">
        <div className="row">
          <div
            className="col-xs-6 col-md-3"
            style={{ verticalAlign: "middle" }}
          >
            <img
              src="images/logo-1.webp"
              alt="aaaa"
              className="header2_image"
            />
          </div>
          <div className="col-xs-9 col-md-6">
            <div style={{ padding: "5px" }}>
              <input
                type="search"
                placeholder="Enter Keywords here..."
                className="header2_search"
              />
              <button type="button" className="search">
                Search
              </button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="row cart">
              {/* <div style={{ cursor: "pointer" }}> */}

              <div
                className="col-md-6"
                style={{ float: "right", textAlign: "-webkit-right" }}
              >
                <div className="header2_cartCircle">
                  <div className="header2_cartIcon">
                    <i
                      className="fa fa-shopping-cart"
                      style={{
                        position: "absolute",
                        fontSize: 24,
                        top: 8,
                        left: 8,
                        color: "#ff7458",
                      }}
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="cartItems">
                    <b>{qty}</b>
                  </div>
                </div>
              </div>

              <div className="col-md-6" style={{ paddingLeft: "0" }}>
                <Link to={{ pathname: "/cart", returnUrl: returnUrl }}>
                  <div
                    className="myCart"
                    style={{
                      color: "#ffffff",
                      fontSize: "14px",
                      margin: "9px 0 0 0",
                      // cursor: "pointer",
                    }}
                  >
                    My Cart
                  </div>
                </Link>
              </div>

              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header2;
