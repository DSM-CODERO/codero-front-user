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
  width: 1200px;
  /* height: 1607px; */
  height: auto;
  background-color: #e9ebf2;
  display: grid;
  justify-items: center;
  border-radius: 10px;
`;

export const PostText = styled.div`
  width: 1000px;
  white-space: pre-line;
  word-break: break-all;
  font-size: 25px;
  font-family: 'Noto Sans kr';
  margin: 100px;
  margin-top: 50px;
  color: #71737b;
  font-weight: normal;
`;

export const Title = styled.h1`
  font-size: 60px;
  font-family: 'Noto Sans kr';
  color: #324290;
  font-weight: normal;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;

  label {
    margin-left: 5px;
    font-size: 16px;
    align-self: center;
  }
`;

export const BtnBar = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
  margin: 50px;
  justify-self: right;
`;

export const TopTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #324290;
  max-width: 800px;

  display: block;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Language = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
  color: #324290;
`;

export const TitleBar = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Writer = styled.span`
  font-size: 26px;
  color: #324290;
`;

export const CommentInputBar = styled.div`
  border: 1px solid grey;
  border-radius: 10px;
  margin-top: 60px;
  margin-bottom: 60px;
  width: 1200px;
  height: 90px;

  display: flex;
  justify-content: space-between;

  button {
    border: none;
    border-radius: 10px;
    background-color: #324290;
    width: 90px;
    height: 90px;

    img {
      height: 30px;
    }
  }

  textarea {
    width: 1140px;
    padding-left: 30px;
    padding-right: 30px;
    /* border: none; */
    border-radius: 10px;
    font-size: 25px;
    padding-top: 25px;
    resize: none;
  }
`;

export const CoomentSubmit = styled.button``;
