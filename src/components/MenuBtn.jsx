import React from "react";
import "./MenuBtn.css";

export default function MenuBtn({ text, onClick }) {
  return (
    <button className="menu-btn" onClick={onClick}>
      {text}
    </button>
  );
}