import styled from "styled-components"

export const PostContainer = styled.div`
background-color: ${(props)=> props.BGcolor};
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
`

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