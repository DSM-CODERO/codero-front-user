import * as S from './style';

const OneUserComment = ({ data }) => {
  return (
    <div>
      <S.Comment>
        <span>
          <b>{data.user_id}</b>
          {data.context}
        </span>
      </S.Comment>
    </div>
  );
};

export default OneUserComment;
