import ShowPost from './ShowPost';
import Comment from './Comment';
import * as S from './style';
import { useParams } from 'react-router-dom';

const PostPage = () => {
  const board_id = useParams().board_id;
  return (
    <S.Page>
      <S.Panel>
        <ShowPost board_id={board_id} />
        <Comment board_id={board_id} />
      </S.Panel>
    </S.Page>
  );
};

export default PostPage;
