import React, { useState } from "react";
import "../styles/discover.scss";

function Discover() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");
  const [showPopupTxt, setPopupText] = useState(false);

  const getRandomWord = async () => {
    const words = ["桜", "山", "海", "風", "心", "花", "夢", "道", "空"];
    const randomWord = words[Math.floor(Math.random() * words.length)];

    const res = await fetch(
      `https://jisho.org/api/v1/search/words?keyword=${randomWord}`
    );
    const data = await res.json();

    if (data.data.length > 0) {
      const entry = data.data[0];
      setWord(entry.japanese[0].word || entry.japanese[0].reading);
      setMeaning(entry.senses[0].english_definitions.join(", "));
      setPopupText(true);
    }
  };

  return (
    <div className="discover-section">
      <div className="discover">
        <div className="discover-section__word" onClick={getRandomWord}>
          Discover a Japanese word
        </div>
      </div>

      {showPopupTxt && (
        <div className="popup">
          <h2>{word}</h2>
          <p>{meaning}</p>
        </div>
      )}
    </div>
  );
}

export default Discover;
