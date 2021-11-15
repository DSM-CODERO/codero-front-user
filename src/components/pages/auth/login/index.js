import React from "react";
import * as S from "./styles";
import logoImg from "../../../../assets/img/logo.png";
import Footer from "../../../common/footer";

export default function Login() {
  return (
    <>
      <S.Header>
        <img src={logoImg} alt="" />
      </S.Header>
      <S.MainDiv>
        <div className="box">
          <div className="sign">
            <button className="login">
              <span>로그인</span>
            </button>
            <button className="signUp">
              <span>회원가입</span>
            </button>
          </div>
          <div className="main">
            <input className="email" placeholder="E-mail" />
            <input className="password" placeholder="Password" />
            <div className="loginBtn">
              <span>로그인</span>
            </div>
          </div>
        </div>
      </S.MainDiv>
      <Footer/>
    </>
  );
}
