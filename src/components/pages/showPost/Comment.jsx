import { useRef } from 'react';
import submitPen from '../../../assets/img/commentPen.svg';
import * as S from './style';

const commentData = [
  {
    id: 1,
    name: 'user1',
    content:
      '우와 정말 유익해요!! ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
    reply: [
      {
        id: 1,
        name: 'replyUser1',
        content: 'ㅇㅈ',
      },
      {
        id: 2,
        name: 'replyUser2',
        content:
          '근데 설명이 너무 어렵네 gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
      },
    ],
  },
  {
    id: 2,
    name: 'user2',
    content: '이걸 모르는 사람이 있어??????',
    reply: [],
  },
];

const Comment = () => {
  const commentRef = useRef();

  const submit = () => {
    console.log(commentRef.current.value);
  };

  return (
    <div>
      <S.CommentInputBar>
        <textarea
          maxLength="500"
          placeholder="댓글을 입력해주세요"
          ref={commentRef}
        />
        <button onClick={submit}>
          <img src={submitPen} alt="comment submit pen" />
        </button>
      </S.CommentInputBar>
      <S.CommentBox>
        {commentData.map((data) => (
          <div key={data.id}>
            <S.Comment>
              <S.UserComment>
                <b>{data.name}</b>
                {data.content}
              </S.UserComment>
            </S.Comment>
            <div>
              {data.reply.map((repData) => (
                <S.CommentReply key={repData.id}>
                  <span>{repData.name}</span>
                  <span>{repData.content}</span>
                </S.CommentReply>
              ))}
            </div>
          </div>
        ))}
      </S.CommentBox>
    </div>
  );
};

export default Comment;
