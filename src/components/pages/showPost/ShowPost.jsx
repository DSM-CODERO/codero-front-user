import * as S from "./style";
import patchBtn from "../../../assets/img/patchBtn.svg";
import del from "../../../assets/img/del.svg";

const ShowPost = () => {
  const text = {
    // test용 객체
    writer: "kim",
    title: "C++ 표준 라이브러리인 <algorithm> 라이브러리에 대해",
    content: `
    C++ 표준 라이브러리 <algorithm> 라이브러리에는 원소들에 대해 작업할 수 있는 여러가지 함수(검색, 정렬, 원소들 수정하기, 개수 세기 등등) 들을 정의하고 있습니다.

    이 때 작업할 원소들은 반복자 혹은 포인터를 통해 가리킬 수 있으며, 아래 함수들의 경우 작업을 시작할 원소와, 작업을 끝낼 원소 바로 뒤를 인자로 받게 됩니다. 식으로 표현하자면 [first, last) 의 형태로 보시면 됩니다.
    `,
    language: "C/C++",
  };
  return (
    <S.Page>
      <S.Panel>
        <S.ContentHeader>
          <S.TitleBar>
            <S.TopTitle>{text.title}</S.TopTitle>
            <S.Language>{text.language}</S.Language>
          </S.TitleBar>
          <S.Writer>{text.writer}</S.Writer>
        </S.ContentHeader>
        <S.Post>
          <S.BtnBar>
            <S.Button>
              <img src={patchBtn} alt="patch button" />
              <label>수정</label>
            </S.Button>
            <S.Button>
              <img src={del} alt="delete button" />
              <label>삭제</label>
            </S.Button>
          </S.BtnBar>
          <S.Title>게시글</S.Title>
          <S.PostText>{text.content}</S.PostText>
        </S.Post>
      </S.Panel>
    </S.Page>
  );
};

export default ShowPost;
