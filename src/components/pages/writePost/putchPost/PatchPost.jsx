import { useEffect, useRef, useState } from 'react';
import swal from 'sweetalert';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Header from '../../header/Header';
import { requestWithToken } from '../../../../api/axios';
import ImageView from '../makePost/ImageView';
import * as S from '../makePost/style';

const PatchPost = () => {
  const languageList = [
    'Front-end',
    'Back-end',
    'Android',
    'IOS',
    'AI',
    'SECURITY',
    'GAME',
  ];

  const contentRef = useRef();
  const languageRef = useRef();

  const [fileUrl, setFileUrl] = useState([]); // 이미지 값 저장
  const imageNum = useRef(0); // 배열의 키 값으로 활용

  const [data, setData] = useState({});
  const param = useParams();
  useEffect(() => {
    requestWithToken('get', `board/oneview/${param.board_id}`, {}).then(
      (res) => {
        setData(res);
        console.table(data);
      },
    );
  }, []);

  const { title, context, filed, board_id } = data;

  const submit = () => {
    if (title && context) {
      const data = {
        title,
        context,
        filed,
      };

      requestWithToken('patch', `board/${param.board_id}`, data);
    } else {
      alert('제목과 내용을 모두 입력해주세요!!');
    }
    swal('수정 성공', '버튼을 눌러주세요', 'success');
    navigate('/');
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
    requestWithToken('delete', `board/${param.board_id}`, {}, {});
    swal({
      title: '정말 삭제 하시겠습니까?',
      text: '삭제 후 되돌릴 수 없습니다.',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal('삭제 되었습니다.', {
          icon: 'success',
        });
        navigate('/');
      } else {
        swal('삭제 취소!');
        navigate('/');
      }
    });
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

export default PatchPost;
