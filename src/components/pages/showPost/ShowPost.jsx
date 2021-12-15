import * as S from './style';
import patchBtn from '../../../assets/img/patchBtn.svg';
import del from '../../../assets/img/del.svg';
import { useEffect, useState } from 'react';
import { requestWithToken } from '../../../api/axios';

const ShowPost = () => {
  const text = {
    // test용 객체
    writer: '김철수',
    title: '두 개의 Queue, Deque에 대해서',
    content: `
    양쪽에서 끝나는 큐 (Double ended queue) 로 <deque> 에 정의되어 있다.

    흔히 줄여서 데크 ("deck") 로 발음된다. 보통의 스택(stack) 의 경우 최상단(top) 에서 삭제(pop) 과 삽입(push) 가 일어나고 반대쪽 (end) 에서는 아무것도 할 수 없다. 또한 큐(queue) 의 경우 한쪽에서는 삭제, 반대쪽에서는 삽입이 일어나지만, 삭제하는 쪽에서는 삽입을, 반대쪽에서는 삭제를 할 수 없다.
    
    즉 스택의 경우 나중에 들어간 것이 먼저 나가는 LIFO (Last In First Out) 구조를, 큐의 경우 먼저 들어간 것이 먼저 나가는 FIFO (First In First Out) 구조를 취하가 된다. 데크의 경우 스택과 큐를 합친 것이라 볼 수 있으며, 즉, 양쪽 끝에서 삭제와 입력 모두 수행할 수 있게 된다.
    
    다른 순차 컨테이너 처럼 데크에서도 데이터는 선형으로 메모리 상에 위치하게 된다.데크는 라이브러리 마다 다른 방식으로 구현되겠지만, 어떤 경우라도 각각의 원소는 임의 접근 반복자를 통해 접근할 수 있고, 크기 할당 역시 자동으로 수행되게 된다.
    
    데크는 아래과 같은 장점이 있다.
    
        개개의 원소들은 각자의 인덱스 값을 통해 접근할 수 있다.
    
        원소를 어떠한 방향으로도 참조해 나갈 수 (iterate) 있다.
    
        데크 끝과 시작 부분에 효율적으로 원소를 추가하거나 삭제할 수 있다.
    
    데크는 벡터( vector) 에서 제공하는 많은 기능을 제공해준다. 하지만, 데크의 경우 벡터와는 다르게 양쪽 끝 모두에서 원소의 효율적인 추가와 삭제가 가능하다. 하지만, 벡터와는 달리 데크는 모든 원소가 메모리 상에 연속적으로 존재한다고 보장할 수 없다. 즉, 포인터 연산을 통해서 데크의 원소들을 안전하게 접근할 수 없다는 의미이다.
    
    벡터와 데크 모두 비슷한 인터페이스를 제공하고 있지만, 내부적으로는 다르게 처리된다. 벡터의 경우 capacity 가 꽉 찼을 경우 새롭게 크게 한 덩어리의 메모리를 할당하게 되지만, 데크의 경우메모리 상에서 잘게 쪼개어서 보관하게 된다. 물론, 데크 객체 자체에서 메모리에 쪼개져서 보관되는 덩어리들의 위치를 기억하고, 각각의 원소에 대해 접근할 수 있는 인터페이스를 제공해준다. 따라서 데크는 내부적으로 벡터의 비해 조금 더 복잡하게 구현되어 있지만 그 덕분에 벡터와는 달리 메모리 공간을 효율적으로 사용할 수 있게 된다. 뿐만 아니라 엄청나게 큰 데이터의 경우, 데크는 벡터와는 다르게 많은 양의 메모리 재할당을 하지 않기 때문에 좀더 빠르다고 볼 수 있다.
    
    처음과 끝 말고 중간에 원소의 삽입과 삭제를 빈번하게 사용한다면 데크 보다는 리스트(list)를 사용하는 것을 추천한다.
    `,
    language: 'C/C++',
  };
  const [boardData, setBoardData] = useState({});

  useEffect(() => {
    requestWithToken('get', `board/oneview/17`, {}).then((res) => {
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
    </div>
  );
};

export default ShowPost;
