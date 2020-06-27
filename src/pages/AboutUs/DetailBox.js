import React from "react";
import styled from "styled-components";

export default function DetailBox(props) {
  return (
    <StyledDetailBox className="DetailBot">
      <img src={props.image} alt=" " />
      <p />
      <h2>{props.title}</h2>
      <p />
      <span>{props.detail}</span>
    </StyledDetailBox>
  );
}

const StyledDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 56.4rem;
  margin-bottom: 6.4rem;
  z-index: 1;

  img {
    width: 56.4rem;
    height: 44.6rem;
    margin-bottom: 3.3rem;
  }

  h2 {
    font-size: 3rem;
    line-height: 3.8rem;
    text-align: center;
    padding: 0;
    border-bottom: 0.2rem solid black;
    padding: 0;
    margin: 1.3rem;
  }

  p {
    border-bottom: 0.1rem solid;
    height: 0.1rem;
    width: 4rem;
  }

  span {
    text-align: center;
    margin-top: 2rem;
    width: 55.8rem;
    height: 7.4rem;
    font-size: 1.7rem;
  }

  @media (max-width: 600px) {
    img,
    span {
      width: 90%;
    }
  }
`;
