import { combineReducers } from "redux";
import reducerModal from "./reducerModal";
import reducerTasks from "./reducerTasks";

const rootReducer = combineReducers({
  reducerModal,
  reducerTasks,
});

export default rootReducer;
