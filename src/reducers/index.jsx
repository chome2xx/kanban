import { combineReducers } from "redux";
import reducerModal from './reducerModal';
import reducerCard from './reducerCard';

const rootReducer = combineReducers({
    reducerModal,
    reducerCard
})

export default rootReducer