import styled from "styled-components";

export const Header = styled.div`
  margin-top: 0px;
  width: 100% auto;
  height: 55px;
  background-color: black;
`;

export const MainDiv = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Anton&family=Noto+Sans+KR&display=swap");
  .title {
    margin-left: 278px;
    margin-right: 183px;
    margin-top: 52px;
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
    font-family: "Anton", sans-serif;
    font-size: 24px;
    font-weight: bold;
    color: #324290;
    img {
      width: 27px;
      height: 27px;
    }
  }
  hr {
    margin-left: 278px;
    width: 1067px;
    height: 1px;
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
  }
  .post {
      margin-top: 71px;
  }
`;
