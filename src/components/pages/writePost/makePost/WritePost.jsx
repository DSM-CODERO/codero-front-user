import { useRef, useState } from 'react';
import ImageView from './ImageView';
import * as S from './style';

const WritePost = () => {
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
  const titleRef = useRef();
  const languageRef = useRef();

  const submit = () => {
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const language = languageRef.current.value;

    if (title && content) {
      const data = {
        title,
        content,
        language,
      };
      console.table(data);
    } else {
      alert('제목과 내용을 모두 입력해주세요!!');
    }
  };

  // key 입력 이벤트를 받아 title에서 content로 focus를 변경한다
  const nextFocus = (e) => {
    if (e.key === 'Enter') {
      contentRef.current.focus();
    }
  };

  const [fileUrl, setFileUrl] = useState([]); // 이미지 값 저장
  const imageNum = useRef(0); // 배열의 키 값으로 활용

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

  return (
    <S.Page>
      <S.Panel>
        <S.Title>게시물 작성</S.Title>
        <S.InputPanel>
          <S.InputHeader>
            <S.TitleInput
              placeholder="제목을 입력해주세요"
              maxLength="30"
              ref={titleRef}
              onKeyUp={nextFocus}
            />
            <S.LangSelect ref={languageRef}>
              {languageList.map((language) => (
                <option key={language}>{language}</option>
              ))}
            </S.LangSelect>
            <S.AddFile for="input-file">파일첨부</S.AddFile>
            <input
              style={{ display: 'none' }}
              onChange={chooseFile}
              id="input-file"
              type="file"
              accept=" image/jpeg, image/png, image/jpg"
            />
          </S.InputHeader>
          <S.PostInput
            ref={contentRef}
            spellCheck="false"
            placeholder="내용을 입력해주세요"
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
        <S.Submit onClick={submit}>게시물 등록</S.Submit>
      </S.Panel>
    </S.Page>
  );
};

export default WritePost;
