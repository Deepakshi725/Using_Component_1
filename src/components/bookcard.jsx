// write the book component code here
//eslint-disable-next-line
import React from "react";
import PropTypes from "prop-types";

const BookCard = ({ image, name, genre, author }) => {
    return (
      <div className="border p-4 rounded-lg shadow-md bg-white">
        <img src={image} alt={name} className="w-full h-40 object-cover rounded" />
        <h2 className="text-lg font-semibold mt-2">{name}</h2>
        <p className="text-gray-700">Genre: {genre}</p>
        <p className="text-gray-600">Author: {author}</p>
      </div>
    );
  };

  BookCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }
  
export default BookCard;

