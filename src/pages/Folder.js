import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import data from "../data/folderData";
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
  width: 3vw;
  height: 18vh;
  background: ${(props) => props.bgColor};
  border-radius: 1em 0 0 1em;
  font-size: 2vh;
  font-weight: 900;
  text-align: center;
  font-family: "Poppins-Black";
  padding: 4px;
`;

const FolderIndex = styled.div`
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
  font-family: "NotoSansKR";
`;

const PagesDom = styled.div`
  display: flex;
`;

const FolderIndexDom = styled.div`
  display: flex;
  justify-content: center;
`;
const FolderPage = () => {
  const { color } = useParams();
  const navigate = useNavigate();
  const goToAnotherColor = (color) => {
    navigate(`/folder/${color}`);
  };

  const folderIndexColor = (color) => {
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
        return "#FFFFF";
    }
  };

  const realBgColor = folderIndexColor(color);

  return (
    <div>
      <GlobalStyle />

      <Folders>
        <Wrapper>
          <FolderIndexDom>
            <FolderIndexBar bgColor={realBgColor}>{color}</FolderIndexBar>

            <FolderIndex bgColor={realBgColor} />
          </FolderIndexDom>

          <PagesDom>
            {data.postListData.map((data, i) => (
              <Pages key={i} bgColor={data.color}>
                <h4>{data.date}</h4>

                <h5>{data.title}</h5>

                <h5>{data.content}</h5>
              </Pages>
            ))}
          </PagesDom>
        </Wrapper>
      </Folders>
    </div>
  );
};

export default FolderPage;
