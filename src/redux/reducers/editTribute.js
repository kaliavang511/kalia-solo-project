const editTribute = (state = {}, action) => {
    switch (action.type) {
      case 'SET_EDIT_TRIBUTE':
        return action.payload;
      case 'EDIT_ONCHANGE':
        return {
          ...state,
          [action.payload.property]: action.payload.value,
        };
      case 'EDIT_CLEAR':
        return { First_Name: '' };
      default:
        return state;
    }
  };
  export default editTribute
  