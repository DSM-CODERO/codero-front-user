import ShowPost from './ShowPost';
import Comment from './Comment';
import * as S from './style';

const PostPage = () => {
  return (
    <S.Page>
      <S.Panel>
        <ShowPost />
        <Comment />
      </S.Panel>
    </S.Page>
  );
};

export default PostPage;
