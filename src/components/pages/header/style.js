import styled from "styled-components";

export const Head = styled.div`
  width: 100%;
  height: 80px;
  padding: 0;
  background-color: #2e3c7e;
`;
export const HeadDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Input = styled.input`
  width: 450px;
  height: 30px;
  margin-right: 130px;
  border-radius: 5px;
  border: none;
  font-family: "Noto Sans KR", sans-serif;
  padding-left: 20px;
`;
export const Button = styled.button`
  margin-right: 40px;
  border: none;
  background-color: #2e3c7e;
  color: white;
  font-family: "Noto Sans KR", sans-serif;
  &:hover {
    text-decoration: underline;
  }
`;

export const MarkImg = styled.img`
  width: 70px;
  height: 70px;
  margin-top: 10px;
  margin-right: 340px;
  margin-left: 50px;
`;

export const DocImg = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 200px;
  position: absolute;
`;
