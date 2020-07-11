import React from "react";
// import { Row, Col, Tag, Button, Collapse } from "antd";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div
      className="header_strip"
      style={{ background: "linear-gradient(135deg, #171b20 1%,#343a40 100%)" }}
    >
      <div className="row" style={{ padding: "10px" }}>
        <div className="col-md-6">
          <div className="fontColorSize" style={{ color: "#ffffff" }}>
            20% CASHBACK for all users | Code: <b>UDUIFI128</b>
          </div>
        </div>
        <div className="col-md-6">
          <div style={{ float: "right", marginRight: "60px" }}>
            <i
              class="fa fa-user-plus"
              aria-hidden="true"
              style={{ color: "#ffffff", marginRight: "10px" }}
            ></i>
            <Link className="fontColorSize" style={{ color: "#ffffff" }}>
              Sign Up
            </Link>
            <i
              class="fa fa-sign-in"
              aria-hidden="true"
              style={{
                color: "#ffffff",
                marginLeft: "30px",
                marginRight: "10px",
              }}
            ></i>
            <Link className="fontColorSize" style={{ color: "#ffffff" }}>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
