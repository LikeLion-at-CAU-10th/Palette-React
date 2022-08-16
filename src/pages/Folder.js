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
  height: 6vh;
  width: 22.2vh;
  background: #f7e125;
  border-radius: 1em 1em 0 0;
  font-size: 3.5vh;
  font-weight: 900;
  transform: rotate(-90deg);
  text-align: center;
`;

const FolderIndex = styled.div`
  height: 76vh;
  background: #f7e125;
  width: 20vw;
  padding: 2vw;
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
          <FolderIndexBar>yellow</FolderIndexBar>
          <FolderIndex></FolderIndex>
        </Wrapper>
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
      </Folders>
    </div>
  );
};

export default FolderPage;
