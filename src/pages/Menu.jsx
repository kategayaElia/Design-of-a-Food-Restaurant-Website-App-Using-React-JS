import React from "react";
import "./Menu.css";

const weeklyMenu = {
  Monday: ["Grilled Chicken with Rice", "Fresh Fruit Juice"],
  Tuesday: ["Beef Stew with Matooke", "Passion Fruit Juice"],
  Wednesday: ["Fried Fish with Chips", "Pineapple Smoothie"],
  Thursday: ["Vegetable Pasta", "Lemonade"],
  Friday: ["Goat Curry with Chapati", "Mango Juice"],
  Saturday: ["Pizza & Soda Combo", "Chocolate Cake"],
  Sunday: ["BBQ Ribs & Fries", "Orange Juice"],
};

export default function Menu() {
  return (
    <div className="menu">
      <h2>Weekly Menu</h2>
      <div className="menu-grid">
        {Object.entries(weeklyMenu).map(([day, meals]) => (
          <div className="menu-card" key={day}>
            <h3>{day}</h3>
            <ul>
              {meals.map((meal, index) => (
                <li key={index}>{meal}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}