import React from "react";
import * as S from "./styles";
import logoImg from "../../../assets/img/logo.png";

export default function Footer() {
  return (
    <S.FooterDiv>
      <div className="container">
        <span>
          <img className="logo" src={logoImg} alt="" />
        </span>
        <span>
          <div className="role">Front</div>
          <div className="role">Back</div>
        </span>
        <span>
          <div className="member">전영준</div>
          <div className="member">채희성</div>
        </span>
        <span>
          <div className="member">이동현</div>
          <div className="member">이예빈</div>
        </span>
        <span>
          <div className="member">배준수</div>
          <div className="member">박상진 </div>
        </span>
      </div>
    </S.FooterDiv>
  );
}
