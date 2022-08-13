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
width: 1vw;
height: 1vw;
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
padding: 0 3vw;
flex-wrap: wrap;
background-color: #2c2c2c;
`

export const Palette = styled.div`
width: 2.7vw;
height: 2.7vw;
margin: 0.5vw -0.5vw 1vw 0;
cursor: pointer;
border-radius: 50%;
border: solid 0.1vw #000;
background-color: ${(props)=> props.color};
`