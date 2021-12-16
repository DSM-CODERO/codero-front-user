import { useEffect, useRef, useState } from 'react';
import submitPen from '../../../assets/img/commentPen.svg';
import * as S from './style';
import like from '../../../assets/img/like.svg';
import noLike from '../../../assets/img/noLike.svg';
import OneUserComment from './OneUserComment';
import { requestWithToken } from '../../../api/axios';

const Comment = () => {
  const commentRef = useRef();
  const [likeState, setLikeState] = useState(false);
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    requestWithToken('get', `board/19/comment`, {}).then((res) => {
      setCommentData(res);
    });
  }, []);

  const submit = () => {
    console.table(commentData);
    const comment = commentRef.current.value;
    // 개발자 도구를 통해 maxlength 값을 변경할 경우의 비정상적인 길이의 입력 방지
    if (comment.length > 500) {
      alert('비정상적인 입력이 감지되었습니다');
    } else {
      requestWithToken('post', `board/19/comment`, {
        context: comment,
      }).then(() => {
        requestWithToken('get', `board/19/comment`, {}).then((res) => {
          setCommentData(res);
        });
        commentRef.current.value = '';
      });
    }
  };

  const clickLike = () => {
    setLikeState((like) => !like);
  };

  return (
    <div>
      <S.CommentInputBar>
        <S.CommentInput
          maxLength="500"
          placeholder="댓글을 입력해주세요"
          ref={commentRef}
          spellcheck="false"
        />
        <S.LikeButton onClick={clickLike}>
          <S.Like
            like={likeState}
            src={likeState ? like : noLike}
            alt="like post"
          />
        </S.LikeButton>
        <S.SubmitButton onClick={submit}>
          <img src={submitPen} alt="comment submit pen" />
        </S.SubmitButton>
      </S.CommentInputBar>
      <S.CommentBox>
        {commentData.map((data) => (
          <OneUserComment key={data.id} data={data} />
        ))}
      </S.CommentBox>
    </div>
  );
};

export default Comment;
