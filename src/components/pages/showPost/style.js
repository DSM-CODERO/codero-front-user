import styled from 'styled-components';

export const Page = styled.main`
  display: grid;
  justify-items: center;
  /* align-items: center; */
`;

export const Panel = styled.div`
  width: auto;
  display: grid;
`;

export const Post = styled.section`
  width: 1369px;
  /* height: 1607px; */
  height: auto;
  background-color: #e9ebf2;
  display: grid;
  justify-items: center;
  border-radius:10px;
`;

export const PostText = styled.div`
  width: 1150px;
  white-space: pre-line;
  word-break: break-all;
  font-size:36px;
  font-family:"Noto Sans kr";
  margin:110px;
  margin-top:50px;
  color:#71737B;
  font-weight:normal;
  `;

export const Title=styled.h1`
  font-size:80px;
  font-family:"Noto Sans kr";
  color:#324290;
  font-weight:normal;
  `;