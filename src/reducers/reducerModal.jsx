const reducerModal = (state = [], action) => {
  switch (action.type) {
    case "create":
      return { ...state, show: true, mode: "create", editData: "" };
    case "edit":
      return { ...state, show: true, mode: "edit", editData: action.data };
    case "hide":
      return { ...state, show: false, mode: "", editData: "" };
    default:
      return state;
  }
};

export default reducerModal;
