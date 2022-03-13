import { PICK_NEWS } from "./newsSelectorTypes"

export const pickNews = (news) => {
    return{
        type:PICK_NEWS,
        payload: news
    }
}