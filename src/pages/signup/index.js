import React, { useState, useCallback } from "react";
import { GlobalStyle, SignUpBtn, MainPageDom } from "../login";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = styled.div`
  width: 490px;
  height: 295px;
  padding: 3% 3% 3% 3%;
  background-color: rgba(69, 69, 69, 1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const SignUpTitle = styled.div`
  width: 340px;
  font-size: 1.5em;
  font-family: "Poppins-Bold";
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-bottom: 1%;
`;

const FormInputDom = styled.div`
  width: 450px;
  height: 50px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormInput = styled.input`
  width: 90%;
  margin: 1%;
  outline: none;
  border: none;
  ::placeholder {
    color: rgba(190, 190, 190, 1);
  }
  font-family: "Poppins-Bold";
`;

const InputDom = styled.div`
  display: flex;
  width: 500px;
  margin-bottom: 5%;
  justify-content: flex-start;
  font-family: "Poppins-Bold";
`;

const InputTitle = styled.div`
  display: flex;
  width: 30%;
  justify-content: flex-start;
  align-items: center;
  color: white;
  font-family: "Poppins-Bold";
  font-weight: 400;
`;

const Mismatch = styled.div`
  width: 100%;
  padding-left: 52%;
  margin-top: -3%;
  color: white;
  display: flex;
  align-items: center;
  font-size: 0.9em;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;
const SignUpPage = () => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [mismatchError, setMismatchError] = useState(false);
  const [signUpError, setSignUpError] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [email, setEmail] = useState("");
  const emailRegex =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
  const navigate = useNavigate();

  const onChangeName = (e) => {
    setNickname(e.target.value);
  };

  const onChangePassword = useCallback(
    (e) => {
      const passwordRegex =
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
      const passwordCurrent = e.target.value;
      setPassword(passwordCurrent);
      setMismatchError(e.target.value !== passwordCheck);
      if (!passwordRegex.test(passwordCurrent)) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }
    },
    [passwordCheck]
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== password);
    },
    [password]
  );

  const onChangeEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
      setEmailError(!emailRegex.test(email));
    },
    [email]
  );

  const onSubmit = useCallback(
    (e) => {
      console.log(email);
      console.log(nickname);
      console.log(password);
      console.log(passwordCheck);
      if (!mismatchError) {
        // mismatchError이 false일 때, 즉, match 되었을 때
        setSignUpError("");
        setSignUpSuccess(false);
        axios
          .post(
            "https://localhost:8000/signup",
            {
              nickname,
              password,
              email,
            },
            {
              "Content-Type": "application/json",
            }
          )
          .then((res) => {
            setSignUpSuccess(true);
            if (res.data.success) {
              navigate("/login");
            }
          })
          .catch((error) => {
            setSignUpError(error.response.data);
          });
      }
    },
    [email, nickname, password, passwordCheck, mismatchError]
  );

  return (
    <MainPageDom>
      <GlobalStyle />
      <SignUpTitle>SIGN UP</SignUpTitle>
      <LoginForm>
        <InputDom>
          <InputTitle>닉네임</InputTitle>
          <FormInputDom>
            <FormInput
              onChange={onChangeName}
              type="text"
              placeholder="사용할 닉네임을 입력해주세요."
              value={nickname}
            ></FormInput>
          </FormInputDom>
        </InputDom>
        <InputDom>
          <InputTitle>이메일</InputTitle>
          <FormInputDom>
            <FormInput
              onChange={onChangeEmail}
              type="text"
              placeholder="이메일 주소를 입력해주세요."
              value={email}
            ></FormInput>
          </FormInputDom>
        </InputDom>
        <Mismatch visible={emailError}>
          이메일 형식이 올바르지 않습니다.
        </Mismatch>
        <InputDom>
          <InputTitle>비밀번호</InputTitle>
          <FormInputDom>
            <FormInput
              onChange={onChangePassword}
              type="text"
              placeholder="8~30자 이내 비밀번호를 입력해주세요."
              value={password}
            ></FormInput>
          </FormInputDom>
        </InputDom>
        <Mismatch visible={passwordError}>
          숫자+영문자+특수문자 조합으로 8~25자로 입력해주세요.
        </Mismatch>
        <InputDom>
          <InputTitle>비밀번호 확인</InputTitle>
          <FormInputDom>
            <FormInput
              onChange={onChangePasswordCheck}
              type="text"
              placeholder="비밀번호 확인"
              value={passwordCheck}
            ></FormInput>
          </FormInputDom>
        </InputDom>
        <Mismatch visible={mismatchError}>비밀번호가 다릅니다.</Mismatch>
      </LoginForm>
      <SignUpBtn onClick={onSubmit}>SIGN UP</SignUpBtn>
    </MainPageDom>
  );
};

export default SignUpPage;
