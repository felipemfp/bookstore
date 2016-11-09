import React, {PropTypes} from 'react'
import {Link} from 'react-router';

const BookTable = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.books.map((b, i) => <tr key={i}>
          <td>{b.title}</td>
          <td>
            <Link to={`/books/${b.id}`}>View</Link>
          </td>
        </tr>)}
      </tbody>
    </table>
  )
}

BookTable.defaultProps = {
  title: 'Books'
}

BookTable.propTypes = {
  title: PropTypes.string,
  books: PropTypes.array.isRequired
}

export default BookTable
