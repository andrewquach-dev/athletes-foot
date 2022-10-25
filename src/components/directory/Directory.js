import React, { useState } from "react";
import ShoeItem from "../shoe-item/ShoeItem";
import "./directory.styles.scss";

export default function Directory() {
  const [sections, setSections] = useState([
    {
      id: 1,
      title: "bestSellers",
      imageUrl: "https://picsum.photos/400/200",
    },
    {
      id: 2,
      title: "budget",
      imageUrl: "https://picsum.photos/400/200",
    },
    {
      id: 3,
      title: "luxury",
      imageUrl: "https://picsum.photos/400/200",
    },
    {
      id: 4,
      title: "mens",
      imageUrl: "https://picsum.photos/400/200",
      size: "large",
    },
    {
      id: 5,
      title: "womens",
      imageUrl: "https://picsum.photos/400/200",
      size: "large",
    },
  ]);
  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size }) => (
        <ShoeItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
}
