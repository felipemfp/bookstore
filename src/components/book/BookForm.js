import React, {PropTypes} from 'react'
import BookList from './BookList'

const Book = (props) => {
  return (
    <div>
      <BookList books={props.books} />
      <div>
        <h3>Books Form</h3>
        <form onSubmit={props.onSubmit}>
          <input type="text" name="title" value={props.book.title} onChange={props.onUpdateTitle}/>
          <input type="submit"/>
        </form>
      </div>
    </div>
  )
}

Book.propTypes = {
  book: PropTypes.shape({title: PropTypes.string.isRequired}).isRequired,
  books: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onUpdateTitle: PropTypes.func.isRequired
}

export default Book
