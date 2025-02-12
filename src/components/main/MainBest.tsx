import { Book } from "@/models/book.model";
import React from "react";
import styled from "styled-components";
import BookBestItem from "../books/BookBestItem";

interface Props {
  books: Book[];
}

function MainBest({ books }: Props) {
  return (
    <MainBestStyle>
      {books.map((book, index) => (
        <BookBestItem book={book} itemIndex={index} />
      ))}
    </MainBestStyle>
  );
}

const MainBestStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
`;

export default MainBest;
