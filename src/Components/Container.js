import React from "react";
import styled from "styled-components";

export default function Container(props) {
  return (
    <StyledContainer className="Container">{props.children}</StyledContainer>
  );
}

const StyledContainer = styled.div`
  max-width: 145rem;
  margin: 8rem auto 0;
`;
