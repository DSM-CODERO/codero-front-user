import * as S from './style';
<<<<<<< Updated upstream
=======
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
>>>>>>> Stashed changes
import patchBtn from '../../../assets/img/patchBtn.svg';
import del from '../../../assets/img/del.svg';
import { useEffect, useState } from 'react';
import { requestWithToken } from '../../../api/axios';

<<<<<<< Updated upstream
const ShowPost = ({ board_id }) => {
  const [boardData, setBoardData] = useState({});
=======
const ShowPost = () => {
  const [boardData, setBoardData] = useState({
    title: '',
    filed: '',
    username: '',
    context: '',
  });

  const param = useParams();
>>>>>>> Stashed changes

  console.log(param);
  useEffect(() => {
<<<<<<< Updated upstream
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
=======
    requestWithToken('get', `board/oneview/${param.board_id}`, {}).then(
      (res) => {
        console.log(res);
        res && setBoardData(res);
      },
    );
  }, []);
  return (
    <div>
      <Header />
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
>>>>>>> Stashed changes
    </div>
  );
};

export default ShowPost;
