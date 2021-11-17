import { useRef } from "react";
import * as S from "./style";

const WritePost = () => {
  const languageList = [
    "C/C++",
    "C#",
    "java",
    "python",
    "java script",
    "type script",
    "kotlin",
    "swift",
    "dart",
  ];

  const postData = useRef();

  const click = () => {
    const data = postData.current.value;
    console.log(data);
  };
  return (
    <S.Page>
      <S.Panel>
        <S.Lavel>게시물 작성</S.Lavel>
        <S.InputPanel>
          <S.InputHeader>
            <S.TitleInput placeholder="제목을 입력해주세요" maxLength="30" />
            <S.LangSelect>
              {languageList.map((language) => (
                <option key={language}>{language}</option>
              ))}
            </S.LangSelect>
            <S.AddFile onClick={click}>파일첨부</S.AddFile>
          </S.InputHeader>
          <S.PostInput ref={postData} />
        </S.InputPanel>
        <S.Submit>게시물 등록</S.Submit>
      </S.Panel>
    </S.Page>
  );
};

export default WritePost;
