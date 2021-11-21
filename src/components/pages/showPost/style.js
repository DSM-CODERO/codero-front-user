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

export const Button=styled.div`
  display:flex;
  align-items:center;

  label{
    margin-left:10px;
    font-size:30px;
    align-self:center;
  }
`;

export const BtnBar=styled.div`
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:22px;
  margin:50px;
  justify-self:right;
`;

export const TopTitle=styled.span`
  font-size:36px;
  font-weight:bold;
  color:#324290;
  max-width:1000px;
  display:block;
  
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
`;

export const Language=styled.span`
  font-size:24px;
  font-weight:bold;
  margin-left:20px;
  color:#324290;
  padding-bottom: 5px;
`;

export const TitleBar=styled.div`
  display: flex;
  align-items:flex-end;
`;

export const ContentHeader=styled.div`
  display:flex;
  justify-content: space-between;
  margin-bottom:30px;
`;

export const Writer=styled.span`
  font-size:37px;
  color:#324290;
`;