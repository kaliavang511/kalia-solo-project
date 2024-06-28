const tributeReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_TRIBUTE_ITEM":
      return action.payload;
      case "EDIT_TRIBUTE":
  return state.map(item =>
    item.id === action.payload.id 
      ? { 
          ...item, 
          first_name: action.payload.firstName, 
          middle_name: action.payload.middleName,
          last_name: action.payload.lastName,
          obituary: action.payload.obituary,
          image: action.payload.image,
          video: action.payload.video,
          date_of_birth: action.payload.dateOfBirth,
          date_of_death: action.payload.dateOfDeath
        } 
      : item
  );

    case 'ADD_TRIBUTE_SUCCESS':
        return [...state, action.payload]; 
    default:
        return state;
}
  }



export default tributeReducer;
