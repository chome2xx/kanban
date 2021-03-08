const reducerModal = (state = [], action) => {
  switch (action.type) {
    case "create":
      return { ...state, show: true, mode: "create" };
    case "edit":
      return { ...state, show: true, mode: "edit", editData: action.data };
    case "hide":
      return { ...state, show: false, mode: "", id: "" };
    default:
      return state;
  }
};

export default reducerModal;
