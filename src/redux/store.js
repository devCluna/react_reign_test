import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import newsSelectorReducer from "./newsSelector/newsSelectorReducer";

const  rootReducer = combineReducers({
    newsSelector: newsSelectorReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store