import submitPen from '../../../assets/img/commentPen.svg';
import * as S from './style';
const Comment = () => {
  return (
    <div>
      <S.CommentInputBar>
        <textarea maxLength="200" />
        <button>
          <img src={submitPen} alt="comment submit pen" />
        </button>
      </S.CommentInputBar>
    </div>
  );
};

export default Comment;
