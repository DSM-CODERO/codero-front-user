import React from "react";
import * as S from "./styles";
import logoImg from "../../../../assets/img/logo.png";
import lookImg from "../../../../assets/img/look.png";
import Footer from "../../../common/footer";

export default function Login() {
  return (
    <>
      <S.Header>
        <img src={logoImg} alt="" />
      </S.Header>
      <S.MainDiv>
          <div className="sign">
            <button className="login">
              <span>로그인</span>
            </button>
            <button className="signUp">
              <span>회원가입</span>
            </button>
          </div>
          <div className="main">
            <input type="search" className="email" placeholder="E-mail" />
            <div>
              <input
                type="search"
                className="password"
                placeholder="Password"
              />
              <img src={lookImg} alt="" />
            </div>
            <div className="loginBtn">
              <span>로그인</span>
            </div>
          </div>
      </S.MainDiv>
      <Footer />
    </>
  );
}
