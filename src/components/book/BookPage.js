import React from 'react';
import {connect} from 'react-redux'
import * as bookActions from '../../actions/bookActions'

import BookForm from './BookForm'
import BookTable from './BookTable'

const BookPage = (props) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <h3>Books</h3>
        <BookTable books={props.books}/>
      </div>
      <div className="col-md-6">
        <h3>New Book</h3>
        <BookForm submitBook={props.createBook}/>
      </div>
    </div>
  )
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    books: state.books
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    // You can now say this.props.createBook
    createBook: book => dispatch(bookActions.createBook(book))
  }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(BookPage)
