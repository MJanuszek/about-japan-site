import React from "react";
import { useState, useEffect, useRef } from "react";
import "../styles/introduction.scss";

//

// -------------------COMPONENT-----------------
function Introduction() {
  const titleRef = useRef(null);
  useEffect(() => {
    function changeFontGradient() {
      const generatePastel = () => {
        const r = Math.floor(Math.random() * 100 + 155);
        const g = Math.floor(Math.random() * 100 + 155);
        const b = Math.floor(Math.random() * 100 + 155);
        return `rgb(${r}, ${g}, ${b})`;
      };

      const gradient = `linear-gradient(to right, ${generatePastel()}, ${generatePastel()})`;

      if (titleRef.current) {
        titleRef.current.style.backgroundImage = gradient;
      }
    }

    let colorChanged;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            clearInterval(colorChanged);
            colorChanged = setInterval(changeFontGradient, 4000);
            console.log("interval start");
          } else {
            clearInterval(colorChanged);
            console.log("cleared");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      clearInterval(colorChanged);
      observer.disconnect();
    };
  }, []);

  // --------
  return (
    <div className="introduction-section">
      <h1 ref={titleRef} className="introduction-title section-title">
        Site for every Japan enthusiast
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
