import React, {useState, useEffect} from 'react'
import PostTab from './PostTab'
import styled from "styled-components"
import sticker from '../data/Star4.png'
import camera from '../data/camera.png'
import {ModalDiv, ModalHeader, ModalTitle, CloseButton, ModalBG, Palette, PaletteContainer} from "../styles/PostModalStyled"
import closeIm from '../data/img/close.png'
import palette from '../data/ColorModalData'

export const MenuContainer=styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0 22.7vw 0 0;
height: 3vw;
margin: 13vw 0 0;
width: 59.5vw;
cursor: pointer;
`

export const ColorBox=styled.div`
width: 1vw;
height: 1vw;
border: #000000;
background-color: ${(props)=> props.BGcolor} ;
margin: 0 0 0 1vw;
`

export const StickerBox = styled.img`
width: 1.5vw;
height: 1.5vw;
margin: 0 0 0 1vw;
border: transparent;
padding: 0;
`

export const ImgBox = styled.img`
width: 1.5vw;
height: 1.5vw;
margin: 0 0 0 1vw;
`


const PostMenu = () => {
    
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
        
        </>
    )
}

export default PostMenu