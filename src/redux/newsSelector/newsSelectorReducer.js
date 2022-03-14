import { FETCH_NEWS_FAIL, FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, PICK_NEWS } from "./newsSelectorTypes"

const initialState = {
    news: 'angular',
    newsData: {},
}

const newsSelectorReducer = (state = initialState, action) => {
    switch(action.type){
        case PICK_NEWS:
            return {
                news: action.payload,
                newsData: {}
            }
        case FETCH_NEWS_REQUEST:
            return {
                ...state
            }
        case FETCH_NEWS_SUCCESS:
            return {
                ...state,
                newsData: action.payload
            }
        case FETCH_NEWS_FAIL:
        return {
            loading: false,
            error: action.payload
        }
        default: return state
    }
}

export default newsSelectorReducer