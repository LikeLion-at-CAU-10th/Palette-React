import React from 'react'
import {ModalDiv, ModalHeader, ModalTitle} from "../styles/PostModalStyled"
import styled from 'styled-components'
import closeIm from '../data/img/close.png'
import palette from '../data/ColorModalData'

export const CloseButton = styled.img`
width: 1vw;
height: 1vw;
/* background-color: aliceblue; */
`
const ModalBG=styled.div`
position: absolute;
top:0;
left: 0;
bottom:0;
right: 0;
z-index: 1;
`

const PaletteContainer = styled.div`
display: flex;
justify-content: center;
padding: 0 3vw;
flex-wrap: wrap;
`

const Palette = styled.div`
width: 2.7vw;
height: 2.7vw;
margin: 0.5vw -0.5vw 1vw 0;
cursor: pointer;
border-radius: 50%;
border: solid 0.1vw #000;
background-color: ${(props)=> props.color};
`


const ColorModal = ({ showModal, closeModal }) => {
    return (
        <>
        { showModal ?
        <>
        <ModalBG >
        <ModalDiv>
        <ModalHeader>
            <ModalTitle> main color </ModalTitle>
            <CloseButton onClick={closeModal} src={closeIm}></CloseButton>
        </ModalHeader>

        <PaletteContainer>{palette.palettes.map((palettes,i)=>(
        <Palette color={palettes.color}/>))}
        </PaletteContainer>

        </ModalDiv>
        </ModalBG>
        </>
        : null }
        
        </>
        
    )
}


export default ColorModal