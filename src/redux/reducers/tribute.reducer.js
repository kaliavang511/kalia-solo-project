const tributeReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_TRIBUTE_ITEM":
  //if action type is "SET_TRIBUTE_ITEM" 
      return action.payload;
      //then return whatever data is in stored in there
      default:
        return state
    //otherwise just return state, which would be probably be an empty array     
  }

}

export default tributeReducer;
