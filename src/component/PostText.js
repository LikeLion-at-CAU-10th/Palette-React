import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import WriteContents from './WriteContents';
import axios from "axios";

//업로드 버튼 부분
const SubmitSection = React.memo(({onSubmit})=>(
    <PostSubmitDiv>
        <SubmitButton onClick={onSubmit}>upload</SubmitButton>
    </PostSubmitDiv>
));

export const PostSubmitDiv = styled.div`
display:flex;
justify-content: center;
margin: 2vw;
`
export const SubmitButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1vw;
    font-family: "Poppins-Bold";
    color: #000000;
    border-radius: 2.3vw;
    border: solid 0.1vw #000000;
    width: 6vw;
    height: 2vw;
    margin: 0 0 -1.5vw 0;
    cursor: pointer;
    &:hover{
        color: grey;
        border: solid 0.1vw grey;
    }
`

export const PostSection = styled.div`
    margin: 0px auto;
    margin-top: 20px;
    width: 90%;
    display: flex; 
    flex-direction: column;
`
export const PostWriteDiv = styled.div`
width: 100%;
display: flex;
flex-direction: column;
background-color: purple;
`


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
            repls: [],
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
                contents={contents}
                ></WriteContents>

            </PostWriteDiv>

            <SubmitSection 
            onSubmit={onSubmit}
            />

        </PostSection>


        </>

    )
}

export default PostText
