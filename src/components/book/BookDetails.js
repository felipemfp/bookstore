import React, {PropTypes} from 'react';

const BookDetails = ({book}) => {
    return (
      <div className="media">
        <div className="media-left">
          <a href="#">
            <img className="media-object" src="http://placehold.it/200x300" alt="Placehold" />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{book.title}</h4>
          <ul>
            <li><strong>Author: </strong> {book.author}</li>
            <li><strong>Price: </strong> {book.price}</li>
            <li><strong>Year: </strong> {book.year}</li>
            <br/>
            <button className="btn btn-primary">Buy</button>
          </ul>
        </div>
      </div>
    );
};

export default BookDetails;
