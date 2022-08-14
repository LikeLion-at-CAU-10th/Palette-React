import React from 'react'
import Tab from './Tab'
import {MenuContainer, ColorBox} from '../styles/PDstyled'



const PostDetailMenu = () => {
    return (
        <>
        <MenuContainer>
            <Tab name='main color' img={<ColorBox />}></Tab>
            <Tab name='prev'/>
            <Tab name='next'/>
        </MenuContainer>
        
        </>
    )
}

export default PostDetailMenu