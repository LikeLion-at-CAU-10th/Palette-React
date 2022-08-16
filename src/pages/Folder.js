import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import data from "../data/folderData";
import PageList from "../component/PageList";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
html {
    background-color:black;
}`;

const Wrapper = styled.div`
  display: flex;
`;

const Folders = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const FolderIndexBar = styled.div`
  position: absolute;
  top: 8.1vh;
  right: 18vw;
  height: 6vh;
  width: 22.2vh;
  background: ${(props) => props.bgColor};
  border-radius: 1em 1em 0 0;
  font-size: 3.5vh;
  font-weight: 900;
  transform: rotate(-90deg);
  text-align: center;
  font-family: "Poppins-Black";
`;

const FolderIndex = styled.div`
  position: relative;
  height: 76vh;
  background: ${(props) => props.bgColor};
  width: 20vw;
  padding: 1vw;
  z-index: -1;
`;

const Pages = styled.div`
  width: 20vw;
  height: 76vh;
  background: ${(props) => props.bgColor};
  color: black;
  font-size: 20px;
  margin-left: -20vw;
  padding: 1vw;
  box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &:hover {
    z-index: 9999;
  }
  font-family: NotoSansKR;
`;

const FolderPage = () => {
  const { color } = useParams();
  // const folderList = ["red", "orange", "yellow", "green", "blue"];
  const navigate = useNavigate();
  const goToAnotherColor = (color) => {
    navigate(`/folder/${color}`);
  };

  const folderIndexColor = (color) => {
    switch (color) {
      case "red":
        return "#ff8b8b";
      case "orange":
        return "#ffad60";
      case "yellow":
        return "rgba(250, 232, 76)";
      case "green":
        return "#83e686";
      case "blue":
        return "hsl(227, 100%, 64%)";
      default:
        return "#FFFFF";
    }
  };

  const realBgColor = folderIndexColor(color);

  return (
    <div>
      <GlobalStyle />

      <Folders>
        <Wrapper>
          <FolderIndex bgColor={realBgColor}>
            {data.postListData.map((data) => (
              <FolderIndexBar bgColor={realBgColor}>
                {data.category}
              </FolderIndexBar>
            ))}
          </FolderIndex>
          {data.postListData.map((data) => (
            <Pages key={data.i} bgColor={data.color}>
              <text>
                <p>
                  <h4>{data.date}</h4>
                </p>
                <p>
                  <h5>{data.title}</h5>
                </p>
                <p>
                  <h4>{data.content}</h4>
                </p>
              </text>
            </Pages>
          ))}
        </Wrapper>
      </Folders>
    </div>
  );
};

export default FolderPage;
