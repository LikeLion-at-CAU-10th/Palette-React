import React from 'react'
import styled from 'styled-components'

const ModalBG=styled.div`
position: fixed;
top:0;
left: 0;
bottom:0;
right: 0;
z-index: 1;
background-color: rgba(0,0,0,0.5);

display: flex;
justify-content: center;
align-items: center;
`

const ModalContainer=styled.div`
position: fixed;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 2vw;
width: 33vw;
height: 15vw;

background-color: ${(props) => props.theme.fontColor};
padding: 1.5vw;
`
const ModalText=styled.div`
color:${(props) => props.theme.bgColor};
font-size: 1.3vw;
margin: 0.5vw;
`
const ModalMenu=styled.div`
margin: 3vw 0 0 0;
font-size: 1.9vw;
`

const ModalButton=styled.button`
width: 7vw;
height: 3vw;
border-color: transparent;
border-radius: 3vw;
font-family: "Poppins-Bold";
background-color: #F1F1F1;
color: black;
font-size: 1vw;
margin : 0 2.5vw;
`
const ModalButtonNo=styled(ModalButton)`
color: red;
`

const DeleteModal = ({showModal,closeModal}) => {
    return (
        <>
        { showModal ?
        
        <ModalBG onClick={closeModal}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                <ModalText> 삭제한 게시물은 복구할 수 없습니다.</ModalText>
                <ModalText> 이 게시물을 삭제하시겠습니까?</ModalText>
                <ModalMenu>
                    <ModalButton>cancel</ModalButton>
                    <ModalButtonNo onClick={closeModal}>delete</ModalButtonNo>
                </ModalMenu>

            </ModalContainer>
            
        </ModalBG> : null}
        
        
        </>
        
)
}

export default DeleteModal