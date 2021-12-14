import { useEffect, useRef, useState } from 'react';
import { request } from '../../../../api/axios';
import ImageView from '../makePost/ImageView';
import * as S from '../makePost/style';

const PatchPost = () => {
  const languageList = [
    'C/C++', // 임시로 작성한 언어 리스트
    'C#',
    'Objective-C',
    'GO',
    'Java',
    'Python',
    'JavaScript',
    'TypeScript',
    'Kotlin',
    'Swift',
    'Dart',
  ];

  const contentRef = useRef();
  const languageRef = useRef();

  const [fileUrl, setFileUrl] = useState([]); // 이미지 값 저장
  const imageNum = useRef(0); // 배열의 키 값으로 활용

  const [data, setData] = useState({});

  useEffect(() => {
    request('get', 'board/oneview/22', {})
      .then((res) => {
        setData(res);
        console.table(data);
      })
      .catch((err) => console.log(err));
  }, [data]);

  const { title, context, filed, board_id } = data;

  const submit = () => {
    if (title && context) {
      const data = {
        title,
        context,
        filed,
      };

      request('patch', `board/${board_id}`, {}, data);
    } else {
      alert('제목과 내용을 모두 입력해주세요!!');
    }
  };

  const dataChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  // key 입력 이벤트를 받아 title에서 content로 focus를 변경한다
  const nextFocus = (e) => {
    if (e.key === 'Enter') {
      contentRef.current.focus();
    }
  };

  const chooseFile = (e) => {
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    const imageData = {
      image: imageUrl,
      id: imageNum.current++, //key 값을 변경해가며 추가
    };
    setFileUrl([...fileUrl, imageData]);

    console.table(fileUrl);
  };

  const del = () => {
    request('delete', `board/${board_id}`, {}, {});
  };

  return (
    <S.Page>
      <S.Panel>
        <S.Title>게시물 수정</S.Title>
        <S.InputPanel>
          <S.InputHeader>
            <S.TitleInput
              value={title}
              placeholder="제목을 입력해주세요"
              maxLength="100"
              spellCheck="false"
              name="title"
              onChange={dataChange}
              onKeyUp={nextFocus}
            />
            <S.LangSelect
              ref={languageRef}
              value={filed}
              onChange={dataChange}
              name="filed"
            >
              {languageList.map((language) => (
                <option key={language}>{language}</option>
              ))}
            </S.LangSelect>
            <S.AddFile htmlFor="input-file">파일첨부</S.AddFile>
            <input
              style={{ display: 'none' }}
              onChange={chooseFile}
              id="input-file"
              type="file"
              accept=" image/jpeg, image/png, image/jpg"
            />
          </S.InputHeader>
          <S.PostInput
            value={context}
            name="context"
            onChange={dataChange}
            ref={contentRef}
            spellCheck="false"
            placeholder="내용을 입력해주세요"
            maxLength="1000"
          />
          <S.Preview>
            {fileUrl.map((img) => (
              <ImageView
                key={img.id}
                image={img}
                setFile={setFileUrl}
                data={fileUrl}
              />
            ))}
          </S.Preview>
        </S.InputPanel>
        <S.BtnBar>
          <S.Delete className="del" onClick={del}>
            게시물 삭제
          </S.Delete>
          <S.Submit className="patch" onClick={submit}>
            게시물 수정
          </S.Submit>
        </S.BtnBar>
      </S.Panel>
    </S.Page>
  );
};

export default PatchPost;
