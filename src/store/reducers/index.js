const initialState = {
  token: '',
  user: '',
  coupon: '',
  payment: '',
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
    case 'ADD_PAYMENT': {
      return {...state, payment: action.payment};
    }
    case 'REMOVE_DATA': {
      return {...state, token: null, user: null, coupon: null, payment: null};
    }

    default: {
      return state;
    }
  }
};

export default reducer;
