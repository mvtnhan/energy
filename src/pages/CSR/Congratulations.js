import styled from "styled-components";
import React from "react";
import ImgWattage from "./images/wattage.png";
import ImgQuantity from "./images/quantity.png";

export default function Congratulations() {
  return (
    <StyledCongratulations>
      <h1>Congratulations!</h1>
      <span>
        You have done the first towards saving your electricity bill and our
        environment <br /> Based on the estimation of your roof space area, the
        installed capacity and generated electricity are below:
      </span>
      <div className="WattageQuantity">
        <div>
          <h2>WATTAGE</h2>
          <img src={ImgWattage} alt="ing wattage" className="ImgWattage" />
          <h1>5.456.123</h1>
        </div>
        <div>
          <h2>QUANTITY</h2>
          <img src={ImgQuantity} alt="img quantity" />
          <h1>9.000.000</h1>
        </div>
      </div>
      <span>
        Disclaimer: The above estimation is based on general practices. The
        actual capacity and generation are subject to location and technical
        design.
      </span>
    </StyledCongratulations>
  );
}

const StyledCongratulations = styled.div`
  margin: auto;
  text-align: center;
  margin: 7.2rem auto;
  width: 90%;

  h1 {
    font-size: 5rem;
    line-height: 5.9rem;
    margin-bottom: 2.4rem;
    letter-spacing: 0.04em;
    color: #ff6e5d;
  }

  span {
    margin: 0 3.4rem;
  }

  .WattageQuantity {
    display: flex;
    justify-content: space-evenly;

    .ImgWattage {
      margin-top: 1.4rem;
    }

    > div > h2 {
      margin-top: 2.4rem;
    }
  }

  @media (max-width: 700px) {
    .WattageQuantity {
      flex-wrap: wrap;
    }

    h1 {
      font-size: 3.2rem;
    }
  }
`;
