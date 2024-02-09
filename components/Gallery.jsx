import React from "react";
import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import "../styles/gallery.scss";
import GalleryNavigation from "./GalleryNavigation";
import Footer from "./Footer";

// -------------------------
// Import wszystkich obrazów .jpg z folderu 'travel'
// const imageModules = import.meta.globEager("./assets/travel-gallery/*.jpg");
// Przekształć obiekty modułów na tablicę ścieżek obrazów
// const images = Object.values(imageModules).map((mod) => mod.default);
// ----------------------------
// Przy użyciu import.meta.glob
const imageImports = import.meta.glob("./../assets/gallery-travel/*.jpg");
// Funkcja do dynamicznego ładowania obrazów
async function loadImages() {
  const imageModules = await Promise.all(
    Object.entries(imageImports).map(async ([, importFn]) => {
      const mod = await importFn();
      return mod.default;
    })
  );
  console.log("imageModules::", imageModules);
  return imageModules;
}

// ----------------------------------------

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    loadImages().then(setImages);
  }, []);
  console.log("state:", images);
  // -----------------------------------------------
  return (
    <div className="gallery-page">
      <Navigation />
      <GalleryNavigation />

      <div className="galleries">
        <div className="gallery-display" id="travel">
          {images.map((imgSrc, index) => (
            <div
              key={index}
              className="gallery-img"
              style={{
                backgroundImage: `url(${imgSrc})`,
              }}
            ></div>
          ))}
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
