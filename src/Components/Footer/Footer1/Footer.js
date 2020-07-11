import React, { useState } from "react";
import "./Footer.css";

function Footer(props) {
  const [temp, setTemp] = useState("");
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const temporary = (e) => {
    let { value } = e.target;
    if (/([\w]+(\s*)|(\n*))/g.test(value)) {
      let val = value.replace(/\s+$/, " ");

      val += value + "\r\n";
      setTemp(val);
    }
  };
  return (
    <div>
      <div className="footer_strip" onClick={scrollTop}>
        Back to Top
      </div>
    </div>
  );
}

export default Footer;
