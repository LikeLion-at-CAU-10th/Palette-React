import React from "react";
import { GlobalStyle, SignUpBtn, MainPageDom } from "../login";
import styled from "styled-components";

const LoginForm = styled.div`
  width: 490px;
  height: 300px;
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

const SignUpPage = () => {
  return (
    <MainPageDom>
      <GlobalStyle />
      <SignUpTitle>SIGN UP</SignUpTitle>
      <LoginForm>
        <InputDom>
          <InputTitle>닉네임</InputTitle>
          <FormInputDom>
            <FormInput placeholder="사용할 닉네임을 입력해주세요."></FormInput>
          </FormInputDom>
        </InputDom>
        <InputDom>
          <InputTitle>비밀번호</InputTitle>
          <FormInputDom>
            <FormInput placeholder="8~30자 이내 비밀번호를 입력해주세요."></FormInput>
          </FormInputDom>
        </InputDom>
        <InputDom>
          <InputTitle>비밀번호 확인</InputTitle>
          <FormInputDom>
            <FormInput placeholder="비밀번호 확인"></FormInput>
          </FormInputDom>
        </InputDom>
        <InputDom>
          <InputTitle>이메일</InputTitle>
          <FormInputDom>
            <FormInput placeholder="이메일 주소를 입력해주세요."></FormInput>
          </FormInputDom>
        </InputDom>
      </LoginForm>
      <SignUpBtn>SIGN UP</SignUpBtn>
    </MainPageDom>
  );
};

export default SignUpPage;
