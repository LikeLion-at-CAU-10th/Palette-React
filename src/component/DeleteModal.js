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
/* left: 50%;
top: 50%; */

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
`

const YesButton=styled.button`
`

const NoButton=styled.button`
`

const DeleteModal = () => {
    return (
        <>
        <ModalBG>
            <ModalContainer>
                

                <ModalText> 이 게시물을 삭제하시겠습니까?</ModalText>
                <ModalMenu>
                    <YesButton>삭제</YesButton>
                    <NoButton>노삭제</NoButton>
                </ModalMenu>

            </ModalContainer>
            
        </ModalBG>
        
        
        </>
        
)
}

export default DeleteModal