import React from "react";
import styled from "styled-components";

export default function BoxGroup(props) {
  return (
    <StyledBoxGroup>
      <div className={props.className}>
        <img src={props.image} alt={props.detail} />
      </div>
      <span>{props.detail}</span>
    </StyledBoxGroup>
  );
}

const StyledBoxGroup = styled.div`
  display: flex;
  width: 62rem;
  height: 17.2rem;
  text-align: center;
  align-items: center;
  background-color: #ffffff;
  margin-bottom: 2.4rem;
  margin-top: 2.4rem;

  > div {
    background-color: #1b8abd;
    height: 100%;
    width: 40%;
    position: relative;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
    }
  }

  span {
    padding: 2rem;
    width: 60%;
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 2.9rem;
    text-align: center;
  }

  @media (max-width: 1500px) {
    width: 48%;
  }

  @media (max-width: 1160px) {
    width: 90%;

    img {
      width: 35% !important;
    }

    span {
      font-size: 2rem;
    }
  }
`;
