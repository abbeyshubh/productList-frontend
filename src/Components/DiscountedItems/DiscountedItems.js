import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./DiscountedItems.css";
import { Link, Redirect } from "react-router-dom";
import { productAction } from "../../Redux/actions/productAction";
import AlertPopup from "../AddImage/AlertPopup";

export const DiscountedItems = (props) => {
  const [redirect, setRedirect] = useState(false);
  const [product, setProduct] = useState({});

  const { productAction, productList, addToCart, qty } = props;
  useEffect(() => {
    let allProducts = async () => await productAction();
    allProducts();
  }, []);
  const ProductDetail = (e, item, index) => {
    setRedirect(true);
    setProduct(item);
  };

  if (redirect) {
    return (
      <Redirect
        to={{
          pathname: "/productDetails",
          state: product,
        }}
      />
    );
  }
  return (
    <div className="container-fluid">
      <div style={{ display: "flex", marginTop: "30px" }}>
        <h4>Our Products</h4>
        <Link href="#" className="link">
          View More
        </Link>
      </div>
      <div className="row">
        {productList?.map((item, index) => {
          let images = "images/" + item.productImage;
          return (
            <div key={index} className="col-md-2">
              <div className="categoryBox">
                <div className="row">
                  <img
                    src={images}
                    className="category_img"
                    onClick={(e) => ProductDetail(e, item, index)}
                    alt="123"
                  />
                </div>
                <div className="row description1">
                  <b>{item.productName}</b>
                  <p>
                    <b>1 Stock - 1 Kg</b>
                  </p>
                </div>
                <div className="row price">
                  <b>&#x20B9; {item.price}</b>
                </div>
                <div
                  className="row"
                  style={{ justifyContent: "center", marginTop: "15px" }}
                >
                  <button
                    className="add_cart_button"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        {/* <div className="col-md-2">
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
        </div> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.ProductReducer);
  return { ...state.ProductReducer };
};

const mapDispatchToProps = {
  productAction,
};
// export default DiscountedItems;
export default connect(mapStateToProps, mapDispatchToProps)(DiscountedItems);
