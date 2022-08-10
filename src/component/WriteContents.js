import React,{useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
// import DateInput from './DateInput'

export const WriteContentDiv = styled.div`
display: flex;
flex-direction: column;
background-color: white;
height: 50vw;
`
export const TitleInput=styled.input`
flex-basis: 6%;
border: transparent;
border-bottom: solid 0.2vw #CACCCB;
margin-bottom: 1vw;
outline: none;
font-size: 1.2vw;
`

export const ContentsInput=styled.textarea`
flex-basis: 85%;
border: transparent;
outline : none;
font-size: 1vw;
`

const ImgUp = styled.input`
width: 10vw;
height: 3vw;
font-size: 1vw;
outline: none;
position: absolute;
top: 13vw;
right: 43vw;
margin-left: 0.8vw;
/* opacity: 0; */
`

const WriteContents = ({onChange, contents, title}) => {
    const titleInput=useRef();
    const contentsInput=useRef();
    useEffect(()=>{
        titleInput.current.focus();
    }, []);

    const onKeyUp=(e)=>{
        if(e.key==='Enter'){
            contentsInput.current.focus();
        }
    }

    const [imgBase64, setImgBase64] = useState([]); // 파일 base64
    const [imgFile, setImgFile] = useState(null);

    const handleChangeFile = (e) => {
        console.log(e.target.files);
    }



    return (
        <>
        <WriteContentDiv>
        <TitleInput 
            name="title"
            value={title}
            placeholder="제목"
            onChange={onChange}
            ref={titleInput}
            onKeyUp={onKeyUp}
            />

        {/* <DateInput/> */}

        <ContentsInput 
            name="contents"
            value={contents}
            placeholder="내용을 입력하세요"
            cols="30" 
            rows="10"
            onChange={onChange}
            ref={contentsInput}
            
            />

        <div>
        <ImgUp type="file" accept='image/*' onClick={handleChangeFile } />

        </div>
        </WriteContentDiv>
        
        
        </>
    )
}

export default WriteContents