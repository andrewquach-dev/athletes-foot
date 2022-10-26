import React, { useState } from "react";
import ShoeItem from "../shoe-item/ShoeItem";
import "./directory.styles.scss";

export default function Directory() {
  // eslint-disable-next-line no-unused-vars
  const [sections, setSections] = useState([
    {
      id: 1,
      title: "bestSellers",
      imageUrl: require("../../image/bestsellers.jpg"),
    },
    {
      id: 2,
      title: "budget",
      imageUrl: require("../../image/budget.jpg"),
    },
    {
      id: 3,
      title: "luxury",
      imageUrl: require("../../image/luxury.jpg"),
    },
    {
      id: 4,
      title: "mens",
      imageUrl: require("../../image/men.jpg"),
      size: "large",
    },
    {
      id: 5,
      title: "womens",
      imageUrl: require("../../image/women.jpg"),
      size: "large",
    },
  ]);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <ShoeItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
}
