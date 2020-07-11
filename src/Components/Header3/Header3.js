import React, { useState } from "react";
import "./Header3.css";
function Header3(props) {
  const [navBar, setNavBar] = useState("");
  function handleDisplay(e, id, status) {
    if (status === 1) {
      setNavBar(id);
    } else {
      setNavBar("");
    }
  }
  return (
    <div className="row" id="header_first" style={{ position: "sticky" }}>
      <ul className="header3_margin">
        <li
          className="col-md-2"
          onMouseOverCapture={(e) => handleDisplay(e, "home", 1)}
          // onMouseOut={(e) => handleDisplay(e, "home", -1)}
        >
          Home{" "}
          <i
            class="fa fa-caret-down"
            style={{ marginLeft: "auto", marginTop: "auto" }}
          ></i>
        </li>
        {/* {navBar === "home" ? (
          <ul className="header3_dropDown" style={{ zIndex: 20000 }}>
            <li className="header3_dropItems">
              <i class="fa fa-angle-right" style={{ marginRight: "15px" }}></i>{" "}
              Grocery
            </li>
            <li className="header3_dropItems">
              <i class="fa fa-angle-right" style={{ marginRight: "15px" }}></i>{" "}
              Pulses
            </li>
            <li className="header3_dropItems">
              <i class="fa fa-angle-right" style={{ marginRight: "15px" }}></i>{" "}
              Vegetables
            </li>
            <li className="header3_dropItems">
              <i class="fa fa-angle-right" style={{ marginRight: "15px" }}></i>{" "}
              Fruits
            </li>
          </ul>
        ) : (
          ""
        )} */}
        <li className="col-md-4">About Us</li>
        {/* <li className="col-md-2">Grocery</li> */}
        <li className="col-md-5">Fruits & Vegetables</li>
        {/* <li className="col-md-1">Shop</li>
        <li className="col-md-1">FAQ</li> */}
        <li className="col-md-3"> Contact</li>
      </ul>
    </div>
  );
}

export default Header3;
