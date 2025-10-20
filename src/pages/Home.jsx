import React from "react";
import "./Home.css";
import ImageGallery from "../components/ImageGallery";
import MenuBtn from "../components/MenuBtn";
import Reviews from "../components/Reviews";

export default function Home() {
  return (
    <div className="home">
      <section className="intro">
        <h2>Welcome to Delicious Bites</h2>
        <p>Serving happiness and fresh meals all week long!</p>
      </section>

      <section className="gallery-section">
        <ImageGallery />
        <MenuBtn />
      </section>

      <section className="reviews-section">
        <Reviews />
      </section>
    </div>
  );
}