import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import data from "../data/folderData";
import PageList from "../component/PageList";

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
  right: 19.8vw;
  height: 6vh;
  width: 22.2vh;
  background: #f7e125;
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
  background: #f7e125;
  width: 20vw;
  padding: 2vw;
  z-index: -1;
`;

const Pages = styled.div`
  width: 20vw;
  height: 76vh;
  background: ${(props) => props.bgColor};
  color: black;
  font-size: 20px;
  margin-left: -20vw;
  padding: 2vw;
  box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &:hover {
    z-index: 9999;
  }
`;

const FolderPage = () => {
  return (
    <div>
      <GlobalStyle />

      <Folders>
        <Wrapper>
          <FolderIndex>
            <FolderIndexBar> yellow</FolderIndexBar>
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
