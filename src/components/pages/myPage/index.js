import React from "react";
import * as S from "./styles";
import editImg from "../../../assets/img/edit.png";
import profileImg from "../../../assets/img/profile-user.png";
import Header from "../header/Header";
import axios from "axios";
import { BASE_URL } from "../../../api/export";
import { useState } from "react/cjs/react.development";

export default function MyPage() {
  const [post, setPost] = useState([]);

  axios
    .get(BASE_URL + "board/mypage?page=5")
    .then((res) => {
      setPost(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

  axios
    .get(BASE_URL + "user/mypage")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <>
      <Header />
      <S.MainDiv>
        <div className="title">
          <span>마이페이지</span>
          <span className="writePost">
            <img src={editImg} alt="" />
          </span>
        </div>
        <hr />
        <div className="profile">
          <img src={profileImg} alt="" />
          <span className="information">
            <div className="user">USER 님</div>
            <div>id123</div>
            <div>user@gmail.com</div>
          </span>
        </div>
        <div className="mainPost">
          <div>
            <span className="writePost">내가 작성한 게시물</span>
            <span className="goodPost">좋아요한 게시물</span>
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
  );
}