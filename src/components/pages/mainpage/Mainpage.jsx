import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Front from "../../../assets/js.png";
import Back from "../../../assets/java.png";
import Android from "../../../assets/android.png";
import ios from "../../../assets/apple.png";
import * as s from "./style";
import axios from "axios";

axios.defaults.baseURL = "http://13.209.80.53";

function Mainpage() {
  useEffect(() => {
    axios.get("/board/allview?page=").then((res) => {
      console.log(res.data);
    });
  }, []);

  const [viewContent, SetViewContent] = useState();

  return (
    <s.Main>
      <s.Flex>
        <s.Board>
          <s.BoardList>
            <s.BoardHead>댓글이 없는 게시물</s.BoardHead>
            <s.BoardProduct>
              <s.ProductTitle>제목</s.ProductTitle>
              <s.ProductText>내용</s.ProductText>
              <s.ProdcutField>분야</s.ProdcutField>
            </s.BoardProduct>
            <s.BoardProduct>
              <s.ProductTitle>제목</s.ProductTitle>
              <s.ProductText>내용</s.ProductText>
              <s.ProdcutField>분야</s.ProdcutField>
            </s.BoardProduct>
          </s.BoardList>
          <s.BoardList>
            <s.BoardHead>인기게시물</s.BoardHead>
            <s.BoardProduct>
              <s.ProductTitle>제목</s.ProductTitle>
              <s.ProductText>내용</s.ProductText>
              <s.ProdcutField>분야</s.ProdcutField>
            </s.BoardProduct>
            <s.BoardProduct>
              <s.ProductTitle>제목</s.ProductTitle>
              <s.ProductText>내용</s.ProductText>
              <s.ProdcutField>분야</s.ProdcutField>
            </s.BoardProduct>
          </s.BoardList>
          <s.BoardList>
            <s.BoardHead>최근게시물</s.BoardHead>
            <s.BoardProduct>
              <s.ProductTitle>제목</s.ProductTitle>
              <s.ProductText>내용</s.ProductText>
              <s.ProdcutField>분야</s.ProdcutField>
            </s.BoardProduct>
            <s.BoardProduct>
              <s.ProductTitle>제목</s.ProductTitle>
              <s.ProductText>내용</s.ProductText>
              <s.ProdcutField>분야</s.ProdcutField>
            </s.BoardProduct>
          </s.BoardList>
        </s.Board>
      </s.Flex>
      <s.Belt>
        <Link to="/Front" style={{ textDecoration: "none" }}>
          <s.List>
            <s.ListImg src={Front} alt="logo" />
            Frontend
          </s.List>
        </Link>
        <Link to="/Back" style={{ textDecoration: "none" }}>
          <s.List>
            <s.ListImg src={Back} alt="logo" />
            Backend
          </s.List>
        </Link>
        <Link to="/Android" style={{ textDecoration: "none" }}>
          <s.List>
            <s.ListImg src={Android} alt="logo" />
            Android
          </s.List>
        </Link>
        <Link to="/IOS" style={{ textDecoration: "none" }}>
          <s.List>
            <s.ListImg src={ios} alt="logo" />
            IOS
          </s.List>
        </Link>
      </s.Belt>
    </s.Main>
  );
}
export default Mainpage;
