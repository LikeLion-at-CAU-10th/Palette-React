import React, { useState, useEffect } from "react";
import PostTab, { PostTabDom } from "../component/PostTab";
import sticker from "../data/img/Star4.png";
import camera from "../data/img/camera.png";
import stickerMenu from "../data/img/sticker_menu.png";
import {
  ModalDiv,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBG,
  Palette,
  PaletteContainer,
  StickerMenu,
  StickerPalette,
  StickerPaletteDiv,
  StiPalette,
} from "../styles/PostModalStyled";
import {
  PostContainer,
  MenuContainer,
  ColorBox,
  StickerBox,
  ImgBox,
  PostTextContainer,
  TC,
  SubmitButton,
  SubmitModalBG,
  SubmitModalContainer,
  ModalText,
  ModalTextF,
  ModalTextContainer,
  ModalMenu,
  PostSubmitDiv,
  PostSection,
  PostWriteDiv,
  ModalButton,
  ImgUp,
} from "../styles/PostStyled";
import closeIm from "../data/img/close.png";
import palette from "../data/ColorModalData";
import stickerPalette from "../data/stickerPaletteData";
import { useNavigate } from "react-router-dom";
import WriteContents from "../component/WriteContents";
import axios from "axios";
import styled from "styled-components";

// import {ThemeProvider} from 'styled-components'
// import {GlobalStyles, darkTheme, lightTheme} from '../styles/darkmode'

const SubmitSection = ({ onSubmitFolder, folderColor, onSubmitPostDetail }) => {
  const [showModal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const FolderColor = ({ folderColor }) => {
    const fd = `${folderColor}`;

    if (fd === "red") return "rgba(255, 58, 58, 0.9)";
    else if (fd === "purple") return "rgba(205, 98, 255, 0.9)";
    else if (fd === "blue") return "rgba(0, 56, 255, 0.9)";
    else if (fd === "green") return "rgba(85, 214, 90, 0.9)";
    else if (fd === "orange") return "rgba(255, 141, 35, 0.9)";
    else if (fd === "yellow") return "rgba(251, 176, 5, 0.9)";
    else if (fd === "black") return "rgba(101, 101, 101, 0.9)";
  };

  return (
    <PostSubmitDiv>
      <SubmitButton onClick={openModal}>upload</SubmitButton>
      {showModal ? (
        <SubmitModalBG onClick={closeModal}>
          <SubmitModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalTextContainer>
              <>
                <ModalText> 이 게시물은 </ModalText>
                <ModalTextF FolderColor={FolderColor({ folderColor })}>
                  {" "}
                  {`${folderColor}`}{" "}
                </ModalTextF>
                <ModalText> 폴더에 업로드 되었습니다 </ModalText>
              </>
              {/* <ModalText> main color를 지정해주세요 </ModalText> */}
            </ModalTextContainer>

            <ModalMenu>
              <ModalButton
                FolderColor={FolderColor({ folderColor })}
                onClick={onSubmitFolder}
              >
                폴더로 이동하기
              </ModalButton>
              <ModalButton
                FolderColor={FolderColor({ folderColor })}
                onClick={onSubmitPostDetail}
              >
                내가 쓴 글 보기
              </ModalButton>
            </ModalMenu>
          </SubmitModalContainer>
        </SubmitModalBG>
      ) : null}
    </PostSubmitDiv>
  );
};

const Post = () => {
  // const [darkMode, setDarkMode]  = useState(true);

  const [showColorModal, setColorModal] = useState(false);
  const [showStickerModal, setStickerModal] = useState(false);
  const [showStickerPModal, setStickerPModal] = useState(false);

  const openColorModal = () => {
    setColorModal(true);
  };

  const openStickerModal = () => {
    setStickerModal(true);
  };

  const openStickerPModal = () => {
    setStickerPModal(!showStickerPModal);
  };

  const closeModal = () => {
    setColorModal(false);
    setStickerModal(false);
    setStickerPModal(false);
  };

  //팔레트 클릭 시 색상 state 받아오기
  const [BGcolor, setBGcolor] = useState("black");
  const [folderColor, setFolderColor] = useState("");

  const handleClick = (e) => {
    const pl = e.target.id;
    const fd = e.target.value;

    setBGcolor(pl);
    setFolderColor(fd);

    // console.log(e.target);
  };
  console.log(folderColor);
  // console.log(BGcolor);

  //글 내용에 대한 state 저장하기
  const [inputs, setInputs] = useState({
    title: "",
    contents: "",
  });

  //2개를 동시에 관리하기 위한 객체 만들기
  const { title, contents } = inputs;

  //onChange 함수 만들기
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const onSubmitFolder = () => {
    navigate(`../folder/${folderColor}`);
    // axios.post(``,{
    //     title: inputs.title,
    //     contents: inputs.contents,
    // } ).then(()=>{
    //     // console.log(response)
    //     navigate('../')

    // })
  };

  const onSubmitPostDetail = () => {
    navigate(`../post-detail`);
  };

  const [imgFile, setImgFile] = useState("");

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImgFile(reader.result);
        resolve();
        console.log(reader);
      };
    });
  };

  const handleImg = (e) => {
    encodeFileToBase64(e.target.files[0]);
  };

  return (
    <>
      {/* <ThemeProvider theme={darkMode ? darkTheme : lightTheme}> 
        <GlobalStyles/> */}
      <PostContainer BGcolor={BGcolor}>
        {/* 메뉴 탭 */}
        <MenuContainer>
          <div id="selectMainColor">
            <PostTab
              name="main color"
              img={<ColorBox BGcolor={BGcolor} />}
              openModal={openColorModal}
            ></PostTab>

            {showColorModal ? (
              <ModalBG onClick={closeModal}>
                <ModalDiv onClick={(e) => e.stopPropagation()}>
                  <ModalHeader>
                    <ModalTitle> main color </ModalTitle>
                    <CloseButton
                      onClick={closeModal}
                      src={closeIm}
                    ></CloseButton>
                  </ModalHeader>

                  <PaletteContainer BGcolor={BGcolor}>
                    {palette.palettes.map((palettes, i) => (
                      <Palette
                        id={`${palettes.color}`}
                        value={`${palettes.folder}`}
                        color={palettes.color}
                        folder={palettes.folder}
                        onClick={handleClick}
                      ></Palette>
                    ))}
                  </PaletteContainer>
                </ModalDiv>
              </ModalBG>
            ) : null}
          </div>

          <div id="selectSticker">
            <PostTab
              name="sticker"
              img={<StickerBox src={sticker} />}
              openModal={openStickerModal}
            />
            {showStickerModal ? (
              <ModalBG onClick={closeModal}>
                <ModalDiv onClick={(e) => e.stopPropagation()}>
                  <ModalHeader>
                    <ModalTitle> sticker </ModalTitle>
                    <StickerMenu
                      src={stickerMenu}
                      onClick={openStickerPModal}
                    />
                    <CloseButton
                      onClick={closeModal}
                      src={closeIm}
                    ></CloseButton>
                  </ModalHeader>

                  <PaletteContainer>
                    {stickerPalette.stickerOrigin.map((stickerOrigin) => (
                      <StiPalette
                        id={`${stickerOrigin.origin}`}
                        src={stickerOrigin.origin}
                        alt="사진 없음"
                      />
                    ))}
                  </PaletteContainer>
                </ModalDiv>
              </ModalBG>
            ) : null}

            {showStickerPModal ? (
              <StickerPaletteDiv>
                {palette.palettes.map((palettes, i) => (
                  <StickerPalette
                    id={`${palettes.color}`}
                    color={palettes.color}
                  />
                ))}
              </StickerPaletteDiv>
            ) : null}
          </div>

          <div id="SelectImg" styled="position:relative">
            <PostTabDom onClick={handleImg}>
              <ImgUp
                id="uploadimg"
                type="file"
                accept="image/*"
                onChange={handleImg}
                placeholder="dddddddddddddddddd"
              ></ImgUp>
              image
              <ImgBox src={camera} />
              <ImgUp
                id="uploadimg"
                type="file"
                accept="image/*"
                onChange={handleImg}
              />
            </PostTabDom>
          </div>
        </MenuContainer>

        {/* 글작성하는 부분 */}
        <PostTextContainer>
          <TC>
            <PostSection>
              <PostWriteDiv>
                <WriteContents
                  onChange={onChange}
                  title={title}
                  contents={contents}
                  imgFile={imgFile}
                ></WriteContents>
              </PostWriteDiv>

              <SubmitSection
                onSubmitFolder={onSubmitFolder}
                onSubmitPostDetail={onSubmitPostDetail}
                folderColor={folderColor}
              />
            </PostSection>
          </TC>
        </PostTextContainer>
      </PostContainer>
      {/* </ThemeProvider> */}
    </>
  );
};

export default Post;
