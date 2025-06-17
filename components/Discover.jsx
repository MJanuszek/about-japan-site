import React, { useState } from "react";
import "../styles/discover.scss";
import japanFacts from "../components/factsJapan";

function Discover() {
  const [fact, setFact] = useState("");

  const getRandom = () => {
    const allFacts = Object.values(japanFacts).flat(); // combines all arrays
    const randomIndex = Math.floor(Math.random() * allFacts.length);
    setFact(allFacts[randomIndex]);
  };

  return (
    <div className="discover-section">
      <div className="discover">
        <div className="discover-section__word" onClick={getRandom}>
          Discover something about Japan
        </div>
        {fact && <p className="discover-section__fact">{fact}</p>}
      </div>
    </div>
  );
}

export default Discover;
