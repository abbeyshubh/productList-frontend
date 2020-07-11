import React from "react";
import "../RecentlyViewedSlider/RecentlyViewed.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
function Slider(props) {
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    arrows: true,
    prevArrow: (
      <div className="side_arrow">
        <i class="fa fa-angle-left"></i>
      </div>
    ),
    nextArrow: (
      <div className="side_arrow">
        <i class="fa fa-angle-right"></i>
      </div>
    ),
    infinite: true,
    indicators: true,
  };
  return (
    <div>
      <Fade {...properties} style={{ zIndex: -1 }}>
        <img src="images/slider2.webp" alt="slider" style={{ zIndex: -1 }} />
        <img src="images/slider1.webp" alt="slider" style={{ zIndex: -1 }} />
      </Fade>
    </div>
  );
}

export default Slider;
