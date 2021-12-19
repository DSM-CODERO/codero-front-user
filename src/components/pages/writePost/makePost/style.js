import styled from 'styled-components';

export const InputPanel = styled.div`
  width: 1200px;
  height: auto;
  border: #707070 1px solid;
  border-radius: 15px;
`;

export const Page = styled.main`
  display: grid;
  justify-items: center;
`;

export const Panel = styled.div`
  width: auto;
  display: grid;
  margin-top: 70px;
`;

export const Btn = styled.button`
  justify-self: right;
`;

export const InputHeader = styled.div`
  height: 102px;
  width: 100%;
  border-bottom: #707070 1px solid;

  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-items: center;
  align-items: center;
`;

export const LangSelect = styled.select`
  width: 258px;
  height: 48px;
  color: #324290;
  transition: 0.3s ease-in;
  font-size: 18px;
  background-color: white;
  border: grey 1px solid;
  border-radius: 10px;
  padding-left: 20px;

  font-family: 'Noto Sans KR';
  font-weight: normal;
`;

export const TitleInput = styled.input`
  width: 500px;
  height: 70px;
  border: none;
  margin-right: 100px;
  font-size: 30px;
  color: #324290;
  font-family: 'Noto Sans KR';
  font-weight: normal;

  justify-self: left;
  margin-left: 20px;
`;

export const AddFile = styled.label`
  width: 122px;
  height: 48px;
  background-color: #818080;
  font-size: 18px;
  color: white;
  border-radius: 15px;

  font-family: 'Noto Sans KR';
  font-weight: normal;

  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
`;

export const PostInput = styled.textarea`
  width: 700px;
  height: 500px;
  border-radius: 0 0 15px 15px;

  padding: 20px;

  outline: none;
  border: 0;
  resize: none;

  font-size: 25px;
  font-family: 'Noto Sans KR';
  font-weight: normal;
`;

export const Title = styled.label`
  font-size: 30px;
  color: #324290;
  margin-bottom: 48px;

  font-family: 'Noto Sans KR';
  font-weight: bold;
`;

export const BtnBar = styled.div`
  justify-self: right;
  justify-items: right;
`;

export const Submit = styled.button`
  width: 260px;
  height: 62px;
  background-color: #2e3c7e;

  color: #ffffff;
  font-size: 24px;

  border: 0.1px #2e3c7e solid;
  border-radius: 15px;
  margin-top: 40px;

  font-family: 'Noto Sans KR';
  font-weight: 500;
  cursor: pointer;
  &:active {
    transform: scale(0.98);
  }
`;

export const Delete = styled(Submit)`
  background-color: #f54b4c;
  border: 0.1px #f54b4c solid;
  margin-right: 20px;
  cursor: pointer;
`;

export const Preview = styled.div`
  width: 1340px;
  margin: 10px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PreviewImage = styled.img`
  height: 100px;
  margin: 10px;
`;

export const CancelBtn = styled.img`
  width: 20px;
  cursor: pointer;

  position: absolute;
  top: 13px;
  right: 13px;
`;

export const WritepageAuth = styled.div`
  margin-top: 20px;
  margin-bottom: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthHead = styled.div`
  margin-top: 220px;
  display: flex;
  justify-content: center;
`;

export const H2 = styled.h2``;

export const LoginBtn = styled.input`
  width: 150px;
  height: 50px;
  margin-right: 50px;
  border: 1px solid #324290;
  background-color: #324290;
  color: white;
  cursor: pointer;
`;

export const SignBtn = styled.input`
  width: 150px;
  height: 50px;
  border: 1px solid black;
  background-color: white;
  cursor: pointer;
`;
