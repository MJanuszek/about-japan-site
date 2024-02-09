import React from "react";
import Navigation from "./Navigation";
import "../styles/gallery.scss";
import GalleryNavigation from "./GalleryNavigation";
import Footer from "./Footer";

function Gallery() {
  return (
    <div className="gallery-page">
      <Navigation />
      <GalleryNavigation />
      <div className="galleries">
        <div className="gallery-display" id="travel">
          lorem
        </div>
        <div className="gallery-display" id="food">
          lorem
        </div>
        <div className="gallery-display" id="culture">
          lorem
        </div>
        <div className="gallery-display" id="anime">
          lorem
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
