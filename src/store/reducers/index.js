const initialState = {
  token: '',
  user: '',
  coupon: '',
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DATA': {
      return {...state, token: action.token};
    }
    case 'ADD_USER_DATA': {
      return {...state, user: action.user};
    }
    case 'ADD_COUPON': {
      return {...state, coupon: action.coupon};
    }
    case 'REMOVE_DATA': {
      return {...state, token: null, user: null, coupon: null};
    }

    default: {
      return state;
    }
  }
};

export default reducer;
