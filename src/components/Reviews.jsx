import React from "react";
import "./Reviews.css";

const reviews = [
  { name: "Alice", comment: "Amazing food and service!" },
  { name: "John", comment: "Best restaurant in town." },
  { name: "Mary", comment: "Loved the weekly menu!" },
];

export default function Reviews() {
  return (
    <div className="reviews">
      <h2>Customer Reviews</h2>
      {reviews.map((rev, idx) => (
        <div className="review-card" key={idx}>
          <p>"{rev.comment}"</p>
          <p>- {rev.name}</p>
        </div>
      ))}
    </div>
  );
}