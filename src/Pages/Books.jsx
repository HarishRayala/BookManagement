import React from "react";
import BookList from "../Components/BookList";
import FilterComp from "../Components/FilterComp";
import styled from "styled-components";

const Books = () => {
  return (
    <div>
      <h3>Books Page</h3>
      <BookWrapper>
        <FilterComponentWrapper>
          <FilterComp />
        </FilterComponentWrapper>
        <BookListWrapper>
          <BookList />
        </BookListWrapper>
      </BookWrapper>
    </div>
  );
};

const BookWrapper = styled.div`
  display: flex;
`;
const FilterComponentWrapper = styled.div`
  width: 300px;
  border:1px solid blue;
  text-align:left
`;

const BookListWrapper=styled.div`
  width:100%;
  border:1px solid red;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(300px,max-content)); 
  grid-gap:10px;
  justify-content:center
`

export default Books;
