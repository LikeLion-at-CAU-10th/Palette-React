import React, {useState} from 'react'
import PostTab from './PostTab'
import styled from "styled-components"
import sticker from '../data/Star4.png'
import camera from '../data/camera.png'
import ColorModal from './ColorModal'
import StickerModal from './StickerModal'
import ImageModal from './ImageModal'

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
background-color: blue;
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

export const ModalContainer=styled.div`
position: fixed;
top: 0;
bottom : 0;
right: 0;
left: 0;
display: flex;
flex-direction: column;
`


const PostMenu = () => {
    

    const [showModal, setModal] = useState(false);

    const openModal = () =>{
        setModal(true);
        
    }
    console.log(showModal);
    

    const closeModal = () =>{
        setModal(false);

    }



    return (
        <>
        <MenuContainer>
            <div>
                <PostTab name='main color' img={<ColorBox/>} openModal={openModal}></PostTab>
                <ColorModal showModal={showModal} closeModal={closeModal}/>
            </div>
            <div>
                <PostTab name='sticker' img={<StickerBox src={sticker}/>} />
            </div>
            <div styled="position:relative">
                <PostTab name='image' img={<ImgBox src={camera}/>}/>
                
                
            </div>
            
        </MenuContainer>

        {/* <ModalContainer>
            <StickerModal/>
            <ImageModal/>
        </ModalContainer>
         */}
        
        </>
    )
}

export default PostMenu