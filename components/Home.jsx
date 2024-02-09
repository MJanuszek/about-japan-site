import React from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import "../styles/home.scss";
import Introduction from "./Introduction";
import Discover from "./Discover";
import Footer from "./Footer";
import Quizz from "./Quizz";

function Home() {
  return (
    <div className="home-page">
      <Navigation />
      <Header />
      <Introduction />
      <Discover />
      <Quizz />
      <Footer />
    </div>
  );
}

export default Home;
