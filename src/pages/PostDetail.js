import React, {useState, useEffect} from 'react'
import PostDetailMenu from '../component/PostDetailMenu'
import PostDetailContents from '../component/PostDetailContents'
import {PostDetailFlex,PostDetailContainer} from '../styles/PDstyled'
import {ThemeProvider} from 'styled-components'
import {GlobalStyles, darkTheme, lightTheme} from '../styles/darkmode'
import DarkModeToggle from '../component/DarkModeToggle'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const PostDetail = () => {
    const [darkMode, setDarkMode]  = useState(true); 
    


    //post에 대한 정보를 받아오는 state
    //post = postData에 저장된 배열 정보들
    const [post, setPost] = useState([]);
    
    useEffect(()=>{
        axios.get("https://e67dd659-cb1e-4eb4-a012-5e2e92b67b2a.mock.pstmn.io/postdetail")
        .then(response=>{
                setPost(response.data.postData);
                // console.log(response.data);
            })
            console.log(post);
            
    }, []);
    

    return (
        <>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}> 
        <GlobalStyles/>
        <PostDetailContainer maincolor={post.color}>
            <PostDetailMenu post={post}>메뉴탭</PostDetailMenu>
            <PostDetailContents>글쓰는 부분</PostDetailContents>
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode}/>
        </PostDetailContainer>
        </ThemeProvider>
        
        </>

    )
}

export default PostDetail