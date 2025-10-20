import React from "react";
import "./ImageGallery.css";

export default function ImageGallery() {
  const images = [
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
   ];

  return (
    <div className="image-gallery">
      {images.map((img, i) => (
        <div className="image-card" key={i}>
          <img src={img} alt={`meal-${i}`} />
        </div>
      ))}
    </div>
  );
}