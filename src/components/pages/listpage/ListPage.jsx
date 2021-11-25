import React from "react";
import pen from "../../../assets/pen.png";
import * as s from "./style";

function ListPage() {
  return (
    <s.List>
      <s.ListHead>
        <s.ListName>인기게시물</s.ListName>
      </s.ListHead>
      <s.ListBody>
        <s.ListTable>
          <thead>
            <tr>
              <s.ListTh>제목</s.ListTh>
              <s.ListTh>분야</s.ListTh>
              <s.ListTh>작성자</s.ListTh>
              <s.ListTh>작성일</s.ListTh>
            </tr>
          </thead>
          <tbody>
            <tr>
              <s.ListTd>오류 해결하는 방법 알려주세요</s.ListTd>
              <s.ListTd>JAVA</s.ListTd>
              <s.ListTd>전영준</s.ListTd>
              <s.ListTd>2021.11.09</s.ListTd>
            </tr>
          </tbody>
        </s.ListTable>
      </s.ListBody>
      <s.BtnDiv>
        <s.AddBtn type="button" src={pen} alt="logo" />
      </s.BtnDiv>
      <s.PageDiv></s.PageDiv>
    </s.List>
  );
}
export default ListPage;
