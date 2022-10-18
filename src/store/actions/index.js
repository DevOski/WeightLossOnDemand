function storeData(user) {
  return {
    type: 'ADD_DATA',
    user: user,
  };
}

function removeData() {
  return {
    type: 'REMOVE_DATA',
  };
}

export {storeData, removeData};
