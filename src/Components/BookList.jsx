import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../Redux/app/action";
import BookCard from "./BookCard";
import styled from "styled-components";
import { useLocation, useSearchParams } from "react-router-dom";

const BookList = () => {
  const books = useSelector((state) => state.AppReducer.books);
  const [searchParams]=useSearchParams()
  const dispatch = useDispatch();
  const location=useLocation();
  console.log(location)

  useEffect(() => {
    if (location||books.length === 0) {
      const sortBy=searchParams.get("sortBy")
      let getBooksParams={
        params:{
          category:searchParams.getAll("category"),
          _sort:sortBy && "release_year",
          _order:sortBy,
        }
      }
      console.log(getBooksParams);
      dispatch(getBooks(getBooksParams));
    }
  }, [location.search]);
  console.log(books);
  return (
    <>
      {books.length > 0 &&
        books.map((singleBook) => {
          return (
            <BookCardWrapper key={singleBook.id}>
              <BookCard  bookData={singleBook} />
            </BookCardWrapper>
          );
        })}
    </>
  );
};

const BookCardWrapper = styled.div`
border:1px solid green;
width:400px
`;
export default BookList;
