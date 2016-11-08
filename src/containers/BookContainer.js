import { connect } from 'react-redux'
import * as bookActions from '../actions/bookActions'
import Book from '../components/book'

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

export default connect(mapStateToProps, mapDispatchToProps)(Book)
