import React from "react";
import "./popup.css";
import { Link } from "react-router-dom";
function Popup(props) {
  const { head, body, foot } = props;
  return (
    <div className="container-fluid opacity">
      <div className="popup_location">
        <div className="row popup_head">
          <b>{head}</b>
        </div>
        <div className="row popup_body">
          <b style={{ padding: "27px" }}>{body}</b>
        </div>
        <div className="row ">
          <button
            className="add_cart_button"
            onClick={() => props.history.push("/")}
            style={{ margin: "auto" }}
          >
            <b style={{ color: "#eee" }}>Okay!</b>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
