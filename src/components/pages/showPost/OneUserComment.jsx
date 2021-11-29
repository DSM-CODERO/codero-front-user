import { useEffect, useRef, useState } from 'react';
import * as S from './style';
import submitPen from '../../../assets/img/commentPen.svg';
import replyArrow from '../../../assets/img/replyArrow.svg';
import toggleBtn from '../../../assets/img/toggle.svg';

const OneUserComment = ({ data }) => {
  const [repWriting, setRepWriting] = useState(false);
  const [toggle, setToggle] = useState(false);

  const repRef = useRef();

  const writeReply = () => {
    setRepWriting((rep) => !rep);
  };

  const replySubmit = () => {
    console.log(repRef.current.value);
  };

  useEffect(() => {
    if (repRef.current) {
      repRef.current.focus();
    }
  }, [repWriting]);

  return (
    <div>
      <S.Comment>
        <span onClick={writeReply}>
          <b>{data.name}</b>
          {data.content}
        </span>
        {!!data.reply.length && (
          <S.Toggle
            src={toggleBtn}
            alt="show reply"
            onClick={() => setToggle((toggle) => !toggle)}
            toggle={toggle}
          />
        )}
      </S.Comment>
      <div>
        {repWriting && (
          <S.ReplyWriteBar>
            <S.RepArrow src={replyArrow} alt="reply curved arrow icon" />
            <S.WriteReply>
              <S.ReplyInput ref={repRef} />
              <S.RepSubmit onClick={replySubmit}>
                <img src={submitPen} alt="reply submit" />
              </S.RepSubmit>
            </S.WriteReply>
          </S.ReplyWriteBar>
        )}
      </div>
      <div>
        {toggle &&
          data.reply.map((repData) => (
            <S.CommentReply key={repData.id}>
              <span>
                <b>{repData.name}</b>
                {repData.content}
              </span>
            </S.CommentReply>
          ))}
      </div>
    </div>
  );
};

export default OneUserComment;
