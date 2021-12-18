import * as S from './style';
import patchBtn from '../../../assets/img/patchBtn.svg';
import del from '../../../assets/img/del.svg';
import { useEffect, useState } from 'react';
import { requestWithToken } from '../../../api/axios';

const ShowPost = ({ board_id }) => {
  const [boardData, setBoardData] = useState({});

  useEffect(() => {
    requestWithToken('get', `board/oneview/${board_id}`, {}).then((res) => {
      setBoardData(res);
    });
  }, []);
  return (
    <div>
      <S.ContentHeader>
        <S.TitleBar>
          <S.TopTitle>{boardData.title}</S.TopTitle>
          <S.Language>{boardData.filed}</S.Language>
        </S.TitleBar>
        <S.Writer>{boardData.username}</S.Writer>
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
        <S.PostText>{boardData.context}</S.PostText>
      </S.Post>
    </div>
  );
};

export default ShowPost;
