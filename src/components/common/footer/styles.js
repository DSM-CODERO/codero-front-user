import styled from "styled-components";

export const FooterDiv = styled.div`
  width: 100%;
  height: 104px;
  margin-bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  .container {
      width: 366px;
      height: 40px;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-column-gap: 55px;
  }
  .logo {
    width: 40px;
    height: 40px;
  }
  .member {
      width: 28px;
      color: #7B7B7B;
      font-size: 10px;
      text-align: center;
  }
`;
