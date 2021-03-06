import { useRef, useState } from 'react';
import swal from 'sweetalert';
import Header from '../../header/Header';
import { useNavigate } from 'react-router-dom';
import { requestWithToken } from '../../../../api/axios';
import ImageView from './ImageView';
import * as S from './style';

const WritePost = () => {
  const languageList = [
    'Front',
    'Back',
    'Android',
    'IOS',
    'AI',
    'SECURITY',
    'GAME',
  ];

  const contentRef = useRef();
  const titleRef = useRef();
  const languageRef = useRef();

  const [fileUrl, setFileUrl] = useState([]); // 이미지 값 저장
  const imageNum = useRef(0); // 배열의 키 값으로 활용

  const submit = () => {
    const title = titleRef.current.value;
    const context = contentRef.current.value;
    const filed = languageRef.current.value;

    if (title && context) {
      const data = {
        title,
        context,
        filed,
        image: fileUrl[0],
      };

      requestWithToken('post', 'board', data)
        .then((res) => {
          swal('게시물 작성 성공', '버튼을 눌러주세요', 'success');
          navigate('/');
        })
        .catch((err) => {
          console.log(err);
        })
        .then((e) => {
          setFileUrl([]);
        });

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

  const navigate = useNavigate();

  const loginHistory = () => {
    navigate('/login');
  };

  const signHistory = () => {
    navigate('/signup');
  };

  return (
    <>
      {localStorage.getItem('Authorization') ? (
        <>
          <Header />
          <S.Page>
            <S.Panel>
              <S.Title>게시물 작성</S.Title>
              <S.InputPanel>
                <S.InputHeader>
                  <S.TitleInput
                    placeholder="제목을 입력해주세요"
                    maxLength="100"
                    spellCheck="false"
                    ref={titleRef}
                    onKeyUp={nextFocus}
                  />
                  <S.LangSelect ref={languageRef} size="1">
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
                <S.Submit onClick={submit}>게시물 등록</S.Submit>
              </S.BtnBar>
            </S.Panel>
          </S.Page>
        </>
      ) : (
        <>
          <Header />
          <S.AuthHead>
            <S.H2>로그인 및 회원가입을 해주세요</S.H2>
          </S.AuthHead>
          <S.WritepageAuth>
            <S.LoginBtn type="button" value="로그인" onClick={loginHistory} />
            <S.SignBtn type="button" value="회원가입" onClick={signHistory} />
          </S.WritepageAuth>
        </>
      )}
    </>
  );
};

export default WritePost;
