import * as S from './style';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import patchBtn from '../../../assets/img/patchBtn.svg';
import del from '../../../assets/img/del.svg';
import { useEffect, useState } from 'react';
import { requestWithToken } from '../../../api/axios';

const ShowPost = () => {
  const [boardData, setBoardData] = useState({
    title: '',
    filed: '',
    username: '',
    context: '',
  });

  const param = useParams();

  console.log(param);
  useEffect(() => {
    requestWithToken('get', `board/oneview/${param.board_id}`, {}).then(
      (res) => {
        console.log(res);
        res && setBoardData(res);
      },
    );
  }, []);
  return (
    <div>
      <S.Content>
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
              <Link
                to={`/patchpost/${param.board_id}`}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <img src={patchBtn} alt="patch button" />
                <label>수정</label>
              </Link>
            </S.Button>
          </S.BtnBar>
          <S.PostText>{boardData.context}</S.PostText>
        </S.Post>
      </S.Content>
    </div>
  );
};

export default ShowPost;
