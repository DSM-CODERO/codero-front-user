import React from "react";
import mark from "../../../assets/mark.png";
import doc from "../../../assets/doc.png";
import * as s from "./style";

function Header() {
  return (
    <s.Head>
      <s.HeadDiv>
        <s.MarkImg src={mark} alt="logo" />
        <s.Select type="input" placeholder="검색할 분야를 입력해주세요" />
        <s.DocImg src={doc} alt="logo" />
        <s.Button>
          <div className="dropdown">
            <div>MENU</div>
            <div className="dropdowncontent">
              <div className="content">운동용품</div>
            </div>
          </div>
        </s.Button>
        <s.Button>MYPAGE</s.Button>
        <s.Button>LOGIN/SIGN UP</s.Button>
      </s.HeadDiv>
    </s.Head>
  );
}
export default Header;
