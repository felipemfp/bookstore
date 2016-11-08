import React from 'react'
import BookForm from './BookForm.js'

class Book extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      book: {
        title: ''
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUpdateTitle = this.handleUpdateTitle.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    let book = this.state.book
    this.props.createBook(book)
    book.title = ''
    this.setState({
      book
    })
  }

  handleUpdateTitle(e) {
    e.preventDefault()
    let book = this.state.book
    book.title = e.target.value
    this.setState({
      book
    })
  }

  render() {
    return <BookForm
      book={this.state.book}
      onUpdateTitle={this.handleUpdateTitle}
      books={this.props.books}
      onSubmit={this.handleSubmit} />
  }
}
// Use connect to put them together
export default Book
