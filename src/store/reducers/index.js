const initialState = {
  token: '',
  user: '',
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DATA': {
      return {...state, token: action.token};
    }
    case 'ADD_USER_DATA': {
      return {...state, user: action.user};
    }
    case 'REMOVE_DATA': {
      return {...state, token: null, user: null};
    }

    default: {
      return state;
    }
  }
};

export default reducer;
