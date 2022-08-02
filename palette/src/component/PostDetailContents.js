import React, {useState, useEffect} from 'react'
import { TextBoxContainer, TC,} from '../styles/PDstyled.js';
import PostDetailProps from './PostDetailProps.js';

const PostDetailContents = () => {
    return (
        <>
                <TextBoxContainer>
                    <TC>
                        <PostDetailProps></PostDetailProps>
                        
                    </TC>
                </TextBoxContainer>
        </>

    )
}

export default PostDetailContents