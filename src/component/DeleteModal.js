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

width: 40vw;
height: 20vw;

background-color: ${(props) => props.theme.fontColor};
`
const ModalText=styled.div`
color:${(props) => props.theme.bgColor};
font-size: 1.5vw;

`
const ModalMenu=styled.div`
margin: 3vw 0 0 0;
font-size: 1.9vw;
`

const YesButton=styled.button`
margin: 0 5vw 0 0;
width: 7vw;

`

const NoButton=styled.button`
width: 7vw;
`

const DeleteModal = ({showModal,closeModal}) => {
    return (
        <>
        { showModal ?
        
        <ModalBG>
            <ModalContainer>
                

                <ModalText> 이 게시물을 삭제하시겠습니까?</ModalText>
                <ModalMenu>
                    <YesButton>yes</YesButton>
                    <NoButton onClick={closeModal}>no</NoButton>
                </ModalMenu>

            </ModalContainer>
            
        </ModalBG> : null}
        
        
        </>
        
)
}

export default DeleteModal