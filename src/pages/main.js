import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const Circles = styled.div`
  cursor: pointer;
  position: absolute;
  width: 8.33vw;
  height: 8.33vw;
  top: 47.5vh;
  border-radius: 100%;
  background: ${(props) => props.backGround};
  left: ${(props) => props.left};
`;

const GlobalStyle = createGlobalStyle`
  html {
    background: black;
  }
`;

const MenuTab = styled.div`
  cursor: pointer;
  font-weight: 700;
  font-size: 1.25vw;
  line-height: 1.88vw;
  color: #ffffff;
  white-space: nowrap;
  position: absolute;
  height: 1.88vw;
  top: 5.35vh;
  text-decoration-line: underline;
  text-decoration-thickness: 2px;
  left: ${(props) => props.left};
  width: ${(props) => props.width};
`;

const Buttons = styled.div`
  position: absolute;
  width: 1.88vw;
  height: 1.88vw;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  background: ${(props) => props.backGround};
  border-radius: 100%;
  transition: 0.1s;
  //visibility: hidden;
  cursor: pointer;
`;

const Main = () => {
  return (
    <>
      <GlobalStyle />
      <MenuTab left="36.40vw" width="5.83vw">
        calendar
      </MenuTab>
      <MenuTab left="48.54vw" width="2.92vw">
        post
      </MenuTab>
      <MenuTab left="57.76vw" width="6.04vw">
        edit
      </MenuTab>
      <Buttons
        left="57.42vw"
        top="13.52vh"
        backGround="rgba(205, 98, 255, 0.9)"
      ></Buttons>
      <Buttons
        left="58.60vw"
        top="9.744vh"
        backGround=" rgba(255, 58, 58, 0.9)"
      ></Buttons>
      <Buttons
        left="61.10vw"
        top="9.744vh"
        backGround="rgba(255, 141, 35, 0.9)"
      ></Buttons>
      <Buttons
        left="62.28vw"
        top="13.68vh"
        backGround="rgba(247, 226, 37, 0.9)"
      ></Buttons>
      <Buttons
        left="61.10vw"
        top="17.3vh"
        backGround="rgba(85, 214, 90, 0.9)"
      ></Buttons>
      <Buttons
        left="58.60vw"
        top="17.3vh"
        backGround="rgba(0, 56, 255, 0.9)"
      ></Buttons>
      <Buttons
        left="59.85vw"
        top="13.52vh"
        backGround="rgba(101, 101, 101, 0.9)"
      ></Buttons>
      <Circles backGround="rgba(205, 98, 255, 0.9)" left="64.86vw "></Circles> 
      <Circles backGround="rgba(255, 58, 58, 0.9)" left="58.54vw "></Circles> 
      <Circles backGround="rgba(255, 141, 35, 0.9)" left="52.22vw "></Circles>
      <Circles backGround="rgba(247, 226, 37, 0.9)" left="45.9vw "></Circles> 
      <Circles backGround="rgba(85, 214, 90, 0.9)" left="39.44vw "></Circles> 
      <Circles backGround="rgba(0, 56, 255, 0.9)" left="33.13vw "></Circles> 
      <Circles backGround="rgba(101, 101, 101, 0.9)" left="26.81vw "></Circles>
    </>
  );
};

export default Main;
