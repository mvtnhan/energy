import React from "react";
import styled from "styled-components";

import BoxGroup from "./BoxGroup.js";
import { ImgPage5 } from "../../Components/DataImg/ImagesPage5.js";
import TopNavBar from "../../Components/TopNavBar";
import Footer from "../../Components/Footer.js";

export default function Index() {
  return (
    <StyledIndex>
      <TopNavBar />
      <div className="Content">
        <div className="Group0">
          <h1>Why Distributed energy</h1>
        </div>
        {ImgPage5.map((box) => (
          <BoxGroup
            className="RedBg"
            image={box.image}
            title={box.title}
            detail={box.detail}
          />
        ))}
      </div>
      <Footer />
    </StyledIndex>
  );
}

const StyledIndex = styled.div`
  background-color: #e5e5e5;

  .Content {
    padding-top: 8rem;
    margin: auto;
    max-width: 145rem;
    justify-content: space-between;
    flex-wrap: wrap;
    display: flex;
    text-align: center;
    .Group0 {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 62rem;
      height: 17.2rem;
      background-color: #ffffff;
      margin-top: 2.4rem;

      h1 {
        font-weight: 500;
        font-size: 4.8rem;
        line-height: 7rem;
      }
    }
  }

  > div > div > .RedBg:nth-child(3) {
    background-color: #c1282c;
  }

  @media (max-width: 1500px) {
    .Group0 {
      width: 48%;
    }
  }

  @media (max-width: 1160px) {
    flex-direction: column;
    align-items: center;
    padding: 0;

    .Group0 {
      width: 90%;

      h1 {
        font-size: 3.2rem;
      }
    }
  }
`;
