import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
// import DateInput from './DateInput'

export const WriteContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const TitleInput = styled.input`
  flex-basis: 6%;
  border: transparent;
  border-bottom: solid 0.2vw #cacccb;
  margin-bottom: 1vw;
  outline: none;
  font-size: 1.2vw;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 60vh;
`;

export const ContentsInput = styled.textarea`
  border: solid transparent;
  outline: none;
  font-size: 1vw;
  resize: none;
  min-height: 50vh;
`;

const ImgInput = styled.div`
  /* border: solid black; */
  max-width: 100%;
  transform: scale(0.7);
`;

const ImgSize = styled.img`
  width: 100%;
`;

const WriteContents = ({ onChange, contents, title, imgFile }) => {
  const titleInput = useRef();
  const contentsInput = useRef();

  useEffect(() => {
    titleInput.current.focus();
  }, []);

  const onKeyUp = (e) => {
    if (e.key === "Enter") {
      contentsInput.current.focus();
    }
  };

  //이미지 미리보기

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
        <ContentBox>
          <ContentsInput
            name="contents"
            value={contents}
            placeholder="내용을 입력하세요"
            cols="50"
            rows="10"
            onChange={onChange}
            ref={contentsInput}
          />

          <ImgInput>
            {" "}
            {imgFile && <ImgSize src={imgFile} alt="미리보기" />}{" "}
          </ImgInput>
        </ContentBox>
      </WriteContentDiv>
    </>
  );
};

export default WriteContents;
