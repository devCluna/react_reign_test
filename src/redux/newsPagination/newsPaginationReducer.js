import { CHANGE_PAGE } from "./newsPaginationTypes"

const initialState = {
    currentPage: 0
}

const newsPaginationReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_PAGE:
            return {
                currentPage: action.payload
            }
        default: return state
    }
}

export default newsPaginationReducer