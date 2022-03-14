import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import newsSelectorReducer from "./newsSelector/newsSelectorReducer";
import newsPaginationReducer from "./newsPagination/newsPaginationReducer";

const  rootReducer = combineReducers({
    newsSelector: newsSelectorReducer,
    newsPagination: newsPaginationReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store