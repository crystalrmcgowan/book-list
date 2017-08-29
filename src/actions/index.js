import * as ActionTypes from "../actionTypes/actions"

export const selectBook = book => {
  return {
    type: ActionTypes.SELECT_BOOK,
    payload:
      alert("Select Book: " + book + " Check console") +
      console.log("Dispatching: ActionTypes.SELECT_BOOK. Check state below")
  }
}
