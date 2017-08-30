import * as ActionTypes from "../actionTypes/actions"

export const selectBook = book => {
  // console.log(book)
  return {
    type: ActionTypes.SELECT_BOOK,
    payload: book
  }
}
