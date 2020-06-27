import React from "react";
import styled from "styled-components";

export default function BenefixBox(props) {
  return (
    <StyledBenefixBox>
      <div>
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
      </div>
      <p>{props.detail}</p>
    </StyledBenefixBox>
  );
}

const StyledBenefixBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 43.8rem;
  height: 14rem;
  border-bottom: 0.3rem solid;
  margin-bottom: 13.2rem;

  > div {
    display: flex;
    height: 8rem;
    align-items: baseline;
  }

  img {
    margin-right: 2.9rem;
    width: 5.8rem;
  }

  h3 {
    color: #003556;
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 3.7rem;
  }

  p {
    padding-bottom: 3.8rem;
  }

  @media (max-width: 570px) {
    width: unset;
    margin: 0 0.8rem 13.2rem;
  }
`;
