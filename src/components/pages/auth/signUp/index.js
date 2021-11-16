import React from "react";
import * as S from "./styles";
import logoImg from "../../../../assets/img/logo.png";
import lookImg from "../../../../assets/img/look.png";
import sendImg from "../../../../assets/img/send.png";
import Footer from "../../../common/footer";

export default function SignUp() {
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
            <div>
              <input type="search" className="email" placeholder="E-mail" />
              <img className="send" src={sendImg} alt="" />
            </div>
            <input
              type="search"
              className="authentication"
              placeholder="인증번호를 입력하세요"
            />
            <div>
              <input
                type="search"
                className="password"
                placeholder="Password"
              />
              <img className="look" src={lookImg} alt="" />
            </div>
            <div>
              <input
                type="search"
                className="password"
                placeholder="Password 확인"
              />
              <img className="look" src={lookImg} alt="" />
            </div>
            <input type="search" className="nickname" placeholder="닉네임" />
            <div className="signUpBtn">
              <span>회원가입</span>
            </div>
          </div>
        </div>
      </S.MainDiv>
      <Footer />
    </>
  );
}
