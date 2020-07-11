import React, { useEffect, useState } from "react";
import Header1 from "../Header/Header";
import Header2 from "../Header2/Header2";
import Header3 from "../Header3/Header3";
// import RecentlyViewed from "../RecentlyViewedSlider/RecentlyViewed";
import Slider from "../slider/Slider";
import DiscountedItems from "../DiscountedItems/DiscountedItems";
import { addToCart } from "../../helper/common";
import { getCartCount } from "../../helper/common";
// import AddImage from "../AddImage/AddImage";
// import Trending from "../Trending/Trending";
import Footer1 from "../Footer/Footer1/Footer";
import AlertPopup from "../AddImage/AlertPopup";
const Dashboard = () => {
  const [qty, setQty] = useState(0);
  const [popup, showPopup] = useState(false);
  const [cartAction, setCartAction] = useState(null);
  const [perSessionQuantity, setPerSessionQuantity] = useState(null);
  useEffect(() => {
    let qty = getCartCount();
    setQty(qty);
  }, []);
  const addCart = (item) => {
    let qty = addToCart(item);
    setQty(qty);
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
  return (
    <div>
      {/* <Header1 /> */}
      <Header2 qty={qty} returnUrl="/" />
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
      <Slider />
      {/* <RecentlyViewed />*/}
      <DiscountedItems addToCart={(item) => addCart(item)} qty={qty} />
      {/* <AddImage /> */}
      {/* <Trending /> */}
      <Footer1 />
    </div>
  );
};
export default Dashboard;
