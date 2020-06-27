import FormSubmit from "../../Components/FormSubmit.js";
import styled from "styled-components";
import React from "react";
import Icons from "../../Components/Icons.js";
import TopNavBar from "../../Components/TopNavBar";

export default function Index() {
  return (
    <StyledIndex>
      <TopNavBar />
      <FormSubmit />
      <Icons />
    </StyledIndex>
  );
}

const StyledIndex = styled.div`
  margin: auto;
`;
