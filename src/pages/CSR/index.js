import React from "react";
import styled from "styled-components";

import Congratulations from "./Congratulations.js";
import FormSubmit from "../../Components/FormSubmit.js";
import Icons from "../../Components/Icons.js";
import TopNavBar from "../../Components/TopNavBar";
import Footer from "../../Components/Footer.js";

export default function Index() {
  return (
    <StyleIndex>
      <TopNavBar />
      <FormSubmit />
      <Congratulations />
      <Footer />
      <Icons />
    </StyleIndex>
  );
}

const StyleIndex = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
`;
