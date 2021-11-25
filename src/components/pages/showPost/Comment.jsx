import { useRef, useState } from 'react';
import submitPen from '../../../assets/img/commentPen.svg';
import * as S from './style';
import like from '../../../assets/img/like.png';
import noLike from '../../../assets/img/noLike.png';

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
        content: `벡터(vector) 는 헤더파일 <vector> 에 정의되어 있는 는 순차 컨테이너의 한 종류로, 각각의 원소들이 선형으로 배열되어 있다.

              벡터 컨테이너는 동적 배열로 구현되는데, 보통의 배열 처럼 벡터 컨테이너들도 각각의 원소들이 메모리 상에서 연속적으로 존재하게 된다. 이 때문에 벡터 컨테이너의 원소를 참조할 때 반복자(iterator) 을 이용해서 순차적으로 참조할 수 있고, 처음 원소의 부터의 상대적인 거리를 이용하여 접근할 수 도 있다.

              하지만, 보통의 배열과는 달리 벡터 컨테이너는 스스로 공간을 할당하고, 크기를 확장할 수 있고, 또 줄일 수 도 있다.

              벡터 컨테이너는 아래와 같은 장점을 가지고 있다.

              각각의 원소를 원소의 인덱스(index) 값으로 바로 참조 가능하다 (상수 시간이 소요)

              원소들을 임의의 순서로 접근할 수 있다. (선형 시간 소요)

              벡터 끝에 새로운 원소를 추가하거나 제거하기 (상수 시간 소요 - constant amortized time)
              벡터는 배열이 제공하는 거의 모든 기능을 다 가지고 있다. 게다가, 벡터 컨테이너의 크기는 쉽게 조정될 수 있기 때문에 매우 용이하다. 하지만 이러한 장점들 때문에 보통의 배열보다 더 많은 메모리 공간을 필요로 한다는 단점이 있다.

              다른 표준 순차 컨테이너 (deque, list) 와 비교해 볼 때, 벡터는 원소에 접근하는 시간이나, 컨테이너의 끝에 새로운 원소를 삽입/삭제 하는것이 매우 효율적이다. 반면에 끝이 아닌 중간에 새로운 원소를 삽입하는 작업은 deque나 list에 비해 느리다.

              벡터 컨테이너는 내부적으로 공간을 관리하기 위해 두 개의 변수를 사용한다. 하나는 size 로 vector::size 함수를 통해서 그 값을 얻을 수 있는데, 이는 현재 벡터에 보관되어 있는 원소의 개수를 의미한다. 다른 하나는 capacity 로 vector::capacity 함수를 통해서 그 값을 얻을 수 있는데, 이는 벡터에 할당된 공간의 크기를 의미한다.

              따라서 당연하게도, capacity 의 크기는 항상 size 보다 크게 조정되며, 만일 원소를 추가해서 size 의 크기가 capacity 를 넘어가 버리면 벡터 내부적으로 추가적인 공간을 할당하게 된다. 이 때 추가적으로 할당되는 공간은 많은 경우 현재 벡터 capacity 만큼 할당되어서 (즉, 전체 할당 크기가 이전의 두 배가 됨) 메모리 할당을 빈번하게 하는 경우를 최대한 줄이고, 사용하는 메모리 양도 줄이도록 최적화되어 있다.

              벡터의 capacity 를 확장하는 작업은 꽤 많은 시간을 필요로 하는 작업이기 때문에 (왜냐하면 일단 메모리를 새로 할당해야 하고, 벡터의 내용을 새로운 장소에 복사해야 하기 때문) 많은 원소를 추가해야되는 경우 vector::reserve 함수를 이용해서 capacity 를 미리 크게 할당해 놓을 수 있다.`,
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
  const [likeState, setLikeState] = useState(false);

  const submit = () => {
    const comment = commentRef.current.value;
    // 개발자 도구를 통해 maxlength 값을 변경할 경우의 비정상적인 길이의 입력 방지
    if (comment.length > 500) {
      alert('비정상적인 입력이 감지되었습니다');
    } else {
      console.log(comment);
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
        />
        <S.LikeButton onClick={clickLike}>
          <img src={likeState ? like : noLike} alt="like post" />
        </S.LikeButton>
        <S.SubmitButton onClick={submit}>
          <img src={submitPen} alt="comment submit pen" />
        </S.SubmitButton>
      </S.CommentInputBar>
      <S.CommentBox>
        {commentData.map((data) => (
          <div key={data.id}>
            <S.Comment>
              <b>{data.name}</b>
              {data.content}
            </S.Comment>
            <div>
              {data.reply.map((repData) => (
                <S.CommentReply key={repData.id}>
                  <b>{repData.name}</b>
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
