import axios from 'axios';

// const BASE_URL = `http://54.180.158.164`;
axios.defaults.baseURL = 'http://54.180.158.164';

export const request = (method, url, headers, data) => {
  console.log('request call');

  return axios
    .request({
      method,
      url,
      headers: {
        ...headers,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
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
