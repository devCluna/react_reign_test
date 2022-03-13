import { PICK_NEWS } from "./newsSelectorTypes"

const initialState = {
    news: 'angular',
    newsApiRoute: `https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0`
}

const newsSelectorReducer = (state = initialState, action) => {
    switch(action.type){
        case PICK_NEWS:
            return {
                news: action.payload,
                newsApiRoute: `https://hn.algolia.com/api/v1/search_by_date?query=${action.payload}&page=0`
            }
        default: return state
    }
}

export default newsSelectorReducer