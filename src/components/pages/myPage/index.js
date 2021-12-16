import React from "react";
import * as S from "./styles";
import editImg from "../../../assets/img/edit.png";
import profileImg from "../../../assets/img/profile-user.png";

export default function MyPage() {
  return (
    <>
      <S.Header className="header"></S.Header>
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
          <span>
            <div>USER 님</div>
            <div>id123</div>
            <div>user@gmail.com</div>
          </span>
        </div>
        <div className="post">
            <span>
                내가 작성한 게시물
            </span>
            <span>
                좋아요한 게시물
            </span>
        </div>
      </S.MainDiv>
    </>
  );
}
