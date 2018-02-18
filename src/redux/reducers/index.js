import { combineReducers } from "redux";
import GlobalReducer from "./GlobalReducer";
import HomeReducer from "./HomeReducer";

export default combineReducers({
    GlobalReducer,
    HomeReducer,
});
