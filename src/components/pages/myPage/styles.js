import styled from 'styled-components';

export const MainDiv = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Noto+Sans+KR&display=swap');
  margin-bottom: 76px;
  .title {
    margin-left: 278px;
    margin-right: 183px;
    margin-top: 36px;
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
    font-family: 'Anton', sans-serif;
    font-size: 27px;
    font-weight: bold;
    color: #324290;
    img {
      width: 27px;
      height: 27px;
    }
  }
  hr {
    border: 0;
    margin-left: 278px;
    width: 1067px;
    height: 1px;
    background-color: #707070;
  }
  .profile {
    display: inline-flex;
    align-items: center;
    margin-left: 278px;
    margin-top: 44px;
    img {
      width: 107px;
      height: 107px;
      margin-right: 34px;
    }
    .information {
      font-size: 20px;
      color: #707070;
      .user {
        font-size: 26px;
        color: #000000;
      }
    }
  }
  .mainPost {
    margin-top: 61px;
    margin-left: 278px;
    .goodPost {
      margin-left: 38px;
    }
    hr {
      height: 0.1px;
      margin-left: 0;
      margin-bottom: 20px;
    }
    .post {
      width: 1067px;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-row-gap: 30px;
      div {
        width: 174px;
        height: 211px;
        border: 1px #707070 solid;
      }
    }
  }
`;

export const MypageAuth = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthHead = styled.div`
  margin-top: 220px;
  display: flex;
  justify-content: center;
`;

export const H2 = styled.h2``;

export const LoginBtn = styled.input`
  width: 150px;
  height: 50px;
  margin-right: 50px;
  border: 1px solid #324290;
  background-color: #324290;
  color: white;
  cursor: pointer;
`;

export const SignBtn = styled.input`
  width: 150px;
  height: 50px;
  border: 1px solid black;
  background-color: white;
  cursor: pointer;
`;
