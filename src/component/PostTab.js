import React, {useState} from 'react'
import styled from 'styled-components'
// import {TabDom} from '../styles/PDstyled'

export const PostTabDom = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    /* background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.fontColor}; */
    background-color: white;
    color: black;
    font-family: "Poppins-Bold";
    font-size: 1.1111vw;
    border: solid 0.0694vw transparent;
    border-top-left-radius: 1.2vw;
    border-top-right-radius: 1.2vw;
    padding: 0.9vw 0.58vw;
    width: 12.3vw;
    text-align: center;
`;

const PostTab = (props) => {
    

    return (
        <>
        <PostTabDom onClick={props.openModal}> {props.name} {props.img} </PostTabDom>
        </>


    )
}

export default PostTab