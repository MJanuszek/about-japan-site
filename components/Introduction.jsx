import React from "react";
import { useState, useEffect } from "react";
import "../styles/introduction.scss";

//

// -------------------COMPONENT-----------------
function Introduction() {
  useEffect(() => {
    function changeBackgroundColor() {
      const bgColor1 = `rgb(${Math.floor(
        Math.random() * 256 + 100
      )}, ${Math.floor(Math.random() * 256 + 150)}, ${Math.floor(
        Math.random() * 256
      )})`;
      const bgColor2 = `rgb(${Math.floor(
        Math.random() * 256 + 100
      )}, ${Math.floor(Math.random() * 256 + 150)}, ${Math.floor(
        Math.random() * 256
      )})`;
      // apply color

      document.getElementById(
        "randomColorDiv"
      ).style.backgroundImage = `linear-gradient(to bottom, ${bgColor1}, ${bgColor2})`;

      // document.getElementById("randomColorDiv").style.backgroundColor = bgColor;
    }

    let colorChanged;
    // observe element in view to change color:::
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          clearInterval(colorChanged);
          if (entry.isIntersecting) {
            // start if in view::
            colorChanged = setInterval(changeBackgroundColor, 2000);
            console.log("interval start");
          } else {
            console.log("cleared");
            clearInterval(colorChanged);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(document.getElementById("randomColorDiv"));
  }, []);
  return (
    <div className="introduction-section">
      <h1 className="introduction-title section-title" id="randomColorDiv">
        Site for every otaku
      </h1>
      <p className="introduction-description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
        ullam illum nesciunt expedita illo. Ipsum mollitia eligendi, sed sit
        sequi id? Animi, labore suscipit tempora doloribus impedit quibusdam
        architecto cupiditate, recusandae nesciunt assumenda at. Corrupti,
        delectus voluptates dolores, voluptas voluptatem quia magni quisquam
        architecto obcaecati culpa odio impedit velit illum eligendi praesentium
        provident? Corporis quibusdam amet dignissimos et, accusamus at dolorem
        numquam in, qui non sed fugit quas vel excepturi animi blanditiis
        tempora porro nihil unde recusandae.
      </p>
    </div>
  );
}

export default Introduction;
