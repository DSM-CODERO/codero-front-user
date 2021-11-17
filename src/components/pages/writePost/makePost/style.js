import styled from "styled-components";

export const InputPanel = styled.div`
  width: 1364px;
  height: 647px;
  border: #707070 1px solid;
  border-radius: 15px;
`;

export const Page = styled.main`
  display: grid;
  justify-items: center;
  /* align-items: center; */
`;

export const Panel = styled.div`
  width: auto;
  display: grid;
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
  font-size: 18px;
  background-color: white;
  border: grey 1px solid;
  border-radius: 10px;
  padding-left: 20px;
`;

export const TitleInput = styled.input`
  width: 850px;
  height: 70px;
  border: none;
  font-size: 35px;
  color: #324290;
`;

export const AddFile = styled.button`
  width: 122px;
  height: 48px;
  background-color: #818080;
  font-size: 18px;
  color: white;
  border-radius: 15px;
  border: #818080 0.1px solid;
`;

export const PostInput = styled.textarea`
  width: 1320px;
  height: 500px;
  border-radius: 0 0 15px 15px;

  padding: 20px;
  font-size: 1.5rem;

  outline: none;
  border: 0;
  resize: none;
`;

export const Lavel = styled.label`
  font-size: 36px;
  color: #324290;
  margin-bottom: 48px;
`;

export const Submit = styled.button`
  width: 260px;
  height: 62px;
  background-color: #2e3c7e;

  color: #ffffff;
  font-size: 24px;

  border: 0.1px #2e3c7e solid;
  border-radius: 15px;
  margin-top: 41px;

  justify-self: right;
`;
