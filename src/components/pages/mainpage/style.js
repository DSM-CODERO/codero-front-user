import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Board = styled.div`
  width: 1000px;
  height: 400px;
  background-color: rgba(18, 24, 49, 0.1);
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
`;

export const BoardList = styled.div`
  width: 150px;
  height: 22px;
  color: #2e3c7e;
  font-family: "Noto Sans KR", sans-serif;
  border: none;
  margin-top: 20px;
  margin-left: 40px;
  margin-right: 40px;
  display: flex;
  justify-content: center;
`;

export const Belt = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(
    to right,
    rgba(191, 0, 0, 0.5),
    rgba(42, 32, 241, 0.5)
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.div`
  width: 280px;
  height: 140px;
  background-color: black;
  margin-left: 40px;
  margin-right: 40px;
  border-radius: 10px;
  color: white;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 20px;
`;

export const ListImg = styled.img`
  width: 120px;
  height: 120px;
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 50px;
`;
