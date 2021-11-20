import React from "react";
import * as S from "./styles";
import editImg from "../../../assets/img/edit.png";
import profileImg from "../../../assets/img/profile-user.png";
import Header from "../header/Header";
import Footer from "../../common/footer";

export default function MyPage() {
  return (
    <>
      <Header />
      <S.MainDiv>
        <div className="title">
          <span>마이페이지</span>
          <span>
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
            <div></div>
            <div></div>
            <div></div>
          </div>
          {/* 다음에 맵 함수 할 것  */}
        </div>
      </S.MainDiv>
      <Footer/>
    </>
  );
}
