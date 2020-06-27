import React from "react";
import styled from "styled-components";
import { ImgIcons } from "../Components/DataImg/ImagesIcon.js";

export default function Icons() {
  return (
    <StyledIcons>
      {ImgIcons.map((icon) => (
        <img src={icon.image} alt=" " />
      ))}
    </StyledIcons>
  );
}

const StyledIcons = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 16rem;
  right: 2.4rem;

  img {
    margin-bottom: 2.1rem;
  }

  @media (max-width: 570px) {
    top: 14rem;
    left: 30%;
    flex-direction: row;
    bottom: unset;

    img {
      margin: 0 2rem 0 0;
    }
  }
`;
