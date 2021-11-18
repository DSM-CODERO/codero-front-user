import React from "react";
import Front from "../../../assets/js.png";
import Back from "../../../assets/java.png";
import Android from "../../../assets/android.png";
import ios from "../../../assets/apple.png";
import * as s from "./style";

function Mainpage() {
  return (
    <s.Main>
      <s.Flex>
        <s.Board>
          <s.BoardList>댓글이 없는 게시물</s.BoardList>
          {/* Link로 대신 할 것을 버튼으로 표현한 것입니다.*/}
          <s.BoardList>인기게시물</s.BoardList>
          <s.BoardList>최근게시물</s.BoardList>
        </s.Board>
      </s.Flex>
      <s.Belt>
        <s.List>
          <s.ListImg src={Front} alt="logo" />
          Frontend
        </s.List>
        <s.List>
          <s.ListImg src={Back} alt="logo" />
          Backend
        </s.List>
        <s.List>
          <s.ListImg src={Android} alt="logo" />
          Android
        </s.List>
        <s.List>
          <s.ListImg src={ios} alt="logo" />
          IOS
        </s.List>
      </s.Belt>
    </s.Main>
  );
}
export default Mainpage;
