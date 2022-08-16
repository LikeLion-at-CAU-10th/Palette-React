import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import WriteContents from './WriteContents';
import axios from "axios";
import {SubmitButton, SubmitModalBG, SubmitModalContainer, ModalText, ModalMenu, PostSubmitDiv, PostSection, PostWriteDiv, ModalButton} from '../styles/PostStyled'

// 업로드 버튼 부분
// + 업로드 되었다는 문구와 함께 어느 폴더로 업로드 되었는지 알려야 함
const SubmitSection = ({onSubmit}) => {

    const [showModal, setModal] = useState(false);

    const openModal = () =>{
        setModal(true);
    }

    const closeModal = () =>{
        setModal(false);
    }

return(
    <PostSubmitDiv>
        <SubmitButton onClick={()=>{onSubmit(); openModal();}}>upload</SubmitButton>
        {showModal ? 
        <SubmitModalBG onClick={closeModal}>
            <SubmitModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalText> 이 게시물은 000에 업로드 되었습니다. </ModalText>
                <ModalMenu>
                    <ModalButton >폴더로 이동하기</ModalButton>
                    <ModalButton>내가 쓴 글 보기</ModalButton>
                </ModalMenu>
            </SubmitModalContainer>
        </SubmitModalBG> 
        : null}
    </PostSubmitDiv>
)};


const PostText = () => {
    const [inputs, setInputs] = useState({
        title: '',
        contents: '',
    });

    //2개를 동시에 관리하기 위한 객체 만들기
    const{title, contents} = inputs;

    //onChange 함수 만들기
    const onChange = (e) => {
        const {value,name} = e.target;
        setInputs({ 
            ...inputs,
            [name]: value,
        });
    };

    const navigate = useNavigate();

    const onSubmit = () => {
        axios.post(``,{
            title: inputs.title,
            contents: inputs.contents,
        } ).then(()=>{
            // console.log(response)
            navigate('../')

        })
    }


    return (

        <>
        <PostSection>

            <PostWriteDiv>

                <WriteContents
                onChange={onChange}
                title={title}
                contents={contents}></WriteContents>

            </PostWriteDiv>

            <SubmitSection 
            onSubmit={onSubmit}/>

        </PostSection>


        </>

    )
}

export default PostText
