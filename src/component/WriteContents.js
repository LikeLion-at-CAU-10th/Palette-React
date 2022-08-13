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
border: solid transparent;
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
opacity: 0;

`

const ImgInput = styled.div`
/* border: solid black; */
display: flex;
justify-content: center;
align-items: center;
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

    //이미지 미리보기
    const [imgFile, setImgFile] = useState("");

    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);

        return new Promise((resolve)=> {
            reader.onload = () => {
                setImgFile(reader.result);
                resolve();
                console.log(reader);
            }
        })
        
    }
    
    const handleImg = (e) =>{
        encodeFileToBase64(e.target.files[0]);
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


        <ImgUp id ="uploadimg" type="file" accept='image/*' onChange={handleImg} />
        <ImgInput> {imgFile && <img src={imgFile} alt="미리보기"/>} </ImgInput>
        </WriteContentDiv>
        
        </>
    )
}

export default WriteContents