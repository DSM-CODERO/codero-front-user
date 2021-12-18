import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import pen from '../../../assets/pen.png';
import * as s from './style';
import axios from 'axios';

axios.defaults.baseURL = 'http://13.125.220.4:4000/';

function ListPage() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get('/board/allview?page=1')
      .then((res) => {
        setInfo(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(info);
  const params = useParams();

  return (
    <>
      <Header />
      <s.List>
        <s.ListHead>
          <s.ListName>{params.listname}</s.ListName>
        </s.ListHead>
        <s.ListBody>
          <s.ListTable>
            <thead>
              <tr>
                <s.ListTh>제목</s.ListTh>
                <s.ListTh>분야</s.ListTh>
                <s.ListTh>작성자</s.ListTh>
                <s.ListTh>작성일</s.ListTh>
              </tr>
            </thead>
            <tbody>
              {info.map((item, index) => (
                <tr>
                  <s.ListTd>
                    <Link
                      to={`/board/${item.board_id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      {item.title}
                    </Link>
                  </s.ListTd>
                  <s.ListTd>{item.filed}</s.ListTd>
                  <s.ListTd>{item.username}</s.ListTd>
                  <s.ListTd>{item.created_at}</s.ListTd>
                </tr>
              ))}
            </tbody>
          </s.ListTable>
        </s.ListBody>
        <s.BtnDiv>
          <s.AddBtn>
            <s.Penimg src={pen} logo="alt" />
          </s.AddBtn>
        </s.BtnDiv>
        <s.PageDiv></s.PageDiv>
      </s.List>
    </>
  );
}
export default ListPage;
