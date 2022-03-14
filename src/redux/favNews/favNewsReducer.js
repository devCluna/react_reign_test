import { DISLIKE_NEWS, LIKE_NEWS } from "./favNewsTypes"

const initialState = {
    likedNews: JSON.parse(localStorage.getItem('likedNews'))
  }

const favNewsReducer = (state = initialState, action) => {
    switch(action.type){
        case LIKE_NEWS:
            localStorage.setItem('likedNews',JSON.stringify([...state.likedNews, action.payload]))
            return{
                ...state,
                likedNews: [...state.likedNews, action.payload]
            }
        case DISLIKE_NEWS:
            const filteredFavNews = state.likedNews.filter(news => news.objectID !== action.payload.objectID)
            localStorage.setItem('likedNews',JSON.stringify(filteredFavNews))
            return {
                likedNews: filteredFavNews
            }


        default:
            return state
    }
} 

export default favNewsReducer