import React, {useState, useEffect} from 'react'
import { PostTitle, PostDate, PostContents, PostDateContainer } from '../styles/PDstyled'
import {ButtonContainer, EditButton, DeleteButton} from "../styles/darkmode"
import axios from 'axios';
import DeleteModal from './DeleteModal'



const PostDetailProps = ({darkMode, setDarkMode}) => {
    const [post, setPost] = useState([]);
    
    
    useEffect(()=>{
        axios.get("https://e67dd659-cb1e-4eb4-a012-5e2e92b67b2a.mock.pstmn.io/postdetail")
        .then(response=>{
                setPost(response.data[0]);
                console.log(response.data[0]);
        
            })
            
    }, []);

    const [showModal, setModal] = useState(false);

    const openModal = () =>{
        setModal(true);

    }

    const closeModal = () =>{
        setModal(false);

    }

    return (
        <>
            <PostTitle maincolor={post.mainColor}>{post.title}</PostTitle>
            <PostDateContainer>
                <PostDate>{post.year}년 {post.month}월 {post.date}일</PostDate>
                    <ButtonContainer>
                        <EditButton> 수정 </EditButton>
                        <DeleteButton onClick={openModal}> 삭제 </DeleteButton>
                        <DeleteModal showModal={showModal} closeModal={closeModal}/>
                        {/* {modal === false ? <Modal /> : null} */}
                    </ButtonContainer>
            </PostDateContainer>
            <PostContents>{post.contents}</PostContents>

        </>
        

    )
}

export default PostDetailProps