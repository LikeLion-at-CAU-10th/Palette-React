import React, {useState, useEffect} from 'react'
import Tab from './Tab'
import {MenuContainer, ColorBox} from '../styles/PDstyled'
import axios from 'axios'




const PostDetailMenu = ({post}) => {


    return (
        <>
        <MenuContainer>
            <Tab name='main color' img={<ColorBox maincolor={post.color} />}></Tab>
            <Tab name='prev'/>
            <Tab name='next'/>
        </MenuContainer>
        
        </>
    )
}

export default PostDetailMenu