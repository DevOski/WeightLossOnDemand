const initialState = {
  token: '',
  user: '',
  coupon: '',
  payment: '',
  question1: '',
  question2: '',
  question3: '',
  question4: '',
  question5: '',
  reason: '',
  trainerType: '',
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
    case 'ADD_First_question': {
      return {...state, question1: action.question1};
    }
    case 'ADD_second_question': {
      return {...state, question2: action.question2};
    }
    case 'ADD_Third_question': {
      return {...state, question3: action.question3};
    }
    case 'ADD_fourth_question': {
      return {...state, question4: action.question4};
    }
    case 'ADD_Five_question': {
      return {...state, question5: action.question5};
    }
    case 'ADD_REASON': {
      return {...state, reason: action.reason};
    }
    case 'ADD_TRAINER_TYPE': {
      return {...state, trainerType: action.trainerType};
    }
    case 'REMOVE_DATA': {
      return {
        ...state,
        token: null,
        user: null,
        coupon: null,
        payment: null,
        question1: null,
        question2: null,
        question3: null,
        question4: null,
        question5: null,
        reason: null,
        trainerType: null,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
