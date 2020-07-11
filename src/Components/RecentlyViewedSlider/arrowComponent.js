import React from "react";
import "./RecentlyViewed.css";
// function arrowComponent({ onClick, ...rest }) {
//   const {
//     onMove,
//     carouselState: { currentSlide, deviceType },
//   } = rest;
//   // onMove means if dragging or swiping in progress.
//   return (
//     // <div className="side_arrow" onClick={onClick}>
//     <i class="fa fa-angle-right"></i>
//     // </div>
//   );
// }

const arrowComponent = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  //   alert(1);
  return (
    <div className="carousel-button-group">
      {" "}
      {/* // remember to give it position:absolute */}
      <div
        className={`side_arrow  ${currentSlide === 0 ? "disable" : ""}`}
        onClick={() => previous()}
      >
        <i class="fa fa-angle-left"></i>
      </div>
      <div
        className="side_arrow"
        style={{ marginLeft: "auto" }}
        onClick={() => next()}
      >
        <i class="fa fa-angle-right"></i>
      </div>
      {/* <button onClick={() => previous()}>jkshfjd</button>
      <button style={{ marginLeft: "auto" }} onClick={() => next()}>
        nnnnnnnnnnn
      </button> */}
      {/* <ButtonThree onClick={() => goToSlide(currentSlide + 1)}> */}
      {/* {" "}
        Go to any slide{" "}
      </ButtonThree> */}
    </div>
  );
};

export default arrowComponent;
