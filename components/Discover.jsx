import React, { useState } from "react";
import "../styles/discover.scss";

function Discover() {
  const [showPopupTxt, setPopupText] = useState("");
  return (
    <div className="discover-section">
      <h1 className="discover-title">Pick your discovery</h1>
      <div className="discover">
        <div className="discover-section__word">Discover japanese word</div>
        <div className="discover-section__anime">Discover anime title</div>
        <div className="discover-section__city">Discover Japan City</div>
      </div>
      {showPopupTxt && <div></div>}
    </div>
  );
}

export default Discover;
