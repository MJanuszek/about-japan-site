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
        Japan, an island nation in the Pacific Ocean, is a fascinating
        amalgamation of ancient traditions and cutting-edge modernity. Known as
        the "Land of the Rising Sun," Japan is composed of four main
        islands—Honshu, Hokkaido, Kyushu, and Shikoku—surrounded by thousands of
        smaller islands. Its landscape is strikingly diverse, ranging from the
        snowy mountains of the north to the subtropical beaches of the south.
        <br /> <br />
        Historically, Japan has been a place of profound cultural evolution,
        evident from the samurai of the feudal era to the tech-savvy innovators
        of today. Japanese culture is renowned worldwide for its art, music, and
        cuisine, with sushi, sashimi, and ramen enjoying global popularity. The
        country's commitment to preserving its heritage while simultaneously
        embracing modern technology is evident in cities like Kyoto, where
        ancient temples stand near contemporary architecture.
        <br /> <br />
        Japan is economic powerhouse, having one of the world’s largest
        economies. It is a leader in technology and manufacturing, with
        companies like Toyota, Sony, and Panasonic known internationally for
        their innovation. Despite its economic success, Japan faces challenges
        such as an aging population and environmental threats like earthquakes
        and tsunamis. <br /> <br />
        Socially, Japan is known for its strong sense of community and respect
        for social harmony. Educational standards are high, with a system that
        emphasizes both academic and moral education. As a travel destination,
        Japan offers an alluring mix of experiences, from the neon-lit
        skyscrapers of Tokyo to the tranquil gardens and cherry blossoms of
        Maruyama Park in Sapporo. This blend of history, culture, and innovation
        makes Japan an endlessly intriguing place to explore.
      </p>
    </div>
  );
}

export default Introduction;
