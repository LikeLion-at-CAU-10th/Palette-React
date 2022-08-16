import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Tab from './Tab'
import {MenuContainer, ColorBox} from '../styles/PDstyled'
import axios from 'axios'



const PostDetailMenu = ({post}) => {

    //post에 대한 정보를 받아오는 state
    //post = postData에 저장된 배열 정보들

    // const [post, setPost] = useState([]);
    const [getId, setGetId] = useState('');
    const [folderColor, setFolderColor] = useState("");
    
    useEffect(()=>{
        axios.get("https://e67dd659-cb1e-4eb4-a012-5e2e92b67b2a.mock.pstmn.io/postdetail")
        .then(response=>{
                setGetId(response.data.postData);
                setFolderColor(response.data.postData.category);
            })
            
    }, []);
    
    const navigate = useNavigate();

    const clickPrev = () => {
        console.log('실행중');
        navigate(`../post-detail/${folderColor}/prev`);
        
    };

    const clickNext = () => {
        console.log('실행중');
        navigate(`../post-detail/${folderColor}/next`);
        
    };


    return (
        <>
        <MenuContainer>
            <Tab name='main color' img={<ColorBox maincolor={post.color} />}></Tab>
            <Tab name='prev' click={clickPrev}/>
            <Tab name='next' click={clickNext}/>
        </MenuContainer>
        
        </>
    )
}

export default PostDetailMenu