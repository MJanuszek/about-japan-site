import React from "react";
import { Link } from "react-scroll";
import "../styles/galleryNav.scss";

function GalleryNavigation() {
  return (
    <div className="gallery-nav">
      <Link
        className="gallery-nav__link"
        to="travel"
        smooth={true}
        duration={500}
      >
        Travel
      </Link>
      <Link
        className="gallery-nav__link"
        to="food"
        smooth={true}
        duration={500}
      >
        Food
      </Link>
      <Link
        className="gallery-nav__link"
        to="culture"
        smooth={true}
        duration={500}
      >
        Culture
      </Link>
      <Link
        className="gallery-nav__link"
        to="anime"
        smooth={true}
        duration={500}
      >
        Anime
      </Link>
    </div>
  );
}

export default GalleryNavigation;
