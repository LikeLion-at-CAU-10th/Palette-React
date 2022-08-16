import styled from "styled-components"

export const ModalDiv=styled.div`
    /* margin-top : 10vw; */
    position: absolute;
    width: 32vw;
    height: 80vh;
    background-color: #2c2c2c;
    padding: 1.5vw 0 8vw 0;
    cursor: pointer;
    overflow: scroll;
    overflow-x: hidden; 
    box-shadow: 0.5vw 0.5vw 0.5vw rgba(0, 0, 0, 0.5);
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    color: white;
    margin: 2vw 2.5vw;
    font-family: Poppins-Bold;
`

export const ModalTitle=styled.div`
    font-size: 1.5vw;
`

export const CloseButton = styled.img`
width: 1.2vw;
height: 1.2vw;
`

export const ModalBG=styled.div`
position: absolute;
top:0;
left: 0;
bottom:0;
right: 0;
z-index: 1;
`

export const PaletteContainer = styled.div`
display: flex;
justify-content: center;
padding: 0 2.5vw;
flex-wrap: wrap;
background-color: #2c2c2c;
`

export const Palette = styled.input`
width: 3vw;
height: 3vw;
margin: 0.5vw -0.9vw 1vw 0;
cursor: pointer;
border-radius: 50%;
border: solid 0.1vw #000;
background-color: ${(props)=> props.color};
color: transparent;
`
//스티커 탭
export const StickerMenu = styled.img`
width: 2vw;
height: 2vw;
position: relative;
right: 7vw;
`

export const StickerPalette = styled.div`
width: 2vw;
height: 2vw;
background-color: ${(props)=> props.color};
`

export const StickerPaletteDiv = styled.div`
display: flex;
flex-wrap: wrap;
width: 20vw;
position: absolute;
left: 32.5vw;
top: 0.02vw;
z-index: 1;
`

export const StiPalette = styled.img`
padding: 1.1vw;
margin-bottom: 2vw;

width: 6vw;
height: 6vw;

`