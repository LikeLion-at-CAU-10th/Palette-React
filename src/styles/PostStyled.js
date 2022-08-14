import styled from "styled-components"

export const PostContainer = styled.div`
background-color: ${(props)=> props.BGcolor};
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
`
//post-menu
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

//post-submit-modal
export const SubmitModalBG = styled.div`
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: rgba(0,0,0,0.5);
display: flex;
align-items: center;
justify-content: center;
z-index: 1;
`

export const SubmitModalContainer = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border-radius: 10vw;
width: 40vw;
height: 20vw;
background-color: white;
`

export const ModalText=styled.div`
color:${(props) => props.theme.bgColor};
font-size: 1.5vw;
`
export const ModalMenu=styled.div`
margin: 3vw 0 0 0;
font-size: 1.9vw;
`

export const ModalButton=styled.button`
width: 10vw;
height: 3vw;
border-color: transparent;
border-radius: 2vw;
font-family: "Poppins-Bold";
font-size: 1vw;
background-color: ${(props) => props.theme.bgColor};
color: ${(props) => props.theme.fontColor};
margin : 0 2vw;
`
//post-submit
export const PostSubmitDiv = styled.div`
display:flex;
justify-content: center;
margin: 2vw;
`
export const SubmitButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1vw;
    font-family: "Poppins-Bold";
    color: #000000;
    border-radius: 2.3vw;
    border: solid 0.1vw #000000;
    width: 6vw;
    height: 2vw;
    margin: 0 0 -1.5vw 0;
    cursor: pointer;
    &:hover{
        color: grey;
        border: solid 0.1vw grey;
    }
`

export const PostSection = styled.div`
    margin: 0px auto;
    margin-top: 20px;
    width: 90%;
    display: flex; 
    flex-direction: column;
`
export const PostWriteDiv = styled.div`
width: 100%;
display: flex;
flex-direction: column;
background-color: purple;
`