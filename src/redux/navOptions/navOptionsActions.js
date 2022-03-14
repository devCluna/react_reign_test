import { CHANGE_OPTION } from "./navOptionsTypes"


export const changeOptions = (option) =>{
  return{
    type: CHANGE_OPTION,
    payload: option
  }
}