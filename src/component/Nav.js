import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { useNavigate, Outlet } from 'react-router-dom';
import logo from '../data/logo.png'
import account from '../data/account.png'
import NavFolder from './NavFolder';

const Nav = () => {
    // const navigate = useNavigate();

    const NavBar=styled.div`
    display: flex;
    align-items: center;
    background-color: black;
    color: white;
    height: 6.11vh;
    font-size: 1.25vw;
    font-family: "Poppins-Bold";
    padding: 0 0 0 19vw;
    `

    const NavText=styled.div`
    text-decoration: none;
    margin: 2.5vw;
    cursor: pointer;
    color: white;
    position: relative;
    /* top: 1.3vw; */
    `

    const LogoImg = styled.img`
    height: 1.5278vw;
    width: 3.4722vw;
    margin: 0 0 0 -1vw;
    `

    const NavLeft = styled.div`
    margin: 0 29vw 0 0;
    `
    const NavCenter = styled.div`
    display: flex;
    margin: 0 0 0 5vw;
    `

    const AccountImg = styled.img`
    width: 2.2vw;
    height: 2.2vw;

    `

    const NavRight=styled.div`
    margin: 0.5vw 0 0 11vw;
    `

    const [showModal, setModal] = useState(false);

    const openModal = () =>{
        setModal(!showModal);
    }

    const closeModal = () =>{
        setModal(false);
    }



    return (
        <>
        <NavBar>
            <NavLeft>
                <NavLink to ='/' ><LogoImg src={logo} alt="no imag"/></NavLink> 
            </NavLeft>
            <NavCenter>
                <NavLink to ='/calendar' style={{textDecoration: 'none'}} id='drama'><NavText>calendar</NavText></NavLink>
                <NavLink to ='/post' style={{textDecoration: 'none'}} ><NavText>post</NavText></NavLink>
                <NavText onClick={openModal}>folder</NavText> 
                {showModal ? <NavFolder showModal={showModal} closeModal={closeModal} /> : null} 
            </NavCenter>
            <NavRight>
                <NavLink to='/account'><AccountImg src={account} alt="no imag"/></NavLink>
            </NavRight>
        </NavBar>

        <Outlet  />
        
        </>

        
    )
}

export default Nav