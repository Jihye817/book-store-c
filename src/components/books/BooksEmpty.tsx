import React from "react";
import { FaSmileWink } from "react-icons/fa";
import styled from "styled-components";
import Title from "../common/Title";
import { Link } from "react-router-dom";
import Empty from "../common/Empty";

function BooksEmpty() {
  return (
    <BooksEmptyStyle>
      <Empty
        icon={<FaSmileWink />}
        title="검색 결과가 없습니다."
        description={<Link to="/books"> 전체 검색 결과로 이동</Link>}
      />
    </BooksEmptyStyle>
  );
}

const BooksEmptyStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 120px 0;

  .icon {
    svg {
      font-size: 4rem;
      fill: #ccc;
    }
  }
`;

export default BooksEmpty;
