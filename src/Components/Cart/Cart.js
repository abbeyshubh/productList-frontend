import React, { useEffect, useState } from "react";
import "./Cart.css";
// import Header1 from "../Header/Header";
import Header2 from "../Header2/Header2";
import Header3 from "../Header3/Header3";
import { getCartCount } from "../../helper/common";
import { saveOrders } from "../../Redux/actions/ordersAction";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";
import { connect } from "react-redux";
import Popup from "../AddImage/popup";
import AlertPopup from "../AddImage/AlertPopup";
function Cart(props) {
  const { saveOrders, orderList, location, history } = props;
  const [session, setSession] = useState([]);
  const [dbStatus, setDb] = useState(0);
  const [qty, setQty] = useState(0);
  const [popup, showPopup] = useState(false);
  const [cartAction, setCartAction] = useState(null);
  const [perSessionQuantity, setPerSessionQuantity] = useState(null);

  useEffect(() => {
    let qty = getCartCount();
    setQty(qty);
    let sessionItem = localStorage.getItem("cartItem")
      ? JSON.parse(localStorage.getItem("cartItem"))
      : [];
    if (sessionItem.length) {
      setSession(sessionItem);
    }
  }, []);
  const doneMessage =
    "You have successfully purchased " +
    qty +
    " items. Your order will be dispatched when the lockdown period will over, Thanks.";
  const blankMessage =
    "Sorry, there is no item avalilable in the cart, please choose any item from the store and come back for checkout";
  const increaseQuantity = (item) => {
    let obj = { ...item };
    let sess = [...session];
    obj.quantity += 1;
    obj.totalPrice = obj.price * obj.quantity;
    let sessionIndex = sess.findIndex((a) => a._id === item._id);
    if (sessionIndex !== -1) {
      sess.splice(sessionIndex, 1, obj);
    }
    setSession(sess);
    localStorage.setItem("cartItem", JSON.stringify(sess));
    let qty = getCartCount();
    setQty(qty);
    setCartAction(1);
    setPerSessionQuantity(1);
    showPopup(true);
  };
  const decreaseQuantity = (item) => {
    let obj = { ...item };
    let sess = [...session];
    let sessionIndex = sess.findIndex((a) => a._id === item._id);
    if (obj.quantity > 1) {
      obj.quantity -= 1;
      obj.totalPrice = obj.price * obj.quantity;
      if (sessionIndex !== -1) {
        sess.splice(sessionIndex, 1, obj);
      }
    } else {
      sess.splice(sessionIndex, 1);
    }
    setSession(sess);
    localStorage.setItem("cartItem", JSON.stringify(sess));
    let qty = getCartCount();
    setQty(qty);
    setCartAction(-1);
    setPerSessionQuantity(1);
    showPopup(true);
  };
  const deleteItem = (e, item) => {
    e.preventDefault();
    let sess = [...session];
    let sessionIndex = sess.findIndex((a) => a._id === item._id);
    let deletedSession = sess.splice(sessionIndex, 1);
    setSession(sess);
    localStorage.setItem("cartItem", JSON.stringify(sess));
    let qty = getCartCount();
    setQty(qty);
    setCartAction(-1);
    setPerSessionQuantity(deletedSession[0].quantity);
    showPopup(true);
  };
  const submitStatus = async (status) => {
    if (props.orderList.status === 200) {
      status = 200;
      localStorage.removeItem("cartItem");
      setSession([]);
    } else {
      status = 400;
    }
    return status;
  };

  const saveOrder = async (e, arr) => {
    e.preventDefault();
    let status = 0;
    if (arr.length > 0) {
      await saveOrders({ orders: arr }).then((res) => {
        alert(JSON.stringify(res));
      });
      // alert(await submitStatus(status));
    } else {
      status = 400;
    }

    setDb(status);
  };
  const closePopup = () => {
    showPopup(false);
  };

  if (dbStatus === 200) {
    return <Popup head="Congratulations !" body={doneMessage} foot="/" />;
  } else if (!session.length) {
    return <Popup head="Oops !" body={blankMessage} foot="/" />;
  }

  if (popup) {
    setTimeout(() => {
      closePopup();
    }, 4000);
  }

  return (
    <div>
      {/* <Header1 /> */}
      <Header2 qty={qty} />
      <Header3 />
      {popup ? (
        <AlertPopup
          qty={qty}
          cartAction={cartAction}
          perSessionQuantity={perSessionQuantity}
        />
      ) : (
        ""
      )}

      <div className="cart_header">
        {dbStatus === 200 ? (
          <Popup head="Congratulations !" body={doneMessage} foot="/" />
        ) : (
          ""
        )}

        <div className="row cart_heading">
          Cart : <b>{qty} Items</b>
        </div>
        <div className="row cart_heading" style={{ paddingTop: "initial" }}>
          <div
            className="col-md-5 "
            style={{ textAlign: "right", paddingRight: "initial" }}
          >
            <Link to={{ pathname: "/" }} className="link">
              <b>Home</b>
            </Link>
          </div>
          <div>/</div>
          <div
            className="col-md-5"
            style={{ textAlign: "left", paddingLeft: "initial" }}
          >
            <Link to={{ pathname: "/cart" }} className="link">
              <b> My Cart</b>
            </Link>
          </div>
        </div>
      </div>
      <div style={{ padding: "20px" }}>
        <button
          className="add_cart_button"
          onClick={() => history.push(location.returnUrl)}
        >
          Back
        </button>
      </div>
      <CartItems
        increaseQuantity={(item) => increaseQuantity(item)}
        decreaseQuantity={(item) => decreaseQuantity(item)}
        session={session}
        deleteItem={(e, item) => deleteItem(e, item)}
        saveOrder={(e, arr) => saveOrder(e, arr)}
      />
      <div className="row">
        <button
          className="add_cart_button"
          style={{ margin: "20px 0 20px auto" }}
          onClick={(e) => saveOrder(e, session)}
        >
          <b>Place Order</b>
        </button>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    ...state.OrderReducer,
  };
};
const mapDispatchToProps = {
  saveOrders,
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
