const reducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_POST":
            const { title, message } = action.payload;
            return { title, message }
        default:
            return state
    }
}
export default reducer;