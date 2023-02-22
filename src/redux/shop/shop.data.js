const SHOP_DATA = {
  bestsellers: {
      id: 1,
      title: "Bestsellers",
      routeName: "bestsellers",
      items: [
          {
              id: 1,
              name: "Adidas NMD R1",
              imageUrl: require("../../image/bestsellers/adidas-NMD-R1.png"),
              price: 175,
          },
          {
              id: 2,
              name: "Jordan 1 High",
              imageUrl: require("../../image/bestsellers/jordan-1-high.png"),
              price: 120,
          },
          {
              id: 3,
              name: "Jordan 13 Retro",
              imageUrl: require("../../image/bestsellers/jordan-13-retro.png"),
              price: 168,
          },
          {
              id: 4,
              name: "Nike Air Max 270",
              imageUrl: require("../../image/bestsellers/Nike-Air-Max-270.png"),
              price: 110,
          },
          {
              id: 5,
              name: "Nike Air Max 90",
              imageUrl: require("../../image/bestsellers/nike-air-max-90.png"),
              price: 165,
          },
          {
              id: 6,
              name: "Nike Air Max 97",
              imageUrl: require("../../image/bestsellers/Nike-Air-Max-97.png"),
              price: 185,
          },
          {
              id: 7,
              name: "Nike Air VaporMax Flyknit 3",
              imageUrl: require("../../image/bestsellers/Nike-Air-VaporMax-Flyknit-3.png"),
              price: 160,
          },
          {
              id: 8,
              name: "Nike Air VaporMax Plus",
              imageUrl: require("../../image/bestsellers/Nike-Air-VaporMax-Plus.png"),
              price: 195,
          },
          {
              id: 9,
              name: "Nike Revolution 5",
              imageUrl: require("../../image/bestsellers/Nike-Revolution-5.png"),
              price: 174,
          },
      ]
  },
  luxury: {
      id: 2,
      title: "Luxury",
      routeName: "luxury",
      items: [
          {
              id: 10,
              name: "Balenciaga track",
              imageUrl: require("../../image/luxury/Balenciaga-track.jpg"),
              price: 235,
          },
          {
              id: 11,
              name: "Berluti leather",
              imageUrl: require("../../image/luxury/Berluti-leather.jpg"),
              price: 398,
          },
          {
              id: 12,
              name: "Common Projects",
              imageUrl: require("../../image/luxury/Common-projects.jpg"),
              price: 307,
          },
          {
              id: 13,
              name: "Golden Goose",
              imageUrl: require("../../image/luxury/Golden-Goose.jpg"),
              price: 205,
          },
          {
              id: 14,
              name: "Maison Margiela",
              imageUrl: require("../../image/luxury/Maison-Margiela.jpg"),
              price: 290,
          },
          {
              id: 15,
              name: "Visvim",
              imageUrl: require("../../image/luxury/Visvim.jpg"),
              price: 160,
          },
          {
              id: 16,
              name: "Brunello Cucinelli AIRSOLE SNEAKERS",
              imageUrl: require("../../image/luxury/brunello-cucinelli-AIRSOLE-SNEAKERS.jpg"),
              price: 190,
          },
          {
              id: 17,
              name: "OFF COURT 3.0 HIGH-TOP SNEAKERS",
              imageUrl: require("../../image/luxury/OFF-COURT-3.0-HIGH-TOP-SNEAKERS.jpg"),
              price: 200,
          },
      ]
  },
  budget: {
      id: 3,
      title: "Budget",
      routeName: "budget",
      items: [
          {
              id: 18,
              name: "Adidas Lite Racer Adapt-3.0",
              imageUrl: require("../../image/budget/Adidas-Lite-Racer-Adapt-3.0.jpg"),
              price: 60,
          },
          {
              id: 19,
              name: "Converse Chuck Taylor All Star High Top",
              imageUrl: require("../../image/budget/Converse-Chuck-Taylor-All-Star-High-Top.jpg"),
              price: 64.5,
          },
          {
              id: 20,
              name: "Nike Court Vision Low",
              imageUrl: require("../../image/budget/Nike-Court-Vision-Low.jpg"),
              price: 68,
          },
          {
              id: 21,
              name: "Nike Tanjun",
              imageUrl: require("../../image/budget/nike-tanjun.jpg"),
              price: 65,
          },
          {
              id: 22,
              name: "Vans Slip On",
              imageUrl: require("../../image/budget/Vans-Slip-On.jpg"),
              price: 59,
          },
      ]
  },
  women: {
      id: 4,
      title: "Women",
      routeName: "women",
      items: [
          {
              id: 23,
              name: "Asics Gel Resolution 8",
              imageUrl: require("../../image/women/Asics-Gel-Resolution-8-Women’s-Tennis-Shoes.png"),
              price: 120,
          },
          {
              id: 24,
              name: "Nike Air Zoom Pegasus 38",
              imageUrl: require("../../image/women/Nike-Air-Zoom-Pegasus-38.png"),
              price: 120,
          },
          {
              id: 25,
              name: "Nike Free TR8",
              imageUrl: require("../../image/women/Nike-Free-TR8.png"),
              price: 180,
          },
          {
              id: 26,
              name: "Nike Metcon 7 Training",
              imageUrl: require("../../image/women/Nike-Metcon-7-Training-Shoes.png"),
              price: 180,
          },
          {
              id: 27,
              name: "Nobull Training",
              imageUrl: require("../../image/women/Nobull-Training-Shoes.png"),
              price: 145,
          },
          {
              id: 28,
              name: "Reebok HIIT 2",
              imageUrl: require("../../image/women/Reebok-HIIT-2.png"),
              price: 135,
          },
          {
              id: 29,
              name: "Tiem Slipstream Cycle",
              imageUrl: require("../../image/women/Tiem-Slipstream-Cycle-Sneaker.png"),
              price: 120,
          },
      ]
  },
  men: {
      id: 5,
      title: "Men",
      routeName: "men",
      items: [
          {
              id: 30,
              name: "Altra Solstice XT 2",
              imageUrl: require("../../image/men/Altra-Solstice-XT-2.png"),
              price: 125,
          },
          {
              id: 31,
              name: "Feiyue Fe Lo 1920",
              imageUrl: require("../../image/men/Feiyue-Fe-Lo-1920.png"),
              price: 120,
          },
          {
              id: 32,
              name: "Merrell Men’s Bare Access XTR",
              imageUrl: require("../../image/men/Merrell-Men’s-Bare-Access-XTR.png"),
              price: 225,
          },
          {
              id: 33,
              name: "New Balance Men’s 990v5 Sneakers",
              imageUrl: require("../../image/men/New-Balance-Men’s-990v5-Sneakers.png"),
              price: 125,
          },
          {
              id: 34,
              name: "Nike Metcon 7 Training Shoes",
              imageUrl: require("../../image/men/Nike-Metcon-7-Training-Shoes.png"),
              price: 140,
          },
          {
              id: 35,
              name: "On Men’s Cloud 5",
              imageUrl: require("../../image/men/On-Men’s-Cloud-5.png"),
              price: 125,
          },
      ]
  }
};
export default SHOP_DATA;