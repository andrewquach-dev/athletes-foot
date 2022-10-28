const INITIAL_STATE = {
    sections: [
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
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;