import Axios from 'axios'
import * as actionTypes from './actionTypes'

const apiUrl = 'http://5822fd3da2c5d71200cd1f40.mockapi.io/api/book';
// Sync Action
export const fetchBooksSuccess = (books) => {
  return {
    type: actionTypes.FETCH_BOOKS_SUCCESS,
    payload: {
      books
    }
  }
}

export const fetchBooksError = (error) => {
  return {
    type: actionTypes.FETCH_BOOKS_ERROR,
    payload: error,
    error: true
  }
}

//Async Action
export const fetchBooks = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    return Axios.get(apiUrl)
      .then(response => {
        // Dispatch another action
        // to consume data
        dispatch(fetchBooksSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchBooksError(error))
      });
  };
}


export const createBookSuccess = (book) => {
  return {
    type: actionTypes.CREATE_BOOK_SUCCESS,
    payload: {
      book
    }
  }
};

export const createBookError = (error) => {
  return {
    type: actionTypes.CREATE_BOOK_ERROR,
    payload: error,
    error: true
  }
};

export const createBook = (book) => {
  return (dispatch) => {
    return Axios.post(apiUrl, book)
      .then(response => {
        // Dispatch a synchronous action
        // to handle data
        dispatch(createBookSuccess(response.data))
      })
      .catch(error => {
        dispatch(createBookError(error))
      });
  };
};

export const fetchBookByIdSuccess = (book) => {
  return {
    type: actionTypes.FETCH_BOOK_BY_ID_SUCCESS,
    payload: {
      book
    }
  }
};

export const fetchBookByIdError = (error) => {
  return {
    type: actionTypes.FETCH_BOOK_BY_ID_ERROR,
    payload: error,
    error: true
  }
};
// Async Action
export const fetchBookById = (bookId) => {
  return (dispatch) => {
    return Axios.get(`${apiUrl}/${bookId}`)
      .then(response => {
        // Handle data with sync action
        dispatch(fetchBookByIdSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchBookByIdError(error));
      });
  };
};
