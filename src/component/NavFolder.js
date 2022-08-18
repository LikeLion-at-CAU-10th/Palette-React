import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import data from "../data/folderColorData";

const NavFolderBG = styled.div`
  background-color: transparent;
  width: 30%;
`;

const FolderModalCon = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  right: 11vw;
  top: 4vw;
`;

const Folders = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  padding: 0.5vw;
  width: 1vw;
  height: 1vw;
  margin: 0.3vw;
  border: 0.02vw solid white;
`;

const CloseButton = styled.div`
  width: 7vw;
  height: 3vw;
  position: fixed;
  top: 0.5vw;
  opacity: 0;
`;

const NavFolder = ({ closeModal }) => {
  return (
    <>
      <>
        <CloseButton onClick={closeModal} />
        <NavFolderBG>
          <FolderModalCon>
            {data.map((d, i) => (
              <Link to={`/folder/${data[i].urlPara}`}>
                <Folders color={data[i].color} />
              </Link>
            ))}
          </FolderModalCon>
        </NavFolderBG>
      </>
    </>
  );
};

export default NavFolder;
