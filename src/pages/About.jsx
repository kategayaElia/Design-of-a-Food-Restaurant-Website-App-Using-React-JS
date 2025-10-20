import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <h2>About Delicious Bites</h2>
      <p>
        Welcome to Timothy's restaurant bringing you the best of local and international cuisines. 
      </p>

      <p>
        Our goal is to make every meal memorable. Come taste the
        difference today!
      </p>

      <div className="about-highlight">
        <h3>Our Values</h3>
        <ul>
          <li>Fresh Ingredients</li>
          <li>Customer Satisfaction</li>
          <li>Quality Service</li>
        </ul>
      </div>
    </div>
  );
}