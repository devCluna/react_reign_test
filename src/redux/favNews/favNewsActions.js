import { DISLIKE_NEWS, LIKE_NEWS } from "./favNewsTypes"

export const likeNews = (news) => {
  return{
    type: LIKE_NEWS,
    payload: news
  }
}

export const dislikeNews = (news) => {
  return{
    type: DISLIKE_NEWS,
    payload: news
  }
}