// export default state => {
// 	    return state	
// }

export default (state, action) => {
    switch (action.type) {
        case "SET_TECHNOLOGY":
            console.log("reduce", action.tech);
            return {
                ...state,
                tech: action.tech
            };

        default:
            return state;
    }
};