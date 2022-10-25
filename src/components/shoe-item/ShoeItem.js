import React from "react";
import "./shoe-item.styles.scss";
export default function ShoeItem({ title, imageUrl, size }) {
  return (
    <div className={`${size} shoe-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
}
