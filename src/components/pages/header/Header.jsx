import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import mark from "../../../assets/mark.png";
import doc from "../../../assets/doc.png";
import * as s from "./style";

function Header() {
  const navigate = useNavigate();

  const onClickMain = () => {
    navigate("/");
  };

  return (
    <s.Head>
      <s.HeadDiv>
        <s.MarkImg src={mark} alt="logo" onClick={onClickMain} />
        <s.Select type="input" placeholder="검색할 분야를 입력해주세요" />
        <s.Button>
          <s.Dropdown>
            MENU
            <s.Dropcontent>
              <Link to="/Front" style={{ textDecoration: "none" }}>
                <s.Content>Front-end</s.Content>
              </Link>
              <Link to="/Back" style={{ textDecoration: "none" }}>
                <s.Content>Back-end</s.Content>
              </Link>
              <Link to="/Android" style={{ textDecoration: "none" }}>
                <s.Content>Android</s.Content>
              </Link>
              <Link to="/IOS" style={{ textDecoration: "none" }}>
                <s.Content>IOS</s.Content>
              </Link>
              <Link to="/AI" style={{ textDecoration: "none" }}>
                <s.Content>AI</s.Content>
              </Link>
              <Link to="SECURITY" style={{ textDecoration: "none" }}>
                <s.Content>SECURITY</s.Content>
              </Link>
              <Link to="GAME" style={{ textDecoration: "none" }}>
                <s.Content>GAME</s.Content>
              </Link>
            </s.Dropcontent>
          </s.Dropdown>
        </s.Button>
        <Link to="/MYPAGE">
          <s.Button>MYPAGE</s.Button>
        </Link>
        <Link to="/LOGIN">
          <s.Button>LOGIN/SIGN UP</s.Button>
        </Link>
      </s.HeadDiv>
    </s.Head>
  );
}
export default Header;
