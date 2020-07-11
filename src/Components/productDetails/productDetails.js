import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./productDetails.css";
import { getProductByIdAction } from "../../Redux/actions/productAction";
import Header1 from "../Header/Header";
import Header2 from "../Header2/Header2";
import Header3 from "../Header3/Header3";
import { addToCart } from "../../helper/common";
import { getCartCount } from "../../helper/common";
import AlertPopup from "../AddImage/AlertPopup";
function ProductDetails(props) {
  const { location, getProductByIdAction, productDetails, history } = props;
  const [qty, setQty] = useState(0);
  const [popup, showPopup] = useState(false);
  const [cartAction, setCartAction] = useState(null);
  const [perSessionQuantity, setPerSessionQuantity] = useState(null);
  const details = async (obj) => await getProductByIdAction(obj);
  useEffect(() => {
    let quantity = getCartCount();
    if (location.state) {
      details({ id: location.state._id });
    }
    setQty(quantity);
  }, []);

  const addCart = (item) => {
    let quantity = addToCart(item);
    setQty(quantity);
    setPerSessionQuantity(1);
    setCartAction(1);
    showPopup(true);
  };
  const closePopup = () => {
    showPopup(false);
  };

  if (popup) {
    setTimeout(() => {
      closePopup();
    }, 4000);
  }
  const images = "images/" + productDetails.productImage;
  const desc = productDetails.description;
  return (
    <div>
      {/* <Header1 /> */}
      <Header2 qty={qty} returnUrl="/productDetails" />
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
      <div style={{ padding: "20px" }}>
        <button className="add_cart_button" onClick={() => history.push("/")}>
          Back
        </button>
      </div>
      <div className="row">
        <div className="col-md-6" style={{ margin: "auto" }}>
          <img
            src={images}
            style={{ maxWidth: "100%" }}
            alt="Image not found"
          />
        </div>
        <div className="col-md-6" style={{ paddingTop: "20px" }}>
          <div className="row descBox">
            <div className="productName">
              <b>{productDetails.productName}</b>
            </div>
          </div>
          <div className="row descBox">
            <div className="price">
              <b>Price: </b>
              <span style={{ color: "#B12704" }}>
                &#x20B9; {productDetails.price}
              </span>
            </div>
          </div>
          <br />
          <div className="row descBox">
            <div className="description">
              <b>Description:</b>
            </div>
          </div>
          <div className="row descBox">
            <div className="description" style={{ whiteSpace: "pre-line" }}>
              {desc?.replace(/\*/gi, "\n")}
            </div>
          </div>
          <div
            className="row"
            style={{ justifyContent: "center", padding: "100px" }}
          >
            <button
              className="add_cart_button"
              style={{ margin: "auto" }}
              onClick={() => addCart(productDetails)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    ...state.ProductReducer,
  };
}
const mapDispatchToProps = {
  getProductByIdAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
