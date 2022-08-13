import React, {useState, useEffect} from 'react'
import PostContents from '../component/PostContents'
import PostTab from '../component/PostTab'
import sticker from '../data/Star4.png'
import camera from '../data/camera.png'
import {
    ModalDiv, 
    ModalHeader, 
    ModalTitle, 
    CloseButton,
    ModalBG, 
    Palette, 
    PaletteContainer} from "../styles/PostModalStyled"
import { PostContainer, MenuContainer, ColorBox, StickerBox, ImgBox, } from '../styles/PostStyled'
import closeIm from '../data/img/close.png'
import palette from '../data/ColorModalData'

// import {ThemeProvider} from 'styled-components'
// import {GlobalStyles, darkTheme, lightTheme} from '../styles/darkmode'


const PostDetail = () => {
    // const [darkMode, setDarkMode]  = useState(true); 

    const [showModal, setModal] = useState(false);

    const openModal = () =>{
        setModal(true);
        
    }
    
    const closeModal = () =>{
        setModal(false);
    }

    //팔레트 클릭 시 색상 state 받아오기
    const [BGcolor, setBGcolor] = useState('black');

    const handleClick = (e) =>{
        const pl = e.target.id;
        setBGcolor(pl);
        // console.log(BGcolor);
        
    }
    // console.log(BGcolor);
    

    return (
        <>
        {/* <ThemeProvider theme={darkMode ? darkTheme : lightTheme}> 
        <GlobalStyles/> */}
        <PostContainer BGcolor={BGcolor}>
            {/* <PostMenu>메뉴탭</PostMenu> */}
            <MenuContainer>
            <div>
                <PostTab name='main color' img={<ColorBox BGcolor={BGcolor} />} openModal={openModal}></PostTab>
                
                { showModal ? 
                <ModalBG>
                <ModalDiv>
                <ModalHeader>
                    <ModalTitle> main color </ModalTitle>
                    <CloseButton onClick={closeModal} src={closeIm}></CloseButton>
                </ModalHeader>
        
                <PaletteContainer BGcolor={BGcolor}>
                {palette.palettes.map((palettes,i)=>(
                <Palette id={`${palettes.color}`} color={palettes.color} onClick={handleClick}/> ))}
                </PaletteContainer>
                </ModalDiv>
                </ModalBG> : null}
            </div>


            <div>
                <PostTab name='sticker' img={<StickerBox src={sticker}/>} />
            </div>

            <div styled="position:relative">
                <PostTab name='image' img={<ImgBox src={camera}/>}/>
            </div>
            
        </MenuContainer>
            <PostContents>글쓰는 부분</PostContents>
            {/* <div darkMode={darkMode} setDarkMode={setDarkMode}/> */}
        </PostContainer>
        {/* </ThemeProvider> */}
        
        
        </>

    )
}

export default PostDetail