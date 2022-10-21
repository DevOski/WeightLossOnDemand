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

function removeData() {
  return {
    type: 'REMOVE_DATA',
  };
}

export {storeData,storeUserData, removeData};
