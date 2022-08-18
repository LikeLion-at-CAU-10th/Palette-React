import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useParams, Outlet } from "react-router-dom";
import logo from "../data/logo.png";
import account from "../data/account.png";
import NavFolder from "./NavFolder";
import { selectDomColor } from "../pages/Calendar";

const Nav = () => {
  // const navigate = useNavigate();

  const NavBar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: black;
    color: white;
    height: 6.11vh;
    font-size: 1.25vw;
    font-family: "Poppins-Bold";
    padding: 0 0 0 19vw;
  `;

  const NavFolderSection = styled.div`
    width: 100%;
    color: white;
    font-family: "Poppins-Bold";
    height: 0;
    justify-content: flex-end;
    display: flex;
    background: ${(props) => props.domColor};
    position: static;
    visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  `;
  const NavText = styled.div`
    text-decoration: none;
    margin-left: 2.5vw;
    margin-right: 2.5vw;
    cursor: pointer;
    color: white;
    position: relative;
    /* top: 1.3vw; */
  `;

  const LogoImg = styled.img`
    height: 1.5278vw;
    width: 3.4722vw;
    margin: 0 0 0 -1vw;
  `;

  const NavLeft = styled.div`
    margin: 0 29vw 0 0;
  `;
  const NavCenter = styled.div`
    display: flex;
    margin: 0 0 0 5vw;
  `;

  const AccountImg = styled.img`
    width: 2.2vw;
    height: 2.2vw;
  `;

  const NavRight = styled.div`
    margin: 0.5vw 0 0 11vw;
  `;

  const category = useParams().color;
  const domColor = selectDomColor(category);

  const [showModal, setModal] = useState(false);

  const openModal = () => {
    setModal(!showModal);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <NavBar>
        <NavLeft>
          <NavLink to="/">
            <LogoImg src={logo} alt="no imag" />
          </NavLink>
        </NavLeft>
        <NavCenter>
          <NavLink to="/calendar" style={{ textDecoration: "none" }} id="drama">
            <NavText>calendar</NavText>
          </NavLink>
          <NavLink to="/post" style={{ textDecoration: "none" }}>
            <NavText>post</NavText>
          </NavLink>
          <NavText onClick={openModal}>folder</NavText>
        </NavCenter>
        <NavRight>
          <NavLink to="/account">
            <AccountImg src={account} alt="no imag" />
          </NavLink>
        </NavRight>
      </NavBar>
      <NavFolderSection visible={showModal} domColor={domColor}>
        <NavFolder closeModal={closeModal} />
      </NavFolderSection>

      <Outlet />
    </>
  );
};

export default Nav;
