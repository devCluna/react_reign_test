import axios from "axios"
import { FETCH_NEWS_FAIL, FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, PICK_NEWS} from "./newsSelectorTypes"

export const pickNews = (news) => {
    return{
        type:PICK_NEWS,
        payload: news
    }
}

export const fetchNews = (query, currentPage) => {
  return (dispatch) => {
    dispatch(fetchNewsRequest())
    axios
      .get(`https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${currentPage}&hitsPerPage=8`)
      .then(response => {
        // response.data is the users
        dispatch(fetchNewsSuccess(response.data))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchNewsFail(error.message))
      })
  }
}

export const fetchNewsRequest = () => {
  return {
    type: FETCH_NEWS_REQUEST
  }
}

export const fetchNewsSuccess = users => {
  return {
    type: FETCH_NEWS_SUCCESS,
    payload: users
  }
}

export const fetchNewsFail = error => {
  return {
    type: FETCH_NEWS_FAIL,
    payload: error
  }
}