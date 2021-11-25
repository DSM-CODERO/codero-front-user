import styled from "styled-components";

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ListHead = styled.div`
  width: 100%;
  height: 30px;
`;

export const ListBody = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListName = styled.h2`
  color: #324290;
  font-family: "Noto Sans KR", sans-serif;
  margin-left: 270px;
`;

export const ListTable = styled.table`
  width: 1000px;
  border-top: 1px solid #444444;
  border-collapse: collapse;
`;

export const ListTh = styled.th`
  border-bottom: 1px solid #444444;
  padding: 10px;
`;

export const ListTd = styled.td`
  border-bottom: 1px solid #444444;
  padding: 10px;
  text-align: center;
`;

export const BtnDiv = styled.div`
  width: 1270px;
  display: flex;
  justify-content: flex-end;
`;

export const AddBtn = styled.input`
  width: 80px;
  height: 40px;
  margin-top: 50px;
  border: none;
  border-radius: 10px;
  background-color: #324290;
`;

export const PageDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
