import React from "react";
import styled from "styled-components";
import DetailBox from "./DetailBox.js";
import TopNavBar from "../../Components/TopNavBar";

import { ImgPage4 } from "../../Components/DataImg/ImagesPage4.js";
import Footer from "../../Components/Footer.js";

export default function Index() {
  return (
    <StyledIndex>
      <TopNavBar />
      <div className="Content">
        <div className="Vector" />
        <div className="Vector Vector2" />
        <div className="Vector Vector3" />

        <h1>Why choose us</h1>
        <div>
          {ImgPage4.map((box) => (
            <DetailBox
              image={box.image}
              title={box.title}
              detail={box.detail}
            />
          ))}
        </div>
      </div>
      <Footer />
    </StyledIndex>
  );
}

const StyledIndex = styled.div`
  display: flex;
  flex-direction: column;
  background: #e5e5e5;

  .Content {
    margin: auto;
    max-width: 145rem;
    > div {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0 11.8rem;
    }
  }

  h1 {
    width: 56.4rem;
    font-size: 4rem;
    line-height: 4.7rem;
    border: 0.1rem solid #000000;
    box-sizing: border-box;
    padding: 2.2rem 13.4rem;
    margin: 8rem 12rem 3.2rem auto;
    text-align: center;
  }

  .Vector {
    position: absolute;
    border: 0.01rem dashed #000000;
    width: 90%;
    height: 0;
    top: 26rem;
    right: 0;
  }

  .Vector2 {
    top: 97.4rem;
  }

  .Vector3 {
    top: 168.8rem;
  }

  @media (max-width: 1390px) {
    > div {
      padding: 0 3.2rem;
    }
  }

  @media (max-width: 1240px) {
    > div {
      justify-content: center;
    }
  }

  @media (max-width: 880px) {
    h1 {
      width: 56.4rem;
      font-size: 4rem;
      line-height: 3.2rem;
      padding: 2.2rem 13.2rem;
    }

    .Vector {
      display: none;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 3.2rem;
      padding: 2.2rem 0;
      width: 80%;
    }
  }
`;
