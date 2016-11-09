import * as actionTypes from '../actions/actionTypes'

export const booksReducer = (state = [], action) => {
  switch (action.type) {
    // Check if action dispatched is
    // CREATE_BOOK and act on that
    case actionTypes.CREATE_BOOK_SUCCESS:
      return [...state, Object.assign({}, action.payload.book)]
    case actionTypes.CREATE_BOOK_ERROR:
      console.error('An error occurred when trying to create book.', action.payload);
      return state
    case actionTypes.FETCH_BOOKS_SUCCESS:
      return [...action.payload.books]
    case actionTypes.FETCH_BOOKS_ERROR:
      console.error('An error occurred when trying to fetch books from API.', action.payload)
      return state
    default:
      return state
  }
};

export const bookReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BOOK_BY_ID_SUCCESS:
      return Object.assign({}, action.payload.book)
    case actionTypes.FETCH_BOOK_BY_ID_ERROR:
      console.error('An error occurred when trying to fetch book from API.', action.payload)
      return state
    default:
      return state
  }
}
