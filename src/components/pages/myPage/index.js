import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import * as S from './styles';
import editImg from '../../../assets/img/edit.png';
import profileImg from '../../../assets/img/profile-user.png';
import axios from 'axios';
import { BASE_URL } from '../../../api/export';
import { useState } from 'react/cjs/react.development';

export default function MyPage() {
  const [userGet, SetuserGet] = useState({
    username: '',
    email: '',
  });
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get(BASE_URL + 'board/mypage?mypage=1')
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    const token = localStorage.getItem('Authorization');

    axios
      .get(BASE_URL + 'user/mypage', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        SetuserGet(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const navigate = useNavigate();

  const writeHistory = () => {
    navigate('/writepost');
  };

  const loginHistory = () => {
    navigate('/login');
  };

  const signHistory = () => {
    navigate('/signup');
  };

  return (
    <>
      {localStorage.getItem('Authorization') ? (
        <>
          <Header />
          <S.MainDiv>
            <div className="title">
              <span>마이페이지</span>
              <span>
                <img src={editImg} alt="" onClick={writeHistory} />
              </span>
            </div>
            <hr />
            <div className="profile">
              <img src={profileImg} alt="" />
              <span className="information">
                <div className="user">{userGet.username}</div>
                <div>{userGet.email}</div>
              </span>
            </div>
            <div className="mainPost">
              <div>
                <span className="writePost">내가 작성한 게시물</span>
              </div>
              <hr />
              <div className="post">
                {post.map((item) => (
                  <div>{item}</div>
                ))}
              </div>
            </div>
          </S.MainDiv>
        </>
      ) : (
        <>
          <Header />
          <S.AuthHead>
            <S.H2>로그인 및 회원가입을 해주세요</S.H2>
          </S.AuthHead>
          <S.MypageAuth>
            <S.LoginBtn type="button" value="로그인" onClick={loginHistory} />
            <S.SignBtn type="button" value="회원가입" onClick={signHistory} />
          </S.MypageAuth>
        </>
      )}
    </>
  );
}
