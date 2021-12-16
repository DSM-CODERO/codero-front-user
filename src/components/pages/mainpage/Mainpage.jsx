import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Front from '../../../assets/js.png';
import Back from '../../../assets/java.png';
import Android from '../../../assets/android.png';
import ios from '../../../assets/apple.png';
import * as s from './style';
import axios from 'axios';

axios.defaults.baseURL = 'http://13.125.220.4:4000/';

function Mainpage() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    axios
      .get('/board/allview?page=1')
      .then((res) => {
        setInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(info);
  let arr_slice1 = info.slice(0, 2);
  let arr_slice2 = info.slice(2, 4);
  let arr_slice3 = info.slice(4, 6);

  console.log(arr_slice1);

  return (
    <s.Main>
      <s.Flex>
        <s.Board>
          <s.BoardList>
            <s.BoardHead>댓글이 없는 게시물</s.BoardHead>
            {arr_slice1.map((props, i) => {
              return props.title ? (
                <Link
                  to={`${props.board_id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <s.BoardProduct key={i}>
                    <s.ProductTitle>{props.title}</s.ProductTitle>
                    <s.ProductText>{props.context}</s.ProductText>
                    <s.ProdcutField>{props.filed}</s.ProdcutField>
                  </s.BoardProduct>
                </Link>
              ) : (
                <s.BoardProduct></s.BoardProduct>
              );
            })}
          </s.BoardList>
          <s.BoardList>
            <s.BoardHead>인기 게시물</s.BoardHead>
            {arr_slice2.map((props, i) => {
              return props.title ? (
                <Link
                  to={`${props.board_id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <s.BoardProduct key={i}>
                    <s.ProductTitle>{props.title}</s.ProductTitle>
                    <s.ProductText>{props.context}</s.ProductText>
                    <s.ProdcutField>{props.filed}</s.ProdcutField>
                  </s.BoardProduct>
                </Link>
              ) : (
                <s.BoardProduct></s.BoardProduct>
              );
            })}
          </s.BoardList>
          <s.BoardList>
            <s.BoardHead>최근 게시물</s.BoardHead>
            {arr_slice3.map((props, i) => {
              return props.title ? (
                <Link
                  to={`${props.board_id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <s.BoardProduct key={i}>
                    <s.ProductTitle>{props.title}</s.ProductTitle>
                    <s.ProductText>{props.context}</s.ProductText>
                    <s.ProdcutField>{props.filed}</s.ProdcutField>
                  </s.BoardProduct>
                </Link>
              ) : (
                <s.BoardProduct></s.BoardProduct>
              );
            })}
          </s.BoardList>
        </s.Board>
      </s.Flex>
      <s.Belt>
        <Link to="/Front" style={{ textDecoration: 'none' }}></Link>
        <Link to="/Back" style={{ textDecoration: 'none' }}></Link>
        <Link to="/Android" style={{ textDecoration: 'none' }}></Link>
        <Link to="/IOS" style={{ textDecoration: 'none' }}>
          <s.List>
            <s.ListImg src={ios} alt="logo" />
            IOS
          </s.List>
        </Link>
      </s.Belt>
    </s.Main>
  );
}
export default Mainpage;
