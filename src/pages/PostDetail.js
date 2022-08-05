import React, { useState } from "react";
import PostDetailMenu from "../component/PostDetailMenu";
import PostDetailContents from "../component/PostDetailContents";
import { PostDetailFlex, PostDetailContainer } from "../styles/PDstyled";

import { ThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme, lightTheme } from "../styles/darkmode";
import DarkModeToggle from "../component/DarkModeToggle";

const PostDetail = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <PostDetailFlex>
          <PostDetailContainer>
            <PostDetailMenu>메뉴탭</PostDetailMenu>
            <PostDetailContents>글쓰는 부분</PostDetailContents>
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </PostDetailContainer>
        </PostDetailFlex>
      </ThemeProvider>
    </>
  );
};

export default PostDetail;
