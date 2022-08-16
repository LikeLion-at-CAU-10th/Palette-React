import React, {useState, useEffect} from 'react'
import  PostText  from './PostText'
import styled from "styled-components"


const PostTextContainer = styled.div`
    height: 64.2361vw;
    width: 59.6vw;
    background-color: white;
    color: black;
    flex-direction: column;
    box-shadow: 0.7vw 0.6vw 0.6vw rgba(0, 0, 0, 0.5);
    margin-bottom: 10vw;
`

const TC = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5vw 7vw;
    border: solid 0.0694vw transparent;
    height: 53.5vw;
    background-color: white;

`


const PostContents = () => {
    return (
        <>
                <PostTextContainer>
                    <TC>
                        <PostText></PostText>
                        
                    </TC>
                </PostTextContainer>
        </>

    )
}

export default PostContents