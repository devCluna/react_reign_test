import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import newsSelectorReducer from "./newsSelector/newsSelectorReducer";
import newsPaginationReducer from "./newsPagination/newsPaginationReducer";
import navOptionsReducer from "./navOptions/navOptionsReducer";
import favNewsReducer from "./favNews/favNewsReducer";

const  rootReducer = combineReducers({
    newsSelector: newsSelectorReducer,
    newsPagination: newsPaginationReducer,
    navOptions: navOptionsReducer,
    favNews: favNewsReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store