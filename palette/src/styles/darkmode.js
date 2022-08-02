import styled from "styled-components"

import { createGlobalStyle } from "styled-components";

import reset from "styled-reset";

    export const lightTheme = {
    fontColor: "#2c2c2c",
    bgColor: "white",
    dateColor: "grey",
    move: "0.1vw",

    };

    export const darkTheme = {
    fontColor: "white",
    bgColor: "black",
    dateColor : "white",
    move: "1.8vw",

    };


    //전역에 일관된 설정 적용
    //reset = 기본 설정 무시
    export const GlobalStyles = createGlobalStyle`
        ${reset}
    `;


export const DarkModeContainer = styled.div`
display: flex;
font-size: 1vw;
cursor: pointer;
`

export const ToggleBall = styled.button`
border-radius: 100%;
background-color: white;
width: 1vw;
height: 1vw;
border: 0.5px solid transparent;
color: white;
position: relative;
left: ${(props) => props.theme.move};
cursor: pointer;

`

export const ToggleButton =styled.div`
display: flex;
align-items: center;
background-color: grey;
width: 3vw;
height: 1.3vw;
border-radius: 0.6vw;
position: relative;
bottom: 63.4vw;
left: 21vw;
`

export const ButtonContainer = styled.div`
display: flex;
align-items: center;
margin-right: 4vw;

`

export const EditButton = styled.div`
padding-right: 0.5vw;
border-right: 0.1vw solid grey;

`

export const DeleteButton = styled.div`
padding-left: 0.5vw;

`