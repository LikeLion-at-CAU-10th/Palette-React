import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate, NavLink, Link } from "react-router-dom";
import data from "../data/folderColorData";
import { folderList } from "./Calendar";
import axios from "axios";

const Circles = styled.div`
  cursor: pointer;
  width: 8.33vw;
  height: 8.33vw;
  border-radius: 100%;
  margin-left: -2vw;
  opacity: 0.8;
  background-color: ${(props) => props.bgColorHex};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
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
  line-height: 4vw;
  color: #ffffff;
  white-space: nowrap;
  text-decoration-line: underline;
  text-decoration-thickness: 2px;
  left: ${(props) => props.left};
  width: ${(props) => props.width};
  font-family: "Poppins-Bold";
`;

const Buttons = styled.div`
  width: 1.5vw;
  height: 1.5vw;
  background-color: ${(props) => props.bgColorHex};
  border-radius: 100%;
  cursor: pointer;
`;

const CirclesDom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70%;
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
  margin-top: 1.5vh;
  font-size: 0.8rem;
  background-color: #000000;
  border: 2px solid #ffffff;
  border-radius: 1em 1em 1em 1em;
  color: #ffffff;
  padding: 1% 3% 1% 3%;
  cursor: pointer;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  font-family: "Poppins-Bold";
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  color: white;
  text-align: center;
  font-size: 1.2vw;
  font-weight: bold;
`;
const PalettesDom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120%;
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

const Home = () => {
  // const navigate = useNavigate();
  // const goToPost =  {
  //   navigate(`/post`);
  // };
  // const goToCalendar = {
  //   navigate(`/calendar/red`);
  // };
  const paletteColors = folderList;
  // visibleColor는 메인에 순간 순간 보이는 폴더들
  const [visibleColor, setVisibleColor] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);
  // savedFolder는 저장된, 새로고침해도 변하지 않는 폴더 상태
  const [savedFolder, setSavedFolder] = useState([
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

  const folderSave = () => {
    setShowEdit(false);
    axios
      .post(
        "https://localhost:8000/saveFolder",
        {
          visibleColor,
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        let copy = [...savedFolder];
        copy = visibleColor;
        setSavedFolder(copy);
      });
  };

  return (
    <MainPageDom>
      <GlobalStyle />
      <Tabs>
        <NavLink to="/calendar">
          <MenuTab left="36.40vw" width="13vw">
            calendar
          </MenuTab>
        </NavLink>

        <NavLink to="/post">
          <MenuTab left="48.54vw" width="5vw">
            post
          </MenuTab>
        </NavLink>

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
          <Save visible={showEdit} onClick={folderSave}>
            save
          </Save>
        </EditButtonDom>
      </Tabs>

      <CirclesDom>
        {visibleColor.map((visible, i) => (
          <Link to={`/folder/${data[i].urlPara}`}>
            <Circles
              key={i}
              bgColorHex={selectColor(paletteColors[i])}
              visible={visible}
            />
          </Link>
        ))}
      </CirclesDom>
      <Logo>PALETTE</Logo>
    </MainPageDom>
  );
};

export default Home;
