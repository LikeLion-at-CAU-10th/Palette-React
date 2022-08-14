import React, {useState, useEffect} from 'react'
import PostTab from '../component/PostTab'
import sticker from '../data/img/Star4.png'
import camera from '../data/img/camera.png'
import stickerMenu from "../data/img/sticker_menu.png"
import {
    ModalDiv, 
    ModalHeader, 
    ModalTitle, 
    CloseButton,
    ModalBG, 
    Palette, 
    PaletteContainer,
    StickerMenu, StickerPalette, StickerPaletteDiv, StiPalette} from "../styles/PostModalStyled"
import { 
    PostContainer, 
    MenuContainer, 
    ColorBox, StickerBox, ImgBox, 
    PostTextContainer, TC,
    SubmitButton, 
    SubmitModalBG, 
    SubmitModalContainer, 
    ModalText, 
    ModalMenu, 
    PostSubmitDiv, PostSection,
    PostWriteDiv, 
    ModalButton } from '../styles/PostStyled'
import closeIm from '../data/img/close.png'
import palette from '../data/ColorModalData'
import stickerPalette from '../data/stickerPaletteData'
import {useNavigate} from 'react-router-dom'
import WriteContents from '../component/WriteContents';
import axios from "axios";
import styled from 'styled-components'

// import {ThemeProvider} from 'styled-components'
// import {GlobalStyles, darkTheme, lightTheme} from '../styles/darkmode'


const SubmitSection = ({onSubmit, folderColor}) => {

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
            <ModalText> 이 게시물은 {`${folderColor}`}에 업로드 되었습니다. </ModalText>
                <ModalMenu>
                    <ModalButton >폴더로 이동하기</ModalButton>
                    <ModalButton>내가 쓴 글 보기</ModalButton>
                </ModalMenu>
            </SubmitModalContainer>
        </SubmitModalBG> 
        : null}
    </PostSubmitDiv>
)};



const Post = () => {
    // const [darkMode, setDarkMode]  = useState(true); 

    const [showColorModal, setColorModal] = useState(false);
    const [showStickerModal, setStickerModal] = useState(false);
    const [showStickerPModal, setStickerPModal] = useState(false);

    const openColorModal = () =>{
        setColorModal(true);
    }

    const openStickerModal = () =>{
        setStickerModal(true);
    }

    const openStickerPModal = () =>{
        setStickerPModal(!showStickerPModal);
    }

    
    const closeModal = () =>{
        setColorModal(false);
        setStickerModal(false);
        setStickerPModal(false);
    }

    //팔레트 클릭 시 색상 state 받아오기
    const [BGcolor, setBGcolor] = useState('black');
    const [folderColor, setFolderColor] = useState('');

    const handleClick = (e) =>{
        const pl = e.target.id;
        const fd = e.target.value

        setBGcolor(pl);
        setFolderColor(fd);

        // console.log(e.target);
        
    }
    console.log(folderColor);
    // console.log(BGcolor);



    //글 내용에 대한 state 저장하기
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
        {/* <ThemeProvider theme={darkMode ? darkTheme : lightTheme}> 
        <GlobalStyles/> */}
        <PostContainer BGcolor={BGcolor}>

            {/* 메뉴 탭 */}
            <MenuContainer>
                    <div id="selectMainColor">
                        <PostTab name='main color' img={<ColorBox BGcolor={BGcolor} />} openModal={openColorModal}></PostTab>
                        
                        { showColorModal ? 
                        <ModalBG>
                        <ModalDiv>
                        <ModalHeader>
                            <ModalTitle> main color </ModalTitle>
                            <CloseButton onClick={closeModal} src={closeIm}></CloseButton>
                        </ModalHeader>
                
                        <PaletteContainer BGcolor={BGcolor}>
                        {palette.palettes.map((palettes, i)=>(
                        <Palette id={`${palettes.color}`} value={`${palettes.folder}`}  color={palettes.color} folder={palettes.folder} onClick={handleClick}>
                        </Palette>
                        ))}
                        </PaletteContainer>
                        </ModalDiv>
                        </ModalBG> : null}
                    </div>


                    <div id="selectSticker">
                        <PostTab name='sticker' img={<StickerBox src={sticker}/>} openModal={openStickerModal} />
                        { showStickerModal ? 
                            <ModalBG>
                            <ModalDiv>
                            <ModalHeader>
                                <ModalTitle> sticker </ModalTitle>
                                <StickerMenu src={stickerMenu} onClick={openStickerPModal}/>
                                <CloseButton onClick={closeModal} src={closeIm}></CloseButton>
                                
                            </ModalHeader>

                            <PaletteContainer>
                            {stickerPalette.stickerOrigin.map((stickerOrigin)=>(
                            <StiPalette id={`${stickerOrigin.origin}`} src={stickerOrigin.origin} alt="사진 없음"/> ))}
                            </PaletteContainer>
                            </ModalDiv>
                            </ModalBG> : null}

                            { showStickerPModal ?
                            <StickerPaletteDiv>
                            {palette.palettes.map((palettes,i)=>(
                            <StickerPalette id={`${palettes.color}`} color={palettes.color}/> ))}
                            </StickerPaletteDiv>
                            : null}
                            
                    </div>

                    <div id="SelectImg" styled="position:relative">
                        <PostTab name='image' img={<ImgBox src={camera}/>}/>
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
                            contents={contents}></WriteContents>

                        </PostWriteDiv>

                        <SubmitSection 
                        onSubmit={onSubmit} folderColor={folderColor} />

                    </PostSection>
                    </TC>
            </PostTextContainer>
        </PostContainer>
        {/* </ThemeProvider> */}
        </>

    )
}

export default Post