import React, {useState} from 'react'
import PostMenu from '../component/PostMenu'
import PostContents from '../component/PostContents'
import {PostDetailContainer} from '../styles/PDstyled'

// import {ThemeProvider} from 'styled-components'
// import {GlobalStyles, darkTheme, lightTheme} from '../styles/darkmode'


const PostDetail = () => {
    // const [darkMode, setDarkMode]  = useState(true); 
    

    return (
        <>
        {/* <ThemeProvider theme={darkMode ? darkTheme : lightTheme}> 
        <GlobalStyles/> */}
        <PostDetailContainer>
            <PostMenu>메뉴탭</PostMenu>
            <PostContents>글쓰는 부분</PostContents>
            {/* <div darkMode={darkMode} setDarkMode={setDarkMode}/> */}
        </PostDetailContainer>
        {/* </ThemeProvider> */}
        
        
        </>

    )
}

export default PostDetail