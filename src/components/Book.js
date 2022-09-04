import PropTypes from "prop-types";

const Book = ({ bookTitle, bookAuthors, ImageUrl }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{ width: 128, height: 193, backgroundImage: `url(${ImageUrl})` }}>
        </div>
        <div className="book-shelf-changer">
          <select>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{bookTitle}</div>
      <div className="book-authors">{bookAuthors}</div>
    </div>
  )
}

Book.propTypes = {
  bookTitle: PropTypes.isRequired,
  bookAuthors: PropTypes.isRequired,
  ImageUrl: PropTypes.isRequired,
};

export default Book;