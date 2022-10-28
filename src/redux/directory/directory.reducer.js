const INITIAL_STATE = {
    sections: [
        {
            id: 1,
            title: "bestSellers",
            imageUrl: require("../../image/bestsellers.jpg"),
            linkUrl: "shop/bestsellers"
        },
        {
            id: 2,
            title: "budget",
            imageUrl: require("../../image/budget.jpg"),
            linkUrl: "shop/luxury"
        },
        {
            id: 3,
            title: "luxury",
            imageUrl: require("../../image/luxury.jpg"),
            linkUrl: "shop/budget"
        },
        {
            id: 4,
            title: "mens",
            imageUrl: require("../../image/men.jpg"),
            size: "large",
            linkUrl: "shop/mens"
        },
        {
            id: 5,
            title: "womens",
            imageUrl: require("../../image/women.jpg"),
            size: "large",
            linkUrl: "shop/womens"
        },
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;