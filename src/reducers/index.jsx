import { combineReducers } from "redux";
import reducerModal from "./reducerModal";
import reducerTasks from "./reducerTasks";
import reducerFilter from "./reducerFilter";

const rootReducer = combineReducers({
  reducerModal,
  reducerTasks,
  reducerFilter,
});

export default rootReducer;
