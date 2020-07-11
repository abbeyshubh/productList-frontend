import React from "react";
import "./Cart.css";
function CartItems(props) {
  const {
    increaseQuantity,
    decreaseQuantity,
    session,
    deleteItem,
    saveOrder,
  } = props;

  return (
    <div className="container">
      <ul className="product_heading">
        <li className="product_list">Product</li>
        <li className="product_list">Price</li>
        <li className="product_list">Quantity</li>
        <li className="product_list">Subtotal</li>
        <li className="product_list">Action</li>
      </ul>
      <div className="">
        {session.map((item, index) => {
          console.log(item);
          let image = "images/" + item.productImage;
          return (
            <div key={index}>
              <div className="row">
                <div className="col-md-1 text-center">
                  <img
                    src={image}
                    style={{ height: "100%", width: "100%" }}
                    alt="img"
                  />
                </div>
                <div className="col-md-2 text-center">{item.productName}</div>
                <div className="col-md-2 text-center">
                  &#x20B9; {item.price}
                </div>
                <div className="col-md-2 text-center">
                  <div className="row">
                    <div
                      className="col-md-4"
                      style={{ paddingLeft: "inherit" }}
                    >
                      <button
                        className="quantity_button"
                        onClick={() => decreaseQuantity(item)}
                      >
                        <b> - </b>
                      </button>
                    </div>
                    <div className="col-md-4">
                      <div
                        style={{
                          borderBottom: "1px solid #666",
                          textAlign: "center",
                        }}
                      >
                        {item.quantity}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <button
                        className="quantity_button"
                        onClick={() => increaseQuantity(item)}
                      >
                        <b> + </b>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 text-center">
                  &#x20B9; {item.totalPrice}
                </div>
                <div className="col-md-2 text-center">
                  <i
                    class="fa fa-trash"
                    style={{
                      color: "red",
                      fontSize: "23px",
                      cursor: "pointer",
                    }}
                    onClick={(e) => deleteItem(e, item)}
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
        
      </div>
    </div>
  );
}

export default CartItems;
