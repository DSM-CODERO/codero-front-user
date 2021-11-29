import { useState } from 'react';
import * as S from './style';
import submitPen from '../../../assets/img/commentPen.svg';
import replyArrow from '../../../assets/img/replyArrow.png';

const OneUserComment = ({ data }) => {
  const [repWriting, setRepWriting] = useState(false);
  const writeReply = () => {
    console.log('click!!');
    setRepWriting((rep) => !rep);
  };

  return (
    <div>
      <S.Comment onClick={writeReply}>
        <b>{data.name}</b>
        {data.content}
      </S.Comment>
      <div>
        {repWriting && (
          <S.ReplyWriteBar>
            <S.RepArrow src={replyArrow} alt="reply curved arrow icon" />
            <S.WriteReply>
              <S.ReplyInput />
              <S.RepSubmit>
                <img src={submitPen} alt="reply submit" />
              </S.RepSubmit>
            </S.WriteReply>
          </S.ReplyWriteBar>
        )}
      </div>
      <div>
        {data.reply.map((repData) => (
          <S.CommentReply key={repData.id}>
            <b>{repData.name}</b>
            <span>{repData.content}</span>
          </S.CommentReply>
        ))}
      </div>
    </div>
  );
};

export default OneUserComment;
