import React, { useState } from "react";
import ShoeItem from "../shoe-item/ShoeItem";
import "./directory.styles.scss";

export default function Directory() {
  // eslint-disable-next-line no-unused-vars
  const [sections, setSections] = useState([
    {
      id: 1,
      title: "bestSellers",
      imageUrl:
        "https://hypebeast.com/image/2020/12/stadium-goods-top-10-best-selling-sneakers-2020-1.jpg",
    },
    {
      id: 2,
      title: "budget",
      imageUrl:
        "https://media.gq.com/photos/62d041b038e83293848220bc/16:9/w_2580%2Cc_limit/cheap-shoes-art-1.jpg",
    },
    {
      id: 3,
      title: "luxury",
      imageUrl:
        "https://assets.gqindia.com/photos/61adc7e93feb7571d1deaa29/16:9/w_2560%2Cc_limit/top-image2.jpg",
    },
    {
      id: 4,
      title: "mens",
      imageUrl:
        "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Library-Sites-SkechersSharedLibrary/default/dwd876caff/images/homepage/marketing-blocks/SKX51966_Jan_Men_1500x882.jpg?sw=1440",
      size: "large",
    },
    {
      id: 5,
      title: "womens",
      imageUrl:
        "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Library-Sites-SkechersSharedLibrary/default/dw7eea96fc/images/homepage/marketing-blocks/SKX51966_Jan_Women_1500x882.jpg?sw=1440",
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
