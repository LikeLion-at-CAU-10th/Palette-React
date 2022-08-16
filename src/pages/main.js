import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";

const Circles = styled.div`
  cursor: pointer;
  width: 8.33vw;
  height: 8.33vw;
  border-radius: 100%;
margin-left:-2vw;
opacity:0.8;
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
  width: 1.5vw;
  height: 1.5vw;
  background-color: ${(props) => props.bgColorHex};
  border-radius: 100%;
  cursor: pointer;
  margin-left: 0.5vw;
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
  align-items: center;
`;
const Save = styled.div`
  margin-top: 1vh;
  width: 4vw;
  height: 1.8vw;
  background-color: #000000;
  border: 2px solid #ffffff;
  border-radius: 2em 2em 2em 2em;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

const PalettesDom = styled.div`
  display: flex;
  width: 100%;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

const selectColor = (color) => {
  switch (color) {
    case "red":
      return "#FF3A3A";
    case "orange":
      return "#FF8D23";
    case "yellow":
      return "#F6E225";
    case "green":
      return "#55D65A";
    case "blue":
      return "#0038FF";
    case "purple":
      return "#CD62FF";
    case "gray":
      return "#656565";
    default:
      return "black";
  }
};

const Main = () => {
  // const navigate = useNavigate();
  // const goToPost =  {
  //   navigate(`/post`);
  // };
  // const goToCalendar = {
  //   navigate(`/calendar/red`);
  // };

  const paletteColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "gray",
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

  return (
    <MainPageDom>
      <GlobalStyle />
      <Tabs>
        <MenuTab /*onClick={goToCalendar}*/ left="36.40vw" width="13vw">
          calendar
        </MenuTab>
        <MenuTab /*onClick={goToPost}*/ left="48.54vw" width="5vw">
          post
        </MenuTab>
        <EditButtonDom>
          <MenuTab onClick={changeEditBtn} left="57.76vw">
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
          <Save visible={showEdit}>save</Save>
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
