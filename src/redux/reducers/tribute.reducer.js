const tributeReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_TRIBUTE_ITEM":
      return action.payload;
    default:
      return state;
  }
};




export default tributeReducer;
