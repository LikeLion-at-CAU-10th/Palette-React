import styled from "styled-components"

export const PostDetailBody = styled.div`
position: relative;
display: flex;
`

//PostDetail.js
export const PostDetailContainer=styled.div`
flex-direction: column;
background-color: ${(props)=> props.maincolor};

display: flex;
justify-content: center;
align-items: center;
`

//PostDetailMenu.js
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
background-color: ${(props)=> props.maincolor};
margin: 0 0 0 1vw;
`


//Tab.js
export const TabDom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.fontColor};
    font-family: "Poppins-Bold";
    font-size: 1.1111vw;
    border: solid 0.0694vw transparent;
    border-top-left-radius: 1.2vw;
    border-top-right-radius: 1.2vw;
    padding: 0.9vw 0.58vw;
    width: 11vw;
    text-align: center;
`;



//TextBox.js
export const TextBoxContainer=styled.div`
    height: 64.2361vw;
    width: 59.5vw;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.fontColor};
    flex-direction: column;
    box-shadow: 0.7vw 0.6vw 0.6vw rgba(0, 0, 0, 0.5);
    margin-bottom: 10vw;
`

export const TC=styled.div`
display: flex;
flex-direction: column;
padding: 5vw 7vw;
border: solid 0.0694vw transparent;

height: 53.5vw;
`

export const PostTitle =styled.div`
border: solid 0.0694vw transparent;
color: ${(props) => props.theme.fontColor};
border-bottom-color: ${(props) => props.theme.dateColor};
padding: 1vw;
flex-basis: 5%;
font-size: 1.5vw;
align-items: center;
line-height: -3vw;
`
export const PostTitleDiv =styled.div`
`

export const PostDate =styled.div`
border: solid 0.0694vw transparent;
padding: 1vw;
flex-basis: 30%;
width: 6vw;
`

export const PostDateContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-basis: 2%;
color: ${(props) => props.theme.dateColor};
font-size: 1vw;
`

export const PostContents =styled.div`
border: solid 0.0694vw transparent;
padding: 1vw;
flex-basis: 80%;
overflow: scroll;
line-height: 3.1vw;
`

