import { CHANGE_OPTION } from "./navOptionsTypes"


const initialState = {
    currentOption: true
}

const navOptionsReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_OPTION:
            return {
                currentOption: action.payload
            }
        default: return state
    }
}

export default navOptionsReducer