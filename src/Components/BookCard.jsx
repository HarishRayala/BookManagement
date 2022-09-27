import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ bookData }) => {
  return (
    <div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJvb2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="BookPage"
          height="250px"
          width="100%"
        />
        <div>{bookData.book_name}</div>
        <div>{bookData.category}</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>{bookData.release_year}</div>
          <div>
          <Link to={`/books/${bookData.id}/edit`}>
            <button>Edit</button>
          </Link>
          <Link to={`/books/${bookData.id}`}>
            <button>Single Page</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
