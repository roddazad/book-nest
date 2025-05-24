import React from 'react';
import '../css/BookCard.css';

const BookCard = ({title, thumbnail, authors, previewLink}) => {
    return ( 
        <div className="book-card">
      <img
        className="book-thumbnail"
        src={thumbnail !== "N/A" ? thumbnail : "https://via.placeholder.com/128x190?text=No+Image"}
        alt={`${title} cover`}
      />
      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        <p className="book-authors">
          {authors ? authors.join(', ') : 'Unknown Author'}
        </p>
        <a
          href={previewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="preview-button"
        >
          Preview
        </a>
      </div>
    </div>
     );
}
 
export default BookCard;