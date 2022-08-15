import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import data from "../data/folderData";
import PageList from "../component/PageList";

const GlobalStyle = createGlobalStyle`
html {
    background-color:black;
}`;

const Folders = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3vw;
`;
const FolderIndexBar = styled.div`
  width: 3.9vw;
  height: 22.2vh;
  background: #f7e125;
  border-radius: 1.71em 0 0 1.71em;
  //font-size: 4.44vh;
  font-weight: 900;
  //transform: rotate(-90deg);
  text-align: center;
  color: black;
`;
const FolderIndex = styled.div`
  height: 76vh;
  width: 5.21vw;
  background: #f7e125;
`;

const Pages = styled.div`
  width: 20vw;
  height: 76vh;
  background: yellow;
  color: black;
  font-size: 20px;
`;

const FolderPage = () => {
  return (
    <div>
      <GlobalStyle />
      <Folders>
        <FolderIndexBar>yellow</FolderIndexBar>
        <FolderIndex></FolderIndex>
        <Pages></Pages>
        {/* <PageList pageList={data} />
        </Pages> */}
      </Folders>
    </div>
  );
};

export default FolderPage;
