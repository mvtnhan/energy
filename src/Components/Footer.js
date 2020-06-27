import React from "react";
import styled from "styled-components";
import ImgLogo from "../Components/DataImg/logo.png";
import ImgMember1 from "../Components/DataImg/member1.png";
import ImgMember2 from "../Components/DataImg/member2.png";

export default function Footer() {
  return (
    <StyledFooter>
      <img src={ImgLogo} alt="logo" />
      <h3>
        Riverpark Premier - Nguyen Duc Canh Street, Tan Phong Wark, District 7,
        HCMC, Vietnam
      </h3>
      <ul>
        <li>
          <span>Email: </span>
          <a href="info@cmenergy.vn">info@cmenergy.vn</a>
        </li>
        <li>
          <span>Phone: </span>
          <a href="(+84 28) 7300 2998">(+84 28) 7300 2998</a>
        </li>
      </ul>
      <span>MEMBER OF</span>
      <div>
        <img src={ImgMember1} alt="member1" />
        <img src={ImgMember2} alt="member2" />
      </div>
      <p>©Copyright - Copper Moumtain Energy</p>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: white;
  align-items: center;
  text-align: center;

  h3,
  ul,
  span {
    margin-bottom: 1.8rem !important;
  }

  span {
    font-weight: 400;
  }

  p {
    margin-top: 3.2rem;
    background-color: #003556;
    width: 100%;
    color: white;
    padding: 1.6rem 0;
    font-weight: 500;
  }
`;
