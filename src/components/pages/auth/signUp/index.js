import React, { useState } from "react";
import * as S from "./styles";
import logoImg from "../../../../assets/img/logo.png";
import eyeImg from "../../../../assets/img/eye.png";
import hideImg from "../../../../assets/img/hide.png";
import sendImg from "../../../../assets/img/send.png";
import axios from "axios";
import { BASE_URL } from "../../../../api/export";

export default function SignUp() {
  const [value, setValue] = useState({
    email: "",
    authentication: "",
    password: "",
    hidePassword: true,
    passwordCheck: "",
    hidePasswordCheck: true,
    nickname: "",
  });

  async function emailAuthentication() {
    const params = {
      email: value.email,
    };
    await axios
      .get(`${BASE_URL}email`, { params })
      .then((res) => {
        setValue({ ...value, authenticationCheck: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleClickHidePassword = (props) => () => {
    console.log(props);
    if (props === "hidePassword") {
      setValue({ ...value, hidePassword: !value.hidePassword });
    } else {
      setValue({ ...value, hidePasswordCheck: !value.hidePasswordCheck });
    }
  };

  const handleInputChange = (props) => (e) => {
    setValue({ ...value, [props]: e.target.value });
    console.log(value);
  };

  const submitSignup = () => {
    const { password, passwordCheck, email, nickname } = value;
    if (password === passwordCheck) {
      axios
        .post(BASE_URL + "auth/signup", {
          username: nickname,
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => console.log(error));
    } else {
      alert("비밀번호가 동일하지 않습니다!");
    }
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
          <div>
            <input
              type="text"
              onChange={handleInputChange("email")}
              className="email"
              placeholder="E-mail"
            />
            <img
              className="send"
              src={sendImg}
              alt=""
              onClick={() => emailAuthentication()}
            />
          </div>
          <input
            type="text"
            onChange={handleInputChange("authentication")}
            className="authentication"
            placeholder="인증번호를 입력하세요"
          />
          <div>
            <input
              type={value.hidePassword ? "password" : "text"}
              onChange={handleInputChange("password")}
              className="password"
              placeholder="Password"
            />
            <img
              onClick={handleClickHidePassword("hidePassword")}
              className="look"
              src={value.hidePassword ? eyeImg : hideImg}
              alt=""
            />
          </div>
          <div>
            <input
              type={value.hidePasswordCheck ? "password" : "text"}
              onChange={handleInputChange("passwordCheck")}
              className="password"
              placeholder="Password 확인"
            />
            <img
              onClick={handleClickHidePassword("hidePasswordCheck")}
              className="look"
              src={value.hidePasswordCheck ? eyeImg : hideImg}
              alt=""
            />
          </div>
          <input
            type="text"
            onChange={handleInputChange("nickname")}
            className="nickname"
            placeholder="닉네임"
          />
          <div className="signUpBtn" onClick={submitSignup}>
            <span>회원가입</span>
          </div>
        </div>
      </S.MainDiv>
    </>
  );
}
