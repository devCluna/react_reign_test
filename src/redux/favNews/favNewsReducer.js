import { DISLIKE_NEWS, LIKE_NEWS } from "./favNewsTypes"

const initialState = {
    likedNews:[]
  }

const favNewsReducer = (state = initialState, action) => {
    switch(action.type){
        case LIKE_NEWS:
            return{
                ...state,
                likedNews: [...state.likedNews, action.payload]
            }
        case DISLIKE_NEWS:
            const filteredFavNews = state.likedNews.filter(news => news.objectID !== action.payload.objectID)
            return {
                likedNews: filteredFavNews
            }


        default:
            return state
    }
} 

export default favNewsReducer