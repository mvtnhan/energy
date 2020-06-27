import React from "react";
import styled from "styled-components";

export default function FormSubmit() {
  return (
    <StyledFormSubmit>
      <h1>Enter your Roof Space Area</h1>
      <input type="input" placeholder="Enter your Roof in sqm" />
      <div className="Button">
        <button>SUBMIT</button>
        <button>RESET</button>
      </div>
    </StyledFormSubmit>
  );
}

const StyledFormSubmit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16rem auto 0;

  h1 {
    font-size: 4.8rem;
  }

  input {
    background: #fafafa;
    border: 0.05rem solid rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    margin: 3.2rem 0 2.6rem 0;
    color: rgba(0, 0, 0, 0.5);
    padding: 0.8rem 16.4rem;
  }

  button {
    background-color: #ff6334;
    color: #ffffff;
    border: none;
    margin: 0 3.2rem;
    padding: 0.8rem 4rem;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 3.2rem;
    }

    input {
      padding: 0.8rem 6.4rem;
    }
  }

  @media (max-width: 430px) {
    text-align: center;

    input {
      padding: 0.8rem 1.8rem;
    }

    button {
      margin: 0 0.8rem;
      width: 120px;
      padding: 0.8rem;
    }
  }
`;
