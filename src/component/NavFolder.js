import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import folderColor from '../data/folderColorData'

const NavFolderBG = styled.div`
position: fixed;
background-color: transparent;
`

const FolderModalCon = styled.div`
display: flex;
position: fixed;
right: 11vw;
top: 4vw;
`

const Folders=styled.div`
background-color: ${(props)=> props.color};
border-radius: 50%;
padding: 0.5vw;
width: 1vw;
height: 1vw;
margin: 0.3vw;
border: 0.02vw solid white;
`

const CloseButton = styled.div`
background-color: skyblue;
width: 7vw;
height: 3vw;
position: fixed;
top: 0.5vw;
opacity: 0;
`



const NavFolder = ({showModal, closeModal}) => {

    const navigate = useNavigate();

    const changeFolder = (a) => {
        navigate(`../folder/${a}`);
        console.log(a)
    };


    return (
<>
        {showModal?
        <>
        <CloseButton onClick={closeModal}/>
        <NavFolderBG>
        <FolderModalCon>{folderColor.folderData.map((folders, i)=>(
            <Folders key={i} color={folders.color} 
            onClick={folders.func} 
            ></Folders>
        ))}
            
        </FolderModalCon>
        </NavFolderBG></>
        
    : null
    }

    </>

    
        
    )
}

export default NavFolder