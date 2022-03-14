import { CHANGE_PAGE } from "./newsPaginationTypes"

export const changePage = (page) =>{
  return{
    type: CHANGE_PAGE,
    payload: page
  }
}