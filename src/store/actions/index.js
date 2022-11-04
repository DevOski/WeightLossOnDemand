function storeData(token) {
  return {
    type: 'ADD_DATA',
    token: token,
  };
}
function storeUserData(user) {
  return {
    type: 'ADD_USER_DATA',
    user: user,
  };
}
function storeCoupon(coupon) {
  return {
    type: 'ADD_COUPON',
    coupon: coupon,
  };
}

function storePayment(payment) {
  return {
    type: 'ADD_PAYMENT',
    payment: payment,
  };
}
function removeData() {
  return {
    type: 'REMOVE_DATA',
  };
}
function Question1(question1) {
  return {
    type: 'ADD_First_question',
    question1: question1,
  };
}
function Question2(question2) {
  return {
    type: 'ADD_second_question',
    question2: question2,
  };
}
function Question3(question3) {
  return {
    type: 'ADD_Third_question',
    question3: question3,
  };
}
function Question4(question4) {
  return {
    type: 'ADD_fourth_question',
    question4: question4,
  };
}
function Question5(question5) {
  return {
    type: 'ADD_Five_question',
    question5: question5,
  };
}
function reasonVisit(reason) {
  return {
    type: 'ADD_REASON',
    reason: reason,
  }
}
function trainerStack(trainerType) {
  return {
    type: 'ADD_TRAINER_TYPE',
    trainerType: trainerType,
  };
}

export {
  storeData,
  storeUserData,
  storeCoupon,
  storePayment,
  removeData,
  Question1,
  Question2,
  Question3,
  Question4,
  Question5,
  reasonVisit,
  trainerStack,
};
