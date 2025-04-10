import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";

// first u have to install styled-components lib using "npm i styled-components"


function Star({ stars }) {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="icon" />
        ) : stars >= number ? (
          <FaStarHalfStroke className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    );
  });
  return (
    <Wrapper>
      <div className="icon-style">{ratingStar}</div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content:flex-start;

    .icon {
      font-size: 1rem;
      color: orange;
    }

    .empty-icon {
      font-size: 2.3rem;
    }

    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;

export default Star;
