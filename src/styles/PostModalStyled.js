import styled from "styled-components"


export const ModalDiv=styled.div`
    /* margin-top : 10vw; */
    position: absolute;
    width: 32vw;
    height: 80vh;
    background-color: #2c2c2c;
    padding: 1.5vw 0 8vw 0;
    cursor: pointer;
    overflow: scroll;
    overflow-x: hidden; 
    box-shadow: 0.5vw 0.5vw 0.5vw rgba(0, 0, 0, 0.5);
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    color: white;
    margin: 2vw 2.5vw;
    font-family: Poppins-Bold;
`

export const ModalTitle=styled.div`
    font-size: 1.5vw;
`