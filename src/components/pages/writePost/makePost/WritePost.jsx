import { useRef, useState } from 'react';
import * as S from './style';

const WritePost = () => {
  const languageList = [
    'C/C++',
    'C#',
    'java',
    'python',
    'java script',
    'type script',
    'kotlin',
    'swift',
    'dart',
  ];

  const contentRef = useRef();
  const [contentData, setContent] = useState('');

  const titleRef = useRef();
  const [title, setTitle] = useState('');

  const languageRef = useRef();
  const [language, setLanguage] = useState(null);

  const submit = () => {
    setContent(contentRef.current.value);
    setTitle(titleRef.current.value);
    setLanguage(languageRef.current.value);
  };

  const nextFocus = (e) => {
    if (e.key === 'Enter') {
      contentRef.current.focus();
    }
  };

  const [fileUrl, setFileUrl] = useState([]);
  const imageNum = useRef(0);
  const chooseFile = (event) => {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    const imageData = {
      image: imageUrl,
      id: imageNum.current++,
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
          <S.PostInput ref={contentRef} spellCheck="false" />
        </S.InputPanel>
        <S.Submit onClick={submit}>게시물 등록</S.Submit>
      </S.Panel>

      <h5>{title}</h5>
      <h6>{language}</h6>
      <p style={{ whiteSpace: 'pre-line' }}>{contentData}</p>
    </S.Page>
  );
};

export default WritePost;
