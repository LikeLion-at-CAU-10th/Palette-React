import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";

const Circles = styled.div`
  cursor: pointer;
  width: 8.33vw;
  height: 8.33vw;
  border-radius: 100%;
  background-color: ${(props) => props.bgColorHex};
  visibility : ${(props) => (props.visible ? "visible" : "hidden")};
`;

const GlobalStyle = createGlobalStyle`
  html {
    background: black;
  }
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  height: 20%;
  width: 100%;
`;

const MenuTab = styled.div`
  cursor: pointer;
  font-weight: 700;
  font-size: 1.3vw;
  line-height: 5vw;
  color: #ffffff;
  white-space: nowrap;
  text-decoration-line: underline;
  text-decoration-thickness: 2px;
  left: ${(props) => props.left};
  width: ${(props) => props.width};
`;

const Buttons = styled.div`
  width: 1.88vw;
  height: 1.88vw;
  background-color: ${(props) => props.bgColorHex};
  border-radius: 100%;
  cursor: pointer;
`;

const CirclesDom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
`;

const MainPageDom = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const EditButtonDom = styled.div`
  display: flex;
  flex-direction: column;
`;
// const Save = styled.div`
//   width: 4.3vw;
//   height: 1.8vw;
//   background-color: #000000;
//   border: 2px solid #ffffff;
//   border-radius: 2em 2em 2em 2em;
//   color: #ffffff;
//   text-align: center;
//   cursor: pointer;
// `;

const PalettesDom = styled.div`
  display: flex;
  width: 100%;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

const selectColor = (color) => {
  switch (color) {
    case "red":
      return "#ff8b8be6";
    case "orange":
      return "#ffad60";
    case "yellow":
      return "rgba(250, 232, 76, 0.9)";
    case "green":
      return "#83e686e6";
    case "blue":
      return "hsl(227, 100%, 64%)";
    case "purple":
      return "purple";
    case "black":
      return "black";
    default:
      return "black";
  }
};

const Main = () => {
  const paletteColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "black",
  ];
  const [visibleColor, setVisibleColor] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);
  const [showEdit, setShowEdit] = useState(false);

  const changeEditBtn = () => {
    setShowEdit(!showEdit);
  };

  const changeVisible = (i) => {
    const copy = [...visibleColor];
    copy[i] = !copy[i];
    setVisibleColor(copy);
  };

  // const closeColor = () => {
  //   setColor(false);
  // };

  return (
    <MainPageDom>
      <GlobalStyle />
      <Tabs>
        <MenuTab left="36.40vw" width="13vw">
          calendar
        </MenuTab>
        <MenuTab left="48.54vw" width="10vw">
          post
        </MenuTab>
        <EditButtonDom>
          <MenuTab onClick={changeEditBtn} left="57.76vw" width="8vw">
            edit
          </MenuTab>
          <PalettesDom visible={showEdit}>
            {visibleColor.map((visible, i) => (
              <Buttons
                key={i}
                onClick={() => {
                  changeVisible(i);
                }}
                bgColorHex={selectColor(paletteColors[i])}
              />
            ))}
          </PalettesDom>
        </EditButtonDom>
      </Tabs>

      <CirclesDom>
        {visibleColor.map((visible, i) => (
          <Circles
            key={i}
            bgColorHex={selectColor(paletteColors[i])}
            visible={visible}
          />
        ))}
      </CirclesDom>
    </MainPageDom>
  );
};

export default Main;
