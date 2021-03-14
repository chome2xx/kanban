const reducerFilter = (state = [], action) => {
  switch (action.type) {
    case "filter":
      return action.value;
    default:
      return state;
  }
};

export default reducerFilter;
