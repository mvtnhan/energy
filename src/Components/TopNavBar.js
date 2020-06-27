import React from "react";
import styled from "styled-components";

//import { Container } from "./container.js";

class TopNavBar extends React.Component {
  state = {
    menuOnTop: true,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  timeoutID = null;

  onScroll = () => {
    clearTimeout(this.timeoutID);
    this.timeoutID = setTimeout(() => {
      this.setState({
        menuOnTop: window.scrollY === 0,
      });
    }, 50);
  };

  render() {
    return (
      <MenuBar isOnTop={this.state.menuOnTop}>
        <div className="menuTopBar">
          <a href="/">Home</a>
          <a href="/about-us">About Us</a>
          <a href="/distributed-energy">Distributed Energy</a>
          <a href="/csr">CSR</a>
          <a href="/knowledge-hub">Knowledge Hub</a>
        </div>
      </MenuBar>
    );
  }
}

export default TopNavBar;

const MenuBar = styled.div`
  position: fixed;
  z-index: 2;
  width: 100%;
  background-color: ${(props) => (props.isOnTop ? "transparent" : "white")};
  box-shadow: ${(props) =>
    props.isOnTop ? "none" : "rgba(0, 0, 0, 0.15) 0px 1px 4px 0px"};
  transition: background-color 50ms ease-in-out 0s,
    box-shadow 250ms ease-in-out 0s;
  .menuTopBar {
    overflow: hidden;
    display: flex;
    width: 100%;
    margin-left: -8px;
  }
  .menuTopBar a {
    display: block;
    text-align: center;
    padding: 16px 16px;
    text-decoration: none;
    font-size: 24px;
    color: #003556;
    position: relative;
  }
  .menuTopBar a {
    &::before {
      content: "";
      position: absolute;
      right: 100%;
      bottom: 8px;
      left: 8px;
      height: 1px;
      background: #003556;
      opacity: 0.25;
      transition: all 0.35s ease-in-out;
    }
    &:hover {
      text-decoration: none;
      opacity: 1;
      &::before {
        right: 8px;
        opacity: 0.5;
      }
    }
  }
`;
