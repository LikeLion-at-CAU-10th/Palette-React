import React, {useState, useEffect} from 'react'
import { PostTitle, PostDate, PostContents, PostDateContainer } from '../styles/PDstyled'
import {ButtonContainer, EditButton, DeleteButton} from "../styles/darkmode"
import axios from 'axios';
import DeleteModal from './DeleteModal'
import { useParams } from 'react-router-dom';

const PostDetailProps = ({darkMode, setDarkMode}) => {


    //post에 대한 정보를 받아오는 state
    //post = postData에 저장된 배열 정보들
    const [post, setPost] = useState([]);
    
    useEffect(()=>{
        axios.get("https://e67dd659-cb1e-4eb4-a012-5e2e92b67b2a.mock.pstmn.io/postdetail")
        .then(response=>{
                setPost(response.data.postData);
                // console.log(response.data);
            })
    }, []);

    // let { useId } = useParams();
    // console.log(useId);

    const [showModal, setModal] = useState(false);

    const openModal = () =>{
        setModal(true);
        console.log('실행중');
    }

    const closeModal = () =>{
        setModal(false);
    }

    //날짜 split
    const changeDateForm = (dateString) => {

        var date= (dateString || '').split('-');

        // const date = post.date.split('-');
        return date;
        
    }

    return (
        <>
            <PostTitle maincolor={post.color}>{post.title}</PostTitle>
            <PostDateContainer>
                <PostDate>{changeDateForm(post.date)[0]}년 {changeDateForm(post.date)[1]}월 {changeDateForm(post.date)[2]}일</PostDate>
                    <ButtonContainer>
                        <EditButton> 수정 </EditButton>
                        <div> | </div>
                        <DeleteButton onClick={openModal}> 삭제 </DeleteButton>
                        <DeleteModal showModal={showModal} closeModal={closeModal}/>
                        {/* {modal === false ? <Modal /> : null} */}
                    </ButtonContainer>
            </PostDateContainer>
            <PostContents>{post.content}</PostContents>

        </>
        

    )
}

export default PostDetailProps