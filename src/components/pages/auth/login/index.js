import React, { useState } from "react";
import * as S from "./styles";
import logoImg from "../../../../assets/img/logo.png";
import eyeImg from "../../../../assets/img/eye.png";
import hideImg from "../../../../assets/img/hide.png";
import Footer from "../../../common/footer";

export default function Login() {
  const [value, setValue] = useState({
    email: "",
    password: "",
    hidePassword: true,
  });

  function handleClickHidePassword() {
    setValue({ ...value, hidePassword: !value.hidePassword });
  }

  const handleInputChange = (props) => (e) => {
    setValue({ ...value, [props]: e.target.value });
    console.log(value);
  };

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
          <input
            type="text"
            onChange={handleInputChange("email")}
            value={value.email}
            className="email"
            placeholder="E-mail"
          />
          <div>
            <input
              type={value.hidePassword ? "password" : "text"}
              onChange={handleInputChange("password")}
              className="password"
              placeholder="Password"
            />
            {value.hidePassword ? (
              <img onClick={handleClickHidePassword} src={eyeImg} alt="" />
            ) : (
              <img onClick={handleClickHidePassword} src={hideImg} alt="" />
            )}
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
