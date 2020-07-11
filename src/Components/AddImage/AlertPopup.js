import React from "react";

function AlertPopup(props) {
  let { qty, perSessionQuantity, cartAction } = props;
  let action =
    cartAction === 1
      ? " item added to"
      : cartAction === -1
      ? perSessionQuantity > 1
        ? "items deleted from"
        : "item deleted from"
      : "";
  return (
    <div className="alert_popup_location">
      <div className="row alert_popup_head">
        <b>Congratulations !</b>
      </div>
      <div className="row alert_popup_body">
        <b style={{ font: "message-box" }}>
          {perSessionQuantity} {action} cart.
        </b>
        <b style={{ font: "message-box" }}>Total Items : {qty}</b>
      </div>
    </div>
  );
}

export default AlertPopup;
