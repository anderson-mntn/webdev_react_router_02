import { createStore } from "redux";
import loginReducer from "./reducers/loginReducers";

const store = createStore(loginReducer)


export default store; 