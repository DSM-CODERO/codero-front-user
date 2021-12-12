import axios from 'axios';

const BASE_URL = `http://13.209.80.53`;

export const request = (method, url, headers, data) => {
  console.log('request call');

  return axios
    .request({
      method,
      url: BASE_URL + url,
      headers: {
        ...headers,
        Authorization: localStorage.getItem('token'),
      },
      data,
    })
    .then((res) => {
      console.log('good');
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw new Error(err);
    });
};
