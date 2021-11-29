import styled from 'styled-components';

export const Page = styled.main`
  display: grid;
  justify-items: center;
`;

export const Panel = styled.div`
  width: auto;
  display: grid;
`;

export const Post = styled.section`
  width: 1200px;
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
  color: #324290;
  font-family: 'Noto Sans kr';
  font-weight: normal;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;

  // 밀줄 치는 코드
  text-decoration: none;
  background-image: linear-gradient(#e9ebf2, #e9ebf2),
    linear-gradient(#91a7ff, #91a7ff);
  background-size: 100% 5px, 0 5px;
  background-position: 50% 0, 50% 100%;
  background-repeat: no-repeat;
  transition: background-size 0.4s linear;

  &:hover {
    background-size: 0 2px, 100% 2px;
  }

  label {
    cursor: pointer;
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
`;

export const SubmitButton = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #324290;
  width: 90px;
  height: 90px;

  img {
    height: 30px;
  }
`;

export const LikeButton = styled(SubmitButton)`
  background-color: white;
  img {
    height: 40px;
  }
`;

export const CommentInput = styled.textarea`
  width: 1000px;
  padding-left: 30px;
  scrollbar-width: none;
  border: none;
  border-radius: 10px;
  font-size: 25px;
  padding-top: 25px;
  resize: none;

  font-family: 'Noto Sans kr';
  font-weight: normal;

  outline: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CommentBox = styled.div`
  border-top: gray 1px solid;
  margin-bottom: 40px;
`;

export const Comment = styled.div`
  border-bottom: gray 1px solid;
  padding: 10px;
  white-space: pre-line;
  word-break: break-all;
  width: 1180px;

  display: flex;
  justify-content: space-between;

  font-family: 'Noto Sans kr';
  font-weight: normal;

  color: #324290;

  span {
    font-size: 18px;
  }

  b {
    font-size: 20px;
    padding-right: 20px;
  }
`;

export const CommentReply = styled(Comment)`
  padding-left: 50px;
  width: 1140px;

  span {
    font-size: 16px;
  }

  b {
    font-size: 18px;
  }
`;

export const WriteReply = styled.div`
  margin: 10px;
  margin-right: 0px;
  margin-left: 0px;

  border-radius: 50px;
  border: 1px gray solid;

  display: flex;
  justify-content: space-between;

  width: auto;
  height: 50px;
`;

export const ReplyInput = styled.textarea`
  width: 1050px;
  padding-left: 25px;
  padding-top: 10px;
  height: 35px;
  scrollbar-width: none;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  resize: none;

  font-family: 'Noto Sans kr';
  font-weight: normal;

  outline: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const RepSubmit = styled.button`
  border: none;
  border-radius: 50px;
  background-color: #324290;
  width: 55px;
  height: 50px;

  img {
    height: 20px;
  }
`;

export const RepArrow = styled.img`
  height: 40px;
  justify-self: right;
  margin: 10px;
`;

export const ReplyWriteBar = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
`;

export const Toggle = styled.img`
  height: 20px;
  margin: 5px;
  margin-left: 10px;

  transition: all 0.5s linear;
  transform: rotate(${({ toggle }) => toggle && '180deg'});
`;
