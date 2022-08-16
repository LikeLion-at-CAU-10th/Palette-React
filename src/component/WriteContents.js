import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
// import DateInput from './DateInput'

export const WriteContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border: solid transparent 1vw;
  height: 90%;
  /* height: 50vh; */
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
  overflow: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  /* min-height: 70vh; */
`;

export const ContentsInput = styled.textarea`
  display: flex;
  border: solid transparent;
  outline: none;
  font-size: 1vw;
  resize: none;
  min-height: 35vh;

  overflow-y: auto;
  margin-bottom: -2vw;
`;

const ImgInput = styled.div`
  /* border: solid black; */
  max-width: 100%;
  transform: scale(0.7);
  display: flex;
`;

const ImgSize = styled.img`
  width: 100%;
  margin: 0;
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
          ></ContentsInput>

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
