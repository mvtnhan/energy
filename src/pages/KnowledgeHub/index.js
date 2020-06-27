import React from "react";
import styled from "styled-components";

import BenefitBox from "./BenefixBox.js";
import Container from "../../Components/Container.js";
import Icons from "../../Components/Icons.js";
import TopNavBar from "../../Components/TopNavBar";

import { ImgPage1 } from "../../Components/DataImg/ImagesPage1.js";
import Footer from "../../Components/Footer.js";

export default function Index() {
  return (
    <StyledIndex>
      <TopNavBar />
      <Container className="Container">
        <h1 className="Title">Benefit to Clients</h1>
        <div className="Content">
          {ImgPage1.map((box, key) => (
            <BenefitBox
              key={key}
              image={box.image}
              title={box.title}
              detail={box.detail}
            />
          ))}
        </div>
      </Container>
      <Footer />
      <Icons />
    </StyledIndex>
  );
}

const StyledIndex = styled.div`
  position: absolute;
  width: 100%;
  justify-content: center;

  .Container {
    display: flex;
  }
  .Title {
    font-size: 7.2rem;
    line-height: 8.4rem;
    height: 22.9rem;
    width: 25.2rem;
    margin-right: 12rem;
    margin-left: 8rem;
  }

  .Content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-right: 8rem;
  }

  .ImgLink {
    position: absolute;
    top: 52.4rem;
    right: 5.1rem;
    height: 2.1rem;
    width: 2.1rem;
  }

  @media (max-width: 1440px) {
    .Container {
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        height: unset;
        width: unset;
        margin: 0;
      }

      .Content {
        justify-content: space-evenly;
        margin: 3.2rem 0;
      }
    }
  }

  @media (max-width: 590px) {
    .Title {
      font-size: 5.2rem;
    }
  }
`;
