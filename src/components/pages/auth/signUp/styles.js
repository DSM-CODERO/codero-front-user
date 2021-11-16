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
  margin-bottom: 40px;
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
      background-color: #d2d2d2;
      height: 45px;
      cursor: pointer;
    }
    .signUp {
      margin-left: 94px;
      z-index: 2;
      background-color: #e9ebf2;
      height: 39px;
    }
  }
  .main {
    position: relative;
    margin-top: 38px;
    width: 542px;
    height: 470px;
    background-color: #e9ebf2;
    z-index: 1;
    border-radius: 10px;
    border: 0.5px solid #c1c2c6;
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      width: 437px;
      height: 47px;
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
      margin-left: -40px;
      cursor: pointer;
    }
    .look {
      width: 20px;
      height: 20px;
      margin-top: 32px;
    }
    .send {
      width: 17px;
      height: 17px;
      margin-top: 57px;
    }
    .signUpBtn {
      width: 467px;
      height: 47px;
      border-radius: 24px;
      border: 1px solid #aeadad;
      background-color: #324290;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 43px;
      cursor: pointer;
      span {
        color: white;
        font-weight: 100;
      }
    }
    .email {
      margin-top: 42px;
    }
    input {
      margin-top: 19px;
    }
  }
`;
