import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import LogoImg from '../../../../assets/img/logo.png';
import eyeImg from '../../../../assets/img/eye.png';
import hideImg from '../../../../assets/img/hide.png';
import axios from 'axios';
import { BASE_URL } from '../../../../api/export';

export default function Login() {

  const [value, setValue] = useState({
    email: '',
    password: '',
    hidePassword: true,
  });

  function handleClickHidePassword() {
    setValue({ ...value, hidePassword: !value.hidePassword });
  }

  const handleInputChange = (props) => (e) => {
    setValue({ ...value, [props]: e.target.value });
    console.log(value);
  };

  const handleLoginBtn = () => {
    const { email, password } = value;
    const data = {
      email: email,
      password: password,
    };
    axios
      .post(BASE_URL + 'user/login', data)
      .then(onLoginSuccess)
      .catch((err) => {
        console.log(err);
      });
  };

  const onLoginSuccess = (res) => {
    const { accessToken } = res.data;
    localStorage.setItem('Authorization', accessToken);
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  };

  const navigate = useNavigate();

  const signHistory = () => {
    navigate('/signup');
  };

  const mainHistory = () => {
    navigate('/');
  };

  return (
    <>
      <S.Header>
        <img src={LogoImg} alt="logo" onClick={mainHistory} />
      </S.Header>
      <S.MainDiv>
        <div className="sign">
          <button className="login">
            <span>로그인</span>
          </button>
          <button className="signUp">
            <span onClick={signHistory}>회원가입</span>
          </button>
        </div>
        <div className="main">
          <input
            type="text"
            onChange={handleInputChange('email')}
            value={value.email}
            className="email"
            placeholder="E-mail"
          />
          <div>
            <input
              type={value.hidePassword ? 'password' : 'text'}
              onChange={handleInputChange('password')}
              className="password"
              placeholder="Password"
            />
            <img
              onClick={handleClickHidePassword}
              src={value.hidePassword ? eyeImg : hideImg}
              alt=""
            />
          </div>
          <div className="loginBtn" onClick={handleLoginBtn}>
            로그인
          </div>
        </div>
      </S.MainDiv>
    </>
  );
}
