import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 63px;
  img {
    width: 150px;
    height: 150px;
  }
`;

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 163px;

  .sign {
    button {
      font-size: 17px;
      position: absolute;
      width: 94px;
      border: 0.5px solid #c1c2c6;
      border-radius: 10px 10px 0 0;
      color: #666666;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      border-bottom: none;
      span {
        margin-top: 7px;
      }
    }
    .login {
      background-color: #e9ebf2;
      z-index: 2;
      height: 39px;
    }
    .signUp {
      margin-left: 94px;
      background-color: #d2d2d2;
      height: 38px;
    }
  }
  .main {
    margin-top: 38px;
    width: 542px;
    height: 318px;
    background-color: #e9ebf2;
    z-index: 1;
    border-radius: 10px;
    border-top-left-radius: 0;
    border: 0.5px solid #c1c2c6;
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      width: 467px;
      height: 40px;
      border-radius: 24px;
      border: 1px solid #5f6ca8;
      padding: 0 15px;
    }
    input::placeholder {
      color: #848ebc;
      font-size: 17px;
    }
    img {
      position: absolute;
      width: 16px;
      height: 16px;
      margin-top: 40px;
      margin-left: -30px;
    }
    .loginBtn {
      width: 467px;
      height: 47px;
      border-radius: 24px;
      border: 1px solid #aeadad;
      background-color: #324290;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 43px;
      span {
        color: white;
        font-weight: 100;
      }
    }
    .email {
      margin-top: 67px;
    }
    .password {
      margin-top: 27px;
    }
  }
`;
