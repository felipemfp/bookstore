import React, {PropTypes} from 'react'

const BookList = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <ul>
        {props.books.map((b, i) => <li key={i}>{b.title}</li>)}
      </ul>
    </div>
  )
}

BookList.defaultProps = {
  title: 'Books'
}

BookList.propTypes = {
  title: PropTypes.string,
  books: PropTypes.array.isRequired
}

export default BookList
