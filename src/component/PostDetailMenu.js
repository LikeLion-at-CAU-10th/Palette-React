import React, {useState, useEffect} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Tab from './Tab'
import {MenuContainer, ColorBox} from '../styles/PDstyled'
import axios from 'axios'



const PostDetailMenu = ({post}) => {

    //post에 대한 정보를 받아오는 state
    const [folderColor, setFolderColor] = useState("");
    const [getId, setGetId] = useState('');
    
    useEffect(()=>{
        axios.get("https://e67dd659-cb1e-4eb4-a012-5e2e92b67b2a.mock.pstmn.io/postdetail")
        .then(response=>{
                setGetId(response.data.postData);
                setFolderColor(response.data.postData.category);
            })
            
    }, []);
    
    //prev 버튼 next 버튼 클릭하면 url 변화
    const navigate = useNavigate();
    const clickPrev = () => {
        navigate(`../post-detail/${folderColor}/id받아온거/prev`);    
    };

    const clickNext = () => {
        navigate(`../post-detail/${folderColor}/id받아온거/next`);
    };
    
    //url parameter 받아오기
    //pathArray[1]=post-detail, pathArray[2]=폴더 색상(category), pathArray[3]=id
    const location = useLocation();
    useEffect(() => {
        console.log(location.pathname)
    }, [location]);

    const pathArray= (location.pathname || '').split('/');
    console.log(pathArray[2]);

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