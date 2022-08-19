import React, { useCallback, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import logo from "../../data/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LogoImg = styled.img`
  height: 1.5278vw;
  transform: scale(2);
`;

const LoginForm = styled.div`
  width: 420px;
  height: 210px;
  padding: 3% 0% 3% 0%;
  background-color: rgba(69, 69, 69, 1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const FormZone = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoImgDom = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1%;
`;

const FormInputDom = styled.div`
  width: 340px;
  height: 50px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 14px;
  margin-bottom: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormInput = styled.input`
  width: 90%;
  margin: 1%;
  outline: none;
  border: none;
  font-size: 1.2em;
  ::placeholder {
    color: rgba(190, 190, 190, 1);
  }
  font-family: "Poppins-Bold";
`;

const SignUpDom = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  padding-top: 5%;
`;

const SignUpInto = styled.div`
  color: rgba(255, 255, 255, 1);
  width: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8%;
  font-family: "Poppins-Bold";
`;

const Border = styled.div`
  height: 1px;
  background-color: rgba(99, 99, 99, 1);
  width: 340px;
`;

const SubmitBtn = styled(FormInputDom)`
  background-color: rgba(25, 75, 254, 1);
  color: white;
  margin-bottom: 0;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins-Bold";
  cursor: pointer;
`;

export const SignUpBtn = styled(SubmitBtn)`
  margin-top: 5%;
`;

export const GlobalStyle = createGlobalStyle`
  html {
    background: black;
  }
`;

export const MainPageDom = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const LoginPage = () => {
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignUpBtn = () => {
    navigate("/signup");
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginBtn = useCallback(
    (e) => {
      axios
        .post(
          "https://localhost:8000/login",
          {
            email,
            password,
          },
          {
            "Content-Type": "application/json",
          }
        )
        .then((res) => {
          setLoginSuccess(true);
          if (res.data.success) {
            navigate("/");
          }
        })
        .catch((error) => {
          setLoginError(error.response.data);
        });
    },
    [email, password]
  );
  return (
    <MainPageDom>
      <GlobalStyle />
      <LogoImgDom>
        <LogoImg src={logo} />
      </LogoImgDom>
      <LoginForm>
        <FormZone>
          <FormInputDom>
            <FormInput
              type="text"
              onChange={onChangeEmail}
              value={email}
              placeholder="e-mail"
            />
          </FormInputDom>
          <FormInputDom>
            <FormInput
              type="text"
              onChange={onChangePassword}
              value={password}
              placeholder="password"
            />
          </FormInputDom>
        </FormZone>
        <SubmitBtn onClick={handleLoginBtn}>LOG IN</SubmitBtn>
      </LoginForm>
      <SignUpDom>
        <Border />
        <SignUpInto>Don't have an account?</SignUpInto>
        <SignUpBtn onClick={handleSignUpBtn}>SIGN UP</SignUpBtn>
      </SignUpDom>
    </MainPageDom>
  );
};

export default LoginPage;
